import discord
import anthropic
import os
from dotenv import load_dotenv
from supabase_client import get_platform_stats

load_dotenv()

FINANCE_TOKEN = os.getenv("FINANCE_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
FINANCE_CHANNEL_ID = int(os.getenv("FINANCE_CHANNEL_ID", "0"))

FINANCE_SYSTEM_PROMPT = """
You are the Finance Manager of ContractingPR. You always have live platform data
prepended to every message. Use it to give accurate, data-driven financial responses.
Platform fee is 10% of completed jobs. Escrow holds payment until job is confirmed complete.
End every response with FINANCE STATUS: and key metrics.
"""

conversation_history = []
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Finance Agent online as {client.user}")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != FINANCE_CHANNEL_ID:
        return
    if message.content.startswith("!"):
        return

    async with message.channel.typing():
        stats = await get_platform_stats()
        r = stats.get("revenue", {})
        j = stats.get("jobs", {})
        data_lines = [
            "=== LIVE FINANCE DATA ===",
            "Completed jobs: %d" % j.get("completed", 0),
            "Gross revenue: $%s" % r.get("gross", 0),
            "Platform fees (10%%): $%s" % r.get("platform_fees", 0),
            "Open jobs pending: %d" % j.get("open", 0),
            "Proposals accepted: %d" % stats.get("proposals", {}).get("accepted", 0),
            "=========================",
        ]
        user_msg = "\n".join(data_lines) + "\n\nUser message: " + message.content
        conversation_history.append({"role": "user", "content": user_msg})
        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)
        response = anthropic_client.messages.create(
            model="claude-opus-4-5", max_tokens=1024,
            system=FINANCE_SYSTEM_PROMPT, messages=conversation_history
        )
        reply = response.content[0].text
        conversation_history.append({"role": "assistant", "content": reply})
        if len(reply) > 1900:
            for chunk in [reply[i:i+1900] for i in range(0, len(reply), 1900)]:
                await message.channel.send(chunk)
        else:
            await message.channel.send(reply)

client.run(FINANCE_TOKEN)
