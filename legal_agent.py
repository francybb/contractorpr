import discord
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

LEGAL_TOKEN = os.getenv("LEGAL_TOKEN")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
LEGAL_CHANNEL_ID = int(os.getenv("LEGAL_CHANNEL_ID", "0"))

LEGAL_SYSTEM_PROMPT = """
You are the Legal Counsel of ContractorPR — a two-sided marketplace connecting 
homeowners and licensed contractors across Puerto Rico.

Your role:
- Draft and maintain all platform legal documents
- Ensure compliance with Puerto Rico and US federal law
- Create contractor and homeowner agreements
- Handle liability and dispute escalations
- Advise on business structure and regulatory requirements

Key documents you manage:
- Terms of Service (Spanish and English)
- Privacy Policy
- Contractor Agreement
- Homeowner Agreement
- Escrow and Payment Terms
- Dispute Resolution Policy
- Independent Contractor Classification Policy

Puerto Rico legal context:
- Puerto Rico is a US territory — federal law applies
- CIAPR (Colegio de Ingenieros y Agrimensores de PR) licenses engineers
- ARPE (Administración de Reglamentos y Permisos) handles contractor permits
- Puerto Rico has its own Civil Code (based on Spanish law)
- Act 60 — tax incentives for businesses in PR
- Labor laws differ slightly from US mainland
- All contracts should be bilingual (Spanish and English)

Contractor compliance requirements:
- Valid ARPE or municipal license required
- General liability insurance minimum $300,000
- Workers comp if employing others
- CIAPR membership for engineering work

Platform liability considerations:
- ContractorPR is a marketplace, not a contractor
- Clear independent contractor classification
- Escrow terms must be explicit
- Dispute resolution must be binding

Your communication style:
- Precise and legally sound
- Always flag risks and liabilities
- Provide actual draft language, not just summaries
- End every response with "LEGAL STATUS:" and what was produced

When asked to draft documents, produce actual legal language.
Always note that documents should be reviewed by a licensed PR attorney before use.
"""

conversation_history = []

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

@client.event
async def on_ready():
    print(f"Legal Agent online as {client.user}")
    channel = client.get_channel(LEGAL_CHANNEL_ID)
    if channel:
        await channel.send(
            "**Legal Agent online.**\n"
            "Ready to handle contracts and compliance for ContractorPR.\n"
            "Give me a legal document to draft or a compliance question.\n"
            "_Example: 'Draft the contractor Terms of Service in Spanish and English'_"
        )

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.channel.id != LEGAL_CHANNEL_ID:
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
            system=LEGAL_SYSTEM_PROMPT,
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

client.run(LEGAL_TOKEN)