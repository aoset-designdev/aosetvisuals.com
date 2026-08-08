// src/i18n/utils.ts
import { locales, defaultLocale, type Locale } from './config';
import type { TranslationSchema } from './languages/en';
import en from './languages/en';
import es from './languages/es';

// Use TranslationSchema instead of typeof en so string fields allow translations
export type Dictionary = TranslationSchema;

// TypeScript will now verify that 'es' satisfies the schema structure without requiring matching English text
const dictionaries: Record<Locale, Dictionary> = { en, es };

/**
 * Type guard to check if a string is a valid configured Locale
 */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Extract the current locale from a URL object or path string
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

/**
 * Get translation dictionary for a specific locale
 */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * Generate getStaticPaths parameters for Astro dynamic route [locale]
 */
export function getLocalePaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

/**
 * Prefix a path with the target locale (e.g., '/contact' -> '/en/contact')
 */
export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

/**
 * Safely switch the current URL's locale while preserving the remaining path
 */
export function switchLocalePath(currentUrl: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(currentUrl);
  
  // Strictly match the current locale at the root of the path
  const regex = new RegExp(`^/${currentLocale}(?=/|$)`);
  const pathWithoutLocale = currentUrl.pathname.replace(regex, '') || '/';

  return localizePath(targetLocale, pathWithoutLocale);
}