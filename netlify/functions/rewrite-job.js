exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { title, description, language } = JSON.parse(event.body);
  const langNote = language === 'en' ? 'The input is in English.' : 'The input may be in Spanish or English.';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: `You are helping a homeowner in Puerto Rico post a job for a contractor. ${langNote}
Rewrite the job title and description to be clear, professional, and specific. Keep the same language as the input.
Reply ONLY in this format:
TITLE: [rewritten title]
DESCRIPTION: [rewritten description]

Original title: ${title}
Original description: ${description}`
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    const titleMatch = text.match(/TITLE:\s*(.+)/);
    const descMatch = text.match(/DESCRIPTION:\s*([\s\S]+)/);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleMatch ? titleMatch[1].trim() : title,
        description: descMatch ? descMatch[1].trim() : description
      })
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message, title, description })
    };
  }
};
