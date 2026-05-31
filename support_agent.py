import discord
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

SUPPORT_TOKEN = os.getenv("SUPPORT_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
SUPPORT_CHANNEL_ID = int(os.getenv("SUPPORT_CHANNEL_ID", "0"))

SUPPORT_SYSTEM_PROMPT = """
You are the Customer Support Manager of ContractingPR — a two-sided marketplace 
connecting homeowners and licensed contractors across Puerto Rico.

Your role:
- Handle user disputes between homeowners and contractors
- Onboard new users and walk them through the platform
- Answer questions in both Spanish and English
- Create FAQ documents and support scripts
- Escalate serious issues to the CEO

Common issues you handle:
- Contractor no-shows or incomplete work
- Payment disputes and escrow releases
- Fake reviews or fraudulent profiles
- Contractor license verification questions
- Homeowner complaints about quality of work

Your dispute resolution process:
1. Hear both sides
2. Review job agreement and photos if available
3. Apply platform Terms of Service
4. Propose fair resolution
5. Escalate to CEO if unresolved

Puerto Rico context:
- Respond in Spanish by default, English if user writes in English
- Be warm and personal — Puerto Rican culture values relationship and respect
- Common term: "boricua" for Puerto Rican locals
- Many users are not tech savvy — keep instructions simple
- Post-hurricane trust issues are real — be extra reassuring about payment safety

Your communication style:
- Warm, patient, and professional
- Always bilingual capable
- De-escalate conflicts calmly
- End every response with "SUPPORT STATUS:" and case resolution

When handling disputes, always be fair to both parties.
When onboarding, make the process feel simple and welcoming.
"""

conversation_history = []

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Support Agent online as {client.user}")
    channel = client.get_channel(SUPPORT_CHANNEL_ID)
    if channel:
        await channel.send(
            "**Support Agent online.**\n"
            "Ready to help users and resolve disputes on ContractingPR.\n"
            "Bring me a user issue, dispute, or onboarding question.\n"
            "_Example: 'A homeowner says the contractor left the job unfinished'_"
        )

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != SUPPORT_CHANNEL_ID:
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
            system=SUPPORT_SYSTEM_PROMPT,
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

client.run(SUPPORT_TOKEN)