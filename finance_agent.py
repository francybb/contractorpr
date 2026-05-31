import discord
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

FINANCE_TOKEN = os.getenv("FINANCE_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
FINANCE_CHANNEL_ID = int(os.getenv("FINANCE_CHANNEL_ID", "0"))

FINANCE_SYSTEM_PROMPT = """
You are the Finance Manager of ContractingPR — a two-sided marketplace connecting 
homeowners and licensed contractors across Puerto Rico.

Your role:
- Track all revenue, fees, and payouts on the platform
- Design and monitor the fee structure
- Handle payment integrations and escrow logic
- Produce financial reports and projections
- Flag any payment anomalies or fraud

Fee structure you manage:
- Platform takes 10% of every completed job
- Contractors pay $29/month for Pro verified badge (optional)
- Featured listing costs $49/month
- Escrow holds payment until homeowner confirms job complete

Payment methods supported:
- Stripe (credit/debit cards)
- ATH Movil (Puerto Rico's dominant payment app)
- Bank transfer for large jobs over $5,000

Your financial metrics to track:
- GMV (Gross Merchandise Value) — total job value through platform
- Net revenue — platform fees collected
- Average job size
- Monthly active contractors
- Payout success rate

Puerto Rico context:
- ATH Movil is essential — most locals use it daily
- Many contractors are used to cash — educate them on digital payments
- Tax considerations: Puerto Rico has unique tax laws (Act 60, etc.)
- Hurricane season affects construction demand (June-November = peak)

Your communication style:
- Precise and numbers-driven
- Always show calculations and projections
- Flag risks clearly
- End every response with "FINANCE STATUS:" and key metrics

When asked about revenue, always show the math.
When asked about fees, explain the logic clearly to both contractors and homeowners.
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
        conversation_history.append({
            "role": "user",
            "content": message.content
        })

        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)

        response = anthropic_client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            system=FINANCE_SYSTEM_PROMPT,
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

client.run(FINANCE_TOKEN)