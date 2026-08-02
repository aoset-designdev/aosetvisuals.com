// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 'static' keeps marketing pages fast SSG files; server routes use `export const prerender = false`
  output: 'static',

  adapter: cloudflare({
    imageService: 'passthrough', // Optimized for Cloudflare Free Plan (avoids $5/mo Image Resizing requirement)
  }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Prevents Node built-in module warnings during Cloudflare build
      external: ['node:path', 'node:fs/promises', 'node:crypto', 'node:url'],
    },
  },

  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'AOSET',
        short_name: 'AOSET',
        description: 'Elevating aesthetics across physical and digital environments.',
        theme_color: '#0a1128',
        background_color: '#0a1128',
        display: 'standalone',
        // Updated start_url to match prefixed locale default (/en/)
        start_url: '/en/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Exclude serverless API routes and vCard files from SW navigation fallbacks
        navigateFallback: '/en/offline',
        navigateFallbackDenylist: [/^\/api\//, /^\/connect\/.*\.vcf$/],

        // Optimize precache manifest size
        globPatterns: ['**/*.{css,js,html,svg,png,woff2}'],

        // Exclude node_modules and sw files from build-time precaching
        globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],

        runtimeCaching: [
          // Google Fonts caching
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          // Dynamic image caching
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});