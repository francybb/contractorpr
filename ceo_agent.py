import discord
import anthropic
import os
from dotenv import load_dotenv
from supabase_client import get_platform_stats, get_pending_contractors

load_dotenv()

DISCORD_TOKEN = os.getenv("DISCORD_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
CEO_CHANNEL_ID = int(os.getenv("CEO_CHANNEL_ID", "0"))

CEO_SYSTEM_PROMPT = """
You are the CEO of ContractingPR — a two-sided marketplace connecting homeowners 
and licensed contractors across Puerto Rico. Think of this like Airbnb but for 
construction and home services on the island.

Your role:
- Set strategic priorities for the team each day
- Break big goals into specific tasks and delegate them to the right agent
- Monitor progress across all departments (Dev, Marketing, Support, Finance, Legal)
- Make high-level product and business decisions
- Keep the team aligned on the mission: bring trust and accountability to PR's contractor market

Your communication style:
- Concise, decisive, and action-oriented
- Use bullet points for task lists
- Always end responses with a clear "NEXT ACTION" line stating what should happen next
- Reference Puerto Rico context when relevant (hurricane season, Spanish speakers, local laws, CIAPR licensing)

Departments you manage:
- Dev Agent: builds and deploys the platform (web + mobile)
- Marketing Agent: SEO, content, social media, contractor outreach
- Support Agent: user disputes, onboarding, FAQ management
- Finance Agent: revenue tracking, fee collection, payout management
- Legal Agent: contracts, Terms of Service, PR regulatory compliance

When someone gives you a goal or task, respond with a clear plan broken into 
departmental assignments. Format it like a real CEO briefing.
You always have access to live platform data which is prepended to every message.
Use this data to give accurate, data-driven responses.
"""

conversation_history = []

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"CEO Agent online as {client.user}")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != CEO_CHANNEL_ID:
        return
    if message.content.startswith("!"):
        return

    async with message.channel.typing():
        stats = await get_platform_stats()
        pending = await get_pending_contractors()
        c = stats.get("contractors", {})
        j = stats.get("jobs", {})
        r = stats.get("revenue", {})
        rv = stats.get("reviews", {})
        pending_names = ", ".join([x["name"] for x in pending]) if pending else "none"
        data_lines = [
            "=== LIVE PLATFORM DATA ===",
            "Contractors: %d total (%d active, %d pending approval)" % (c.get("total",0), c.get("active",0), c.get("pending",0)),
            "Homeowners: %d registered" % stats.get("homeowners",{}).get("total",0),
            "Jobs: %d total (%d open, %d in progress, %d completed)" % (j.get("total",0), j.get("open",0), j.get("accepted",0), j.get("completed",0)),
            "Proposals: %d total (%d accepted)" % (stats.get("proposals",{}).get("total",0), stats.get("proposals",{}).get("accepted",0)),
            "Revenue: $%s gross, $%s platform fees" % (r.get("gross",0), r.get("platform_fees",0)),
            "Reviews: %d total, avg %s/5" % (rv.get("total",0), rv.get("avg_rating",0)),
            "Top trades: %s" % str(stats.get("top_trades",[])),
            "Top cities: %s" % str(stats.get("top_cities",[])),
            "Pending contractor approvals: %d (%s)" % (len(pending), pending_names),
            "=========================",
        ]
        user_msg = "\n".join(data_lines) + "\n\nUser message: " + message.content

        conversation_history.append({
            "role": "user",
            "content": user_msg
        })

        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)

        response = anthropic_client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            system=CEO_SYSTEM_PROMPT,
            messages=conversation_history
        )

        reply = response.content[0].text

        conversation_history.append({
            "role": "assistant",
            "content": reply
        })

        if len(reply) > 1900:
            chunks = [reply[i:i+1900] for i in range(0, len(reply), 1900)]
            for chunk in chunks:
                await message.channel.send(chunk)
        else:
            await message.channel.send(reply)

client.run(DISCORD_TOKEN)
