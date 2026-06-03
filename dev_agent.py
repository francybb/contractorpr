import discord
import anthropic
import os
import httpx
import asyncio
import base64
import json
from dotenv import load_dotenv

load_dotenv()

DEV_TOKEN = os.getenv("DEV_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
DEV_CHANNEL_ID = int(os.getenv("DEV_CHANNEL_ID", "0"))
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPO = os.getenv("GITHUB_REPO", "francybb/contractorpr")
NETLIFY_TOKEN = os.getenv("NETLIFY_TOKEN")
NETLIFY_SITE_ID = os.getenv("NETLIFY_SITE_ID")
RENDER_TOKEN = os.getenv("RENDER_TOKEN")

DEV_SYSTEM_PROMPT = """
You are Luis, the Lead Developer of ContractingPR — a contractor marketplace for Puerto Rico.

You talk like a real developer colleague — conversational, direct, no fluff. When Francy
describes a problem or asks for something, you understand what she means even if she's not
technical. You ask clarifying questions if needed, then tell her exactly what you're going
to do and do it.

Tech stack:
- Frontend: HTML, CSS, Vanilla JavaScript (no frameworks)
- Database: Supabase (PostgreSQL) with RLS
- Payments: Stripe escrow
- Hosting: Netlify (site + functions), Render (Discord bots)
- Auth: Supabase Auth (email + password)
- Repo: github.com/francybb/contractorpr (branch: main)

Key files: dashboard-homeowner.html, dashboard-contractor.html, signup.html,
post-job.html, jobs.html, contractor-profile.html, admin.html, payment.html,
reset-password.html, netlify/functions/send-email.js, translate.js, rewrite-job.js

Your workflow when Francy asks you to fix or change something:
1. Read the relevant file(s) from GitHub to understand the current state
2. Explain what you found and what you're going to change — in plain English
3. Generate the fix
4. Show a brief summary of what changed and ask for approval
5. When she says yes/approve/looks good — push it to GitHub
6. Confirm it's live and Netlify is deploying

You also monitor the platform every 5 minutes. If you find a Netlify deploy failure
or Render service issue, proactively alert Francy with what happened and your proposed fix.

When you read files or check status behind the scenes, don't narrate every step —
just tell her what you found and what you're doing about it, like a real colleague would.

Important: You have tools available to read/write files and check platform status.
Use them naturally as part of the conversation without making it feel robotic.
"""

conversation_history = []
pending_fix = None

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

# ── GitHub ──────────────────────────────────────────────────────

async def github_get_file(path):
    url = "https://api.github.com/repos/%s/contents/%s" % (GITHUB_REPO, path)
    try:
        async with httpx.AsyncClient(timeout=15.0) as c:
            r = await c.get(url, headers={
                "Authorization": "Bearer " + GITHUB_TOKEN,
                "Accept": "application/vnd.github+json"
            })
            if r.status_code == 200:
                data = r.json()
                content = base64.b64decode(data["content"]).decode("utf-8")
                return content, data["sha"]
            return None, None
    except Exception as ex:
        print("github_get_file error: %s" % str(ex))
        return None, None

async def github_push_file(path, content, sha, message):
    url = "https://api.github.com/repos/%s/contents/%s" % (GITHUB_REPO, path)
    encoded = base64.b64encode(content.encode("utf-8")).decode("utf-8")
    async with httpx.AsyncClient() as c:
        r = await c.put(url, headers={
            "Authorization": "Bearer " + GITHUB_TOKEN,
            "Accept": "application/vnd.github+json"
        }, json={
            "message": message,
            "content": encoded,
            "sha": sha,
            "branch": "main"
        })
        return r.status_code in (200, 201)

# ── Netlify ─────────────────────────────────────────────────────

async def netlify_check_errors():
    if not NETLIFY_TOKEN or not NETLIFY_SITE_ID:
        return []
    url = "https://api.netlify.com/api/v1/sites/%s/deploys?per_page=5" % NETLIFY_SITE_ID
    async with httpx.AsyncClient() as c:
        r = await c.get(url, headers={"Authorization": "Bearer " + NETLIFY_TOKEN})
        if r.status_code == 200:
            return [d for d in r.json() if d.get("state") == "error"]
        return []

# ── Render ──────────────────────────────────────────────────────

async def render_check_errors():
    if not RENDER_TOKEN:
        return []
    async with httpx.AsyncClient() as c:
        r = await c.get("https://api.render.com/v1/services",
            headers={"Authorization": "Bearer " + RENDER_TOKEN})
        if r.status_code == 200:
            return [s.get("service",{}).get("name") for s in r.json()
                    if s.get("service",{}).get("suspended") == "suspended"]
        return []

# ── AI fix generator ────────────────────────────────────────────

async def generate_fix(file_path, current_content, problem_description):
    prompt = (
        "You are fixing a specific bug in a production file for ContractingPR.\n\n"
        "File: %s\n"
        "Problem: %s\n\n"
        "CRITICAL RULES:\n"
        "1. Return the COMPLETE original file with ONLY the minimum lines changed to fix the problem\n"
        "2. Do NOT rewrite, restructure, or improve anything else\n"
        "3. Do NOT add demo data, placeholder content, or example text\n"
        "4. Do NOT change any functionality that is not related to the problem\n"
        "5. The file must remain fully functional with real Supabase data\n"
        "6. Return raw file content only - no markdown, no code blocks\n\n"
        "Current file content:\n%s"
    ) % (file_path, problem_description, current_content[:10000])
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(None, lambda: anthropic_client.messages.create(
        model="claude-opus-4-5",
        max_tokens=8096,
        messages=[{"role": "user", "content": prompt}]
    ))
    return response.content[0].text

# ── Intent detection ────────────────────────────────────────────

async def detect_intent(user_message, history_context):
    prompt = """You are helping a dev bot understand what the user wants.

Available files in the repo:
dashboard-homeowner.html, dashboard-contractor.html, signup.html, post-job.html,
jobs.html, contractor-profile.html, admin.html, payment.html, reset-password.html,
netlify/functions/send-email.js, netlify/functions/translate.js, netlify/functions/rewrite-job.js,
ceo_agent.py, dev_agent.py, finance_agent.py, support_agent.py, marketing_agent.py, legal_agent.py

Conversation so far:
%s

Latest message: "%s"

Respond with a JSON object (no markdown) with these fields:
- intent: one of "fix_file", "check_status", "read_file", "approve_fix", "reject_fix", "general_chat"
- file: exact filename from the list above if relevant, or null. "contractor profile page" = "contractor-profile.html", "homeowner dashboard" = "dashboard-homeowner.html", "contractor dashboard" = "dashboard-contractor.html"
- problem: description of the problem if fix_file, or null
- confidence: high/medium/low""" % (history_context[-500:], user_message)

    try:
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, lambda: anthropic_client.messages.create(
            model="claude-opus-4-5",
            max_tokens=200,
            messages=[{"role": "user", "content": prompt}]
        ))
        return json.loads(response.content[0].text)
    except:
        return {"intent": "general_chat", "file": None, "problem": None, "confidence": "low"}

