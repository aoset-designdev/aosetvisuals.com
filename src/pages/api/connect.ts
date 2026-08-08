// src/pages/api/connect.ts

import type { APIRoute } from 'astro';

// Required for dynamic server execution on Cloudflare Pages/Workers
export const prerender = false;

export interface ConnectPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function jsonResponse(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * GET /api/connect
 * Reads vCard details directly from Cloudflare environment variables.
 * Generates REV dynamically on every request.
 */
export const GET: APIRoute = async ({ locals }) => {
  const cloudflareEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const env = cloudflareEnv ?? import.meta.env;

  const fn = env.VCARD_FN;
  const n = env.VCARD_N;
  const org = env.VCARD_ORG;
  const tel = env.VCARD_TEL;
  const email = env.VCARD_EMAIL;
  const url = env.VCARD_URL;

  if (!fn || !tel || !email) {
    console.error('[API Error] Required vCard environment variables are missing.');
    return new Response('Server configuration error', { status: 500 });
  }

  // Dynamic vCard revision timestamp in ISO 8601 basic format (e.g., 20260802T220000Z)
  const rev = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const vcardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${fn}`,
    `N:${n || ''}`,
    `ORG:${org || ''}`,
    `TEL;TYPE=CELL,VOICE:${tel}`,
    `EMAIL;TYPE=WORK,INTERNET:${email}`,
    `URL:${url || ''}`,
    `REV:${rev}`,
    'END:VCARD',
  ];

  return new Response(vcardLines.join('\r\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/x-vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="contact.vcf"',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};

/**
 * POST /api/connect
 * Receives the contact form payload and forwards it to the Google Sheets webhook.
 */
export const POST: APIRoute = async ({ request, locals }) => {
  const cloudflareEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const env = cloudflareEnv ?? import.meta.env;

  const webhookUrl = env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('[API Error] GOOGLE_SHEET_WEBHOOK_URL variable is missing.');
    return jsonResponse({ error: 'Server configuration error' }, 500);
  }

  let payload: ConnectPayload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON request payload' }, 400);
  }

  const firstName = payload.firstName?.trim();
  const lastName = payload.lastName?.trim();
  const email = payload.email?.trim();

  if (!firstName || !lastName || !email) {
    return jsonResponse({ error: 'Missing required form fields' }, 422);
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone: payload.phone?.trim() || '',
        subject: payload.subject?.trim() || 'General Inquiry',
        message: payload.message?.trim() || '',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok && webhookResponse.status !== 302) {
      throw new Error(`Google Apps Script status ${webhookResponse.status}`);
    }

    return jsonResponse({ success: true, message: 'Inquiry received' }, 200);
  } catch (error) {
    console.error('[API Error] Webhook submission failed:', error);
    return jsonResponse({ error: 'Failed to process inquiry.' }, 500);
  }
};