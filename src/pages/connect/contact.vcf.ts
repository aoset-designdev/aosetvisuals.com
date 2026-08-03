import type { APIRoute } from 'astro';

// SSR required for Cloudflare environment variable evaluation
export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const cloudflareEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const env = cloudflareEnv ?? import.meta.env;

  const fn = env.VCARD_FN || 'AOSET Visuals';
  const n = env.VCARD_N || 'Visuals;AOSET;;;';
  const org = env.VCARD_ORG || 'AOSET Visuals';
  const tel = env.VCARD_TEL || '+13054821642';
  const email = env.VCARD_EMAIL || 'hello@aosetvisuals.com';
  const url = env.VCARD_URL || 'https://aosetvisuals.com';
  const rev = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const vcardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${fn}`,
    `N:${n}`,
    `ORG:${org}`,
    `TEL;TYPE=CELL,VOICE:${tel}`,
    `EMAIL;TYPE=WORK,INTERNET:${email}`,
    `URL:${url}`,
    `REV:${rev}`,
    'END:VCARD',
  ];

  const vcardData = vcardLines.join('\r\n');

  return new Response(vcardData, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="contact.vcf"',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
};