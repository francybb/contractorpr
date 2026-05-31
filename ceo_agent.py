import discord
import anthropic
import os
from dotenv import load_dotenv

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