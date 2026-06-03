/**
 * Netlify Function: supabase-proxy.js
 * Proxies Supabase REST API calls server-side to bypass host restrictions
 */

const SUPABASE_URL = 'https://shdsvylhtzuuleaicehe.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const params = event.queryStringParameters || {};
    const table = params.table;
    const query = params.query || '';
    const method = event.httpMethod;

    if (!table) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing table parameter' }) };
    }

    const url = `${SUPABASE_URL}/rest/v1/${table}${query ? '?' + query : ''}`;
    
    const fetchOptions = {
      method,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': params.prefer || 'return=representation'
      }
    };

    if (method === 'POST' || method === 'PATCH') {
      fetchOptions.body = event.body;
    }

    const res = await fetch(url, fetchOptions);
    const text = await res.text();

    return {
      statusCode: res.status,
      headers,
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
