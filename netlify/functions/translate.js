exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const body = JSON.parse(event.body);
  const targetLang = body.targetLang;

  // Batch mode: array of {id, title, message}
  // Single mode: {title, message, targetLang}
  const items = body.items || [{ id: 'single', title: body.title, message: body.message }];

  const prompt = items.map((item, i) =>
    `ITEM${i}: Title: ${item.title || ''}${item.message ? ' | Message: ' + item.message.substring(0, 300) : ''}`
  ).join('\n');

  const langName = targetLang === 'en' ? 'English' : 'Spanish';

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
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Translate each item to ${langName}. Reply in exact format:
ITEM0: TITLE: [title] | MESSAGE: [message]
ITEM1: TITLE: [title] | MESSAGE: [message]
...

Items to translate:
${prompt}`
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    // Parse response
    const results = {};
    items.forEach((item, i) => {
      const match = text.match(new RegExp(`ITEM${i}:\\s*TITLE:\\s*(.+?)\\s*\\|\\s*MESSAGE:\\s*(.+?)(?=\\nITEM|$)`, 's'));
      if (match) {
        results[item.id] = { title: match[1].trim(), message: match[2].trim() };
      } else {
        // fallback: just try to get title
        const titleMatch = text.match(new RegExp(`ITEM${i}:\\s*TITLE:\\s*(.+?)(?:\\s*\\||\\n|$)`));
        results[item.id] = { title: titleMatch ? titleMatch[1].trim() : item.title, message: item.message || '' };
      }
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(items.length === 1 ? { text: text } : { results })
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
