exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { title, message, targetLang } = JSON.parse(event.body);

  const prompt = message
    ? `Translate the following job title and description to ${targetLang === 'en' ? 'English' : 'Spanish'}. Reply with only: TITLE: [translated title] | MESSAGE: [translated message]\n\nTitle: ${title}\nMessage: ${message}`
    : `Translate this job title to ${targetLang === 'en' ? 'English' : 'Spanish'}. Reply with only the translated title, nothing else:\n${title}`;

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
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  const text = data.content?.[0]?.text || '';

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  };
};
