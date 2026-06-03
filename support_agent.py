import discord
import anthropic
import os
from dotenv import load_dotenv
from supabase_client import get_platform_stats, get_pending_contractors

load_dotenv()

SUPPORT_TOKEN = os.getenv("SUPPORT_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
SUPPORT_CHANNEL_ID = int(os.getenv("SUPPORT_CHANNEL_ID", "0"))

SUPPORT_SYSTEM_PROMPT = """
You are the Customer Support Manager of ContractingPR. Handle disputes, onboard users,
answer in Spanish by default (English if user writes in English). You always have live
platform data prepended to every message. End every response with SUPPORT STATUS: and case resolution.
"""

conversation_history = []
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Support Agent online as {client.user}")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != SUPPORT_CHANNEL_ID:
        return
    if message.content.startswith("!"):
        return

    async with message.channel.typing():
        stats = await get_platform_stats()
        pending = await get_pending_contractors()
        pending_list = [x["name"] + " (" + x["trade"] + ")" for x in pending]
        data_lines = [
            "=== LIVE SUPPORT DATA ===",
            "Pending contractor approvals: %d" % len(pending),
            "Pending contractors: %s" % str(pending_list),
            "Active contractors: %d" % stats.get("contractors", {}).get("active", 0),
            "Total homeowners: %d" % stats.get("homeowners", {}).get("total", 0),
            "Open jobs: %d" % stats.get("jobs", {}).get("open", 0),
            "Avg platform rating: %s/5" % stats.get("reviews", {}).get("avg_rating", 0),
            "=========================",
        ]
        user_msg = "\n".join(data_lines) + "\n\nUser message: " + message.content
        conversation_history.append({"role": "user", "content": user_msg})
        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)
        response = anthropic_client.messages.create(
            model="claude-opus-4-5", max_tokens=1024,
            system=SUPPORT_SYSTEM_PROMPT, messages=conversation_history
        )
        reply = response.content[0].text
        conversation_history.append({"role": "assistant", "content": reply})
        if len(reply) > 1900:
            for chunk in [reply[i:i+1900] for i in range(0, len(reply), 1900)]:
                await message.channel.send(chunk)
        else:
            await message.channel.send(reply)

client.run(SUPPORT_TOKEN)
