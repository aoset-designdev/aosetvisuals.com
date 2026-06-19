// worker/src/index.ts
// Cloudflare Worker — dual destination: Google Forms + email (Resend)
// Deploy with: wrangler deploy
// Set secrets: wrangler secret put RESEND_API_KEY

export interface Env {
  // Google Form action URL
  // e.g. https://docs.google.com/forms/d/e/FORM_ID/formResponse
  GOOGLE_FORM_ACTION_URL: string;

  // Google Form entry field IDs (inspect form HTML for name="entry.XXXXXXX")
  ENTRY_FIRST_NAME: string;
  ENTRY_LAST_NAME: string;
  ENTRY_EMAIL: string;
  ENTRY_PHONE: string;
  ENTRY_ADDRESS: string;
  ENTRY_SUBJECT: string;
  ENTRY_MESSAGE: string;

  // Email provider (Resend — https://resend.com)
  RESEND_API_KEY: string;   // set via: wrangler secret put RESEND_API_KEY
  NOTIFY_EMAIL: string;     // destination email for notifications
  FROM_EMAIL: string;       // e.g. noreply@aoset.com

  // CORS origin — your production domain
  ALLOWED_ORIGIN: string;   // e.g. https://aoset.com
}

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  subject?: string;
  message?: string;
}

const corsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || '*';
    const cors = corsHeaders(origin);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: cors });
    }

    // Parse body
    let payload: ContactPayload;
    try {
      payload = (await request.json()) as ContactPayload;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // Basic validation
    if (!payload.firstName?.trim() || !payload.lastName?.trim() || !payload.email?.trim()) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 422,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── Destination 1: Google Forms ──────────────────────────────────────────
    const formBody = new URLSearchParams({
      [env.ENTRY_FIRST_NAME]: payload.firstName,
      [env.ENTRY_LAST_NAME]:  payload.lastName,
      [env.ENTRY_EMAIL]:      payload.email,
      [env.ENTRY_PHONE]:      payload.phone    ?? '',
      [env.ENTRY_ADDRESS]:    payload.address  ?? '',
      [env.ENTRY_SUBJECT]:    payload.subject  ?? '',
      [env.ENTRY_MESSAGE]:    payload.message  ?? '',
    });

    const googlePromise = fetch(env.GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString(),
    }).catch((err) => console.error('[Worker] Google Forms error:', err));

    // ── Destination 2: Email notification via Resend ─────────────────────────
    const emailBody = [
      `Name:    ${payload.firstName} ${payload.lastName}`,
      `Email:   ${payload.email}`,
      `Phone:   ${payload.phone    ?? '—'}`,
      `Address: ${payload.address  ?? '—'}`,
      `Subject: ${payload.subject  ?? '—'}`,
      '',
      payload.message ?? '(no message)',
    ].join('\n');

    const emailPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:    env.FROM_EMAIL   || 'AOSET Contact <noreply@aoset.com>',
        to:      env.NOTIFY_EMAIL || 'info@aoset.com',
        subject: `New inquiry from ${payload.firstName} ${payload.lastName}`,
        text:    emailBody,
      }),
    }).catch((err) => console.error('[Worker] Resend error:', err));

    // Fire both in parallel, don't block on either
    await Promise.allSettled([googlePromise, emailPromise]);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },
};
