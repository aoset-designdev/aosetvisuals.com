// src/i18n/utils.ts
import { locales, defaultLocale, type Locale } from './config';
import en from './languages/en';
import es from './languages/es';
import fr from './languages/fr';

type Dictionary = typeof en;

// TypeScript will error if es/fr don't match the shape of en
const dictionaries: Record<Locale, Dictionary> = { en, es, fr };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocalePaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  // Avoid double slash for root
  return `/${locale}${normalized === '/' ? '' : normalized}`;
}

export function switchLocalePath(currentUrl: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(currentUrl);
  const pathWithoutLocale =
    currentUrl.pathname.replace(new RegExp(`^/${currentLocale}`), '') || '/';
  return localizePath(targetLocale, pathWithoutLocale);
}
