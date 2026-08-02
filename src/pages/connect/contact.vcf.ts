// src/pages/connect/contact.vcf.ts
import type { APIRoute } from 'astro';

// Set to false so Cloudflare Pages resolves request-time env vars (locals.runtime.env) dynamically
export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  // Safely extract environment variables from Cloudflare runtime or import.meta.env
  const cloudflareEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const env = cloudflareEnv ?? import.meta.env;

  // Extract contact fields from environment variables or fall back to defaults
  const fn = env.VCARD_FN || 'AOSET Visuals';
  const n = env.VCARD_N || 'Visuals;AOSET;;;';
  const org = env.VCARD_ORG || 'AOSET Visuals';
  const tel = env.VCARD_TEL || '+13054821642';
  const email = env.VCARD_EMAIL || 'hello@aosetvisuals.com';
  const url = env.VCARD_URL || 'https://aosetvisuals.com';
  const rev = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  // Construct vCard 3.0 string specification with strict CRLF line endings
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
      // Standard MIME type for vCard files across iOS and Android
      'Content-Type': 'text/vcard; charset=utf-8',
      // `inline` forces iOS Safari to trigger the native "Add to Contacts" prompt rather than downloading a raw text file
      'Content-Disposition': 'inline; filename="contact.vcf"',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};