import discord
import anthropic
import os
from dotenv import load_dotenv
from supabase_client import get_platform_stats

load_dotenv()

MARKETING_TOKEN = os.getenv("MARKETING_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
MARKETING_CHANNEL_ID = int(os.getenv("MARKETING_CHANNEL_ID", "0"))

MARKETING_SYSTEM_PROMPT = """
You are the Marketing Director of ContractingPR. Create content, campaigns, and growth
strategies for the Puerto Rico contractor marketplace. Spanish first. You always have
live platform data prepended to every message — use it to inform strategy.
End every response with CAMPAIGN STATUS: and what was produced.
"""

conversation_history = []
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Marketing Agent online as {client.user}")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != MARKETING_CHANNEL_ID:
        return
    if message.content.startswith("!"):
        return

    async with message.channel.typing():
        stats = await get_platform_stats()
        data_lines = [
            "=== LIVE MARKETING DATA ===",
            "Homeowners: %d" % stats.get("homeowners", {}).get("total", 0),
            "Contractors: %d (%d active)" % (stats.get("contractors", {}).get("total", 0), stats.get("contractors", {}).get("active", 0)),
            "Top trades: %s" % str(stats.get("top_trades", [])),
            "Top cities: %s" % str(stats.get("top_cities", [])),
            "Total jobs posted: %d" % stats.get("jobs", {}).get("total", 0),
            "Avg platform rating: %s/5" % stats.get("reviews", {}).get("avg_rating", 0),
            "===========================",
        ]
        user_msg = "\n".join(data_lines) + "\n\nUser message: " + message.content
        conversation_history.append({"role": "user", "content": user_msg})
        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)
        response = anthropic_client.messages.create(
            model="claude-opus-4-5", max_tokens=1024,
            system=MARKETING_SYSTEM_PROMPT, messages=conversation_history
        )
        reply = response.content[0].text
        conversation_history.append({"role": "assistant", "content": reply})
        if len(reply) > 1900:
            for chunk in [reply[i:i+1900] for i in range(0, len(reply), 1900)]:
                await message.channel.send(chunk)
        else:
            await message.channel.send(reply)

client.run(MARKETING_TOKEN)
