/**
 * Netlify Function: maps-config.js
 * Returns the Google Maps browser key (referrer-restricted) so it never
 * lives in the public repo. The frontend fetches this, then loads the
 * Maps JS SDK with it. Restriction (HTTP referrers) is what secures the key.
 */
exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    },
    body: JSON.stringify({ key: process.env.GOOGLE_MAPS_KEY || '' })
  };
};
