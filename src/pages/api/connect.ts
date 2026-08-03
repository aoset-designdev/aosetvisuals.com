import type { APIRoute } from 'astro';

// Force dynamic execution for API endpoints on Cloudflare
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

export const POST: APIRoute = async ({ request, locals }) => {
  const cloudflareEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const env = cloudflareEnv ?? import.meta.env;

  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return jsonResponse({ error: 'Content-Type must be application/json' }, 400);
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return jsonResponse({ error: 'Invalid email address format' }, 422);
  }

  const webhookUrl = env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('[API Error] GOOGLE_SHEET_WEBHOOK_URL environment variable is missing.');
    return jsonResponse({ error: 'Server configuration error' }, 500);
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
      throw new Error(`Google Apps Script returned status ${webhookResponse.status}`);
    }

    return jsonResponse({ success: true, message: 'Inquiry received' }, 200);
  } catch (error) {
    console.error('[API Error] Failed to submit lead to Webhook:', error);
    return jsonResponse({ error: 'Failed to process inquiry. Please try again later.' }, 500);
  }
};