# ── Code scanner ────────────────────────────────────────────────

# Known bad patterns to scan for
CODE_PATTERNS = [
    {
        "id": "supabase_init",
        "pattern": "window.supabase.createClient",
        "description": "Wrong Supabase v2 CDN init — should be `const { createClient } = supabase`",
        "severity": "high"
    },
    {
        "id": "budget_field",
        "pattern": "form.budget.value",
        "description": "Budget field reference — budget was removed from job posting",
        "severity": "medium"
    },
    {
        "id": "open_proposals",
        "pattern": "openProposals(",
        "description": "Old openProposals function — replaced by toggleProposals",
        "severity": "medium"
    },
    {
        "id": "close_panel",
        "pattern": "closePanel()",
        "description": "Old closePanel function — panel was replaced by inline expand",
        "severity": "low"
    },
    {
        "id": "hardcoded_demo",
        "pattern": "Juan Rodríguez",
        "description": "Hardcoded demo content found — should use dynamic data",
        "severity": "high"
    },
    {
        "id": "console_log",
        "pattern": "console.log(",
        "description": "console.log left in production code",
        "severity": "low"
    },
    {
        "id": "alert_debug",
        "pattern": "alert(",
        "description": "alert() found — should use toast notifications instead",
        "severity": "medium"
    },
]

