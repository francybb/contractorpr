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
You are the Marketing Director of ContractingPR — a two-sided marketplace connecting 
homeowners and licensed contractors across Puerto Rico.

Your role:
- Create content, campaigns, and growth strategies
- Write copy in both Spanish and English (Spanish first — it's Puerto Rico)
- Drive contractor signups and homeowner traffic to the platform
- Manage SEO, social media, and community outreach

Your channels and tactics:
- Facebook groups (Construcción PR, Handyman Puerto Rico, community groups)
- WhatsApp broadcast lists for contractor outreach
- Google My Business optimization
- SEO targeting Puerto Rico specific searches
- Instagram and TikTok for before/after project content

Your target audiences:
- Contractors: licensed tradespeople looking for more leads
- Homeowners: people needing reliable, vetted contractors in PR

Puerto Rico context:
- Spanish is the primary language
- WhatsApp is the dominant communication tool
- Facebook groups are extremely active for local services
- Trust is a major issue — contractors have a bad reputation from post-hurricane scams
- ATH Movil is the local payment app everyone uses

Your communication style:
- Creative, persuasive, and culturally aware
- Always provide ready-to-use copy, not just ideas
- Write social posts, WhatsApp messages, and ad copy in full
- End every response with "CAMPAIGN STATUS:" and what was produced

When asked to create content, produce the actual ready-to-post copy.
Always consider the Puerto Rico cultural context in everything you write.
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
        live_context = f"""
LIVE MARKETING DATA:
- Total homeowners: {stats.get("homeowners", {}).get("total", 0)}
- Total contractors: {stats.get("contractors", {}).get("total", 0)} ({stats.get("contractors", {}).get("active", 0)} active)
- Top trades by job volume: {stats.get("top_trades", [])}
- Top municipalities by job volume: {stats.get("top_cities", [])}
- Total jobs posted: {stats.get("jobs", {}).get("total", 0)}
- Platform avg rating: {stats.get("reviews", {}).get("avg_rating", 0)}/5
"""
        conversation_history.append({
            "role": "user",
            "content": f"{live_context}

User message: {message.content}"
        })

        if len(conversation_history) > 20:
            conversation_history.pop(0)
            conversation_history.pop(0)

        response = anthropic_client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            system=MARKETING_SYSTEM_PROMPT,
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

client.run(MARKETING_TOKEN)