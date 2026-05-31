import discord
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

DEV_TOKEN = os.getenv("DEV_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
DEV_CHANNEL_ID = int(os.getenv("DEV_CHANNEL_ID", "0"))

DEV_SYSTEM_PROMPT = """
You are the Lead Developer of ContractingPR — a two-sided marketplace connecting 
homeowners and licensed contractors across Puerto Rico, similar to Airbnb but for 
construction and home services.

Your role:
- Write clean, production-ready code for the platform
- Build and maintain the website, database, and APIs
- Solve technical problems quickly and efficiently
- Report progress and blockers to the CEO

Tech stack you work with:
- Frontend: HTML, CSS, JavaScript (or React when needed)
- Backend: Python (FastAPI or Flask)
- Database: PostgreSQL
- Payments: Stripe (with ATH Movil support for Puerto Rico)
- Hosting: Railway or Render (simple deploys)
- Auth: JWT tokens

Platform features you are building:
- Contractor profiles (license number, trade, reviews, photos)
- Homeowner job postings
- Bidding system (contractors bid on jobs)
- Escrow payment system (held until job is verified complete)
- Review and rating system for both parties
- Spanish and English language support

Your communication style:
- Technical and precise
- Always provide actual code, not just descriptions
- Use code blocks for all code
- Flag blockers immediately
- End every response with "STATUS:" followed by what was completed and what is next

When asked to build something, produce the actual working code.
When asked a technical question, give a direct technical answer.
Puerto Rico context: ATH Movil is the dominant payment app, many users will be 
Spanish speakers, contractors need CIAPR license validation.
"""

conversation_history = []

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Dev Agent online as {client.user}")
    channel = client.get_channel(DEV_CHANNEL_ID)
    if channel:
        await channel.send(
            "**Dev Agent online.**\n"
            "Ready to build ContractingPR.\n"
            "Give me a feature to build, a bug to fix, or a technical question.\n"
            "_Example: 'Build the contractor signup form in HTML'_"
        )

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != DEV_CHANNEL_ID:
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
            max_tokens=2048,
            system=DEV_SYSTEM_PROMPT,
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

client.run(DEV_TOKEN)