FILES_TO_SCAN = [
    "dashboard-homeowner.html",
    "dashboard-contractor.html",
    "signup.html",
    "post-job.html",
    "jobs.html",
    "contractor-profile.html",
    "admin.html",
    "payment.html",
    "reset-password.html",
    "netlify/functions/send-email.js",
    "netlify/functions/translate.js",
    "netlify/functions/rewrite-job.js",
]

last_scan_issues = set()  # Track already-reported issues

async def scan_codebase():
    issues = []
    for file_path in FILES_TO_SCAN:
        file_content, _ = await github_get_file(file_path)
        if not file_content:
            continue
        for pattern in CODE_PATTERNS:
            if pattern["pattern"] in file_content:
                issue_id = "%s::%s" % (file_path, pattern["id"])
                issues.append({
                    "id": issue_id,
                    "file": file_path,
                    "pattern": pattern["pattern"],
                    "description": pattern["description"],
                    "severity": pattern["severity"]
                })
    return issues

# ── Monitor loop ────────────────────────────────────────────────

async def monitor_loop():
    global last_scan_issues
    await client.wait_until_ready()
    channel = client.get_channel(DEV_CHANNEL_ID)
    scan_counter = 0
    while not client.is_closed():
        try:
            # Check Netlify + Render every 5 min
            netlify_errors = await netlify_check_errors()
            if netlify_errors:
                e = netlify_errors[0]
                if channel:
                    await channel.send(
                        "Hey Francy — Netlify had a failed deploy on `%s`.\n"
                        "Error: %s\n\n"
                        "Want me to look into it?" % (e.get("branch", "main"), e.get("error_message", "unknown"))
                    )

            render_issues = await render_check_errors()
            if render_issues:
                if channel:
                    await channel.send(
                        "Render service down: %s — want me to check what happened?" % ", ".join(render_issues)
                    )

            # Scan codebase every 30 min (every 6th loop)
            scan_counter += 1
            if scan_counter >= 6:
                scan_counter = 0
                issues = await scan_codebase()
                new_issues = [i for i in issues if i["id"] not in last_scan_issues]
                high = [i for i in new_issues if i["severity"] == "high"]
                medium = [i for i in new_issues if i["severity"] == "medium"]

                if high or medium:
                    msg = "🔍 **Code scan found %d issue(s):**\n\n" % len(new_issues)
                    for issue in (high + medium)[:5]:
                        emoji = "🔴" if issue["severity"] == "high" else "🟡"
                        msg += "%s `%s` — %s\n" % (emoji, issue["file"], issue["description"])
                    msg += "\nWant me to fix any of these?"
                    if channel:
                        await channel.send(msg)
                    last_scan_issues.update(i["id"] for i in new_issues)

        except Exception as ex:
            print("Monitor error: %s" % str(ex))
        await asyncio.sleep(300)

# ── Main message handler ────────────────────────────────────────

@client.event
async def on_ready():
    print(f"Dev Agent (Luis) online as {client.user}")
    client.loop.create_task(monitor_loop())

processing_messages = set()

