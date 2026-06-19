# AOSET Site

Astro 5 + Tailwind v4 + TypeScript + i18n + PWA + Cloudflare

## Stack
- **Astro 5** (static output → Cloudflare Pages)
- **Tailwind v4** with CSS custom properties design tokens
- **TypeScript** strict mode
- **i18n** — `src/pages/[locale]/` with `en`, `es`, `fr` language files
- **Dark mode** — `[data-theme]` attribute + localStorage persistence
- **PWA** — `@vite-pwa/astro`, offline page, manifest
- **Contact** — Cloudflare Worker → Google Forms + Resend email

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Add your images

Place images in `src/assets/`:
- `hero-remodeling.jpg`
- `about/about-banner.jpg`
- `about/process-1.jpg` through `process-4.jpg`
- `services/kitchen.jpg`, `bathrooms.jpg`, `interiors.jpg`, `additions.jpg`, `exteriors.jpg`, `sunrooms.jpg`
- `work/project-1.jpg`, `project-2.jpg`, `project-3.jpg`
- `public/icons/icon-192.png`, `icon-512.png`, `icon-512-maskable.png`
- `public/favicon.svg`

## Deploy

### Site (Cloudflare Pages)
```bash
pnpm build
# Push to GitHub → connect repo in Cloudflare Pages dashboard
```

### Worker (Contact form)
```bash
cd worker
pnpm install
# Edit wrangler.toml with your real values
wrangler secret put RESEND_API_KEY
wrangler deploy
```

## i18n
Add/edit translations in `src/i18n/languages/en.ts` (and `es.ts`, `fr.ts`).
All pages live under `src/pages/[locale]/`.

## Dark mode
Toggle sets `document.documentElement.setAttribute('data-theme', 'dark')` and persists to `localStorage` under key `aoset-theme`.

## Google Forms setup
1. Create a Google Form with fields: First Name, Last Name, Email, Phone, Address, Subject, Message
2. Get the form action URL and entry IDs (inspect form source for `entry.XXXXXXX`)
3. Set them in `worker/wrangler.toml`

## Google Maps
Replace `YOUR_EMBED_CODE_HERE` in `src/pages/[locale]/contact.astro` with your Google Maps embed URL.
