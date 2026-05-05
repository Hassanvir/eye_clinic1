export const config = { runtime: 'nodejs20.x' };

const COOKIE_NAME = 'drquan_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const { password } = body ?? {};
  const secret = process.env.SITE_PASSWORD;

  if (!secret) {
    return res.status(500).json({ error: 'Server misconfigured — contact administrator.' });
  }

  if (!password || password !== secret) {
    // Small delay to slow brute force
    await new Promise(r => setTimeout(r, 300));
    return res.status(401).json({ error: 'Incorrect password.' });
  }

  const token = await makeToken(secret);
  const isProduction = process.env.VERCEL_ENV === 'production';

  res.setHeader('Set-Cookie',
    `${COOKIE_NAME}=${token}; HttpOnly; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${isProduction ? '; Secure' : ''}`
  );

  return res.status(200).json({ ok: true });
}

async function makeToken(secret) {
  const payload = Date.now().toString();
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  const hex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `${payload}.${hex}`;
}