@client.event
async def on_message(message):
    global pending_fix

    if message.author == client.user:
        return
    if message.channel.id != DEV_CHANNEL_ID:
        return
    if message.id in processing_messages:
        return
    processing_messages.add(message.id)

    content = message.content.strip()
    content_lower = content.lower().strip()
    history_context = " ".join([m["content"][:100] for m in conversation_history[-4:]])

    # Check approval BEFORE anything else so it never falls through to general chat
    APPROVE_WORDS = {"yes", "approve", "looks good", "do it", "push it", "go ahead", "yep", "sure", "ok", "okay", "push", "deploy", "si", "si"}
    REJECT_WORDS = {"no", "cancel", "reject", "nevermind", "nope", "nah"}

    if pending_fix and content_lower in APPROVE_WORDS:
        async with message.channel.typing():
            await message.channel.send("Pushing the fix now...")
            success = await github_push_file(
                pending_fix["path"],
                pending_fix["content"],
                pending_fix["sha"],
                pending_fix["commit_msg"]
            )
            if success:
                await message.channel.send(
                    "Done! Pushed to GitHub. Netlify should deploy in about a minute. "
                    "Check contractingpr.com once it's live."
                )
            else:
                await message.channel.send(
                    "Push failed. Make sure GITHUB_TOKEN has repo write access in Render env vars."
                )
            pending_fix = None
        return

    if pending_fix and content_lower in REJECT_WORDS:
        pending_fix = None
        await message.channel.send("Got it, cancelled.")
        return

    async with message.channel.typing():

        # Detect what the user wants
        intent_data = await detect_intent(content, history_context)
        intent = intent_data.get("intent", "general_chat")

        # ── Fix a file ──
        if intent == "fix_file" and intent_data.get("confidence") in ("high", "medium"):
            file_path = intent_data.get("file")
            problem = intent_data.get("problem") or content

            if not file_path:
                await message.channel.send("Which file are we talking about? Like `signup.html` or `dashboard-homeowner.html`?")
                return

            await message.channel.send("Let me pull up `%s` and take a look..." % file_path)
            file_content, sha = await github_get_file(file_path)

            if not file_content:
                await message.channel.send(
                    "I couldn't find `%s` in the repo. "
                    "Could be a different filename — want me to list the files?" % file_path
                )
                return

            await message.channel.send("Got it. Working on the fix...")
            try:
                fixed_content = await asyncio.wait_for(
                    generate_fix(file_path, file_content, problem),
                    timeout=90.0
                )
            except asyncio.TimeoutError:
                await message.channel.send("Took too long generating the fix. Try again or give me more details about the problem.")
                return
            except Exception as ex:
                await message.channel.send("Something went wrong generating the fix: %s" % str(ex))
                return
            commit_msg = "fix: %s" % problem[:70]

            pending_fix = {
                "path": file_path,
                "content": fixed_content,
                "sha": sha,
                "commit_msg": commit_msg
            }

            # Show a real diff snippet
            import difflib
            orig_lines_list = file_content.splitlines()
            fixed_lines_list = fixed_content.splitlines()
            diff = list(difflib.unified_diff(orig_lines_list, fixed_lines_list, lineterm='', n=2))
            diff_preview = "\n".join(diff[:40]) if diff else "No visible changes detected"
            orig_lines = len(orig_lines_list)
            fixed_lines = len(fixed_lines_list)

            msg = "Found the issue. Here's exactly what I changed in `%s` (%d → %d lines):\n" % (file_path, orig_lines, fixed_lines)
            if diff_preview:
                msg += "```diff\n%s\n```\n" % diff_preview[:1200]
            msg += "\nShould I push this?"
            await message.channel.send(msg[:1900])
            return

        # ── Check platform status ──
        if intent == "check_status":
            await message.channel.send("Checking everything now...")
            netlify_errors = await netlify_check_errors()
            render_issues = await render_check_errors()

            if not netlify_errors and not render_issues:
                await message.channel.send("All good — Netlify is green, Render services are all up.")
            else:
                msg = ""
                if netlify_errors:
                    msg += "Netlify has %d failed deploy(s). Latest error: %s\n" % (
                        len(netlify_errors), netlify_errors[0].get("error_message", "unknown"))
                if render_issues:
                    msg += "These Render services are down: %s\n" % ", ".join(render_issues)
                await message.channel.send(msg.strip())
            return

        # ── Read a file ──
        if intent == "read_file" and intent_data.get("file"):
            file_path = intent_data.get("file")
            file_content, _ = await github_get_file(file_path)
            if file_content:
                preview = file_content[:1200]
                await message.channel.send("Here's `%s` (%d chars):\n```\n%s\n```" % (
                    file_path, len(file_content), preview))
            else:
                await message.channel.send("Couldn't find `%s`." % file_path)
            return

        # ── General chat ──
        conversation_history.append({"role": "user", "content": content})
        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)

        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, lambda: anthropic_client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            system=DEV_SYSTEM_PROMPT,
            messages=conversation_history
        ))
        reply = response.content[0].text
        conversation_history.append({"role": "assistant", "content": reply})

        if len(reply) > 1900:
            for chunk in [reply[i:i+1900] for i in range(0, len(reply), 1900)]:
                await message.channel.send(chunk)
        else:
            await message.channel.send(reply)

client.run(DEV_TOKEN)
