// src/data/projects.ts

import type { ImageMetadata } from 'astro';

import jcoHero from '@/assets/projects/jco-estate-renovations/hero.webp';
import jdHero from '@/assets/projects/jd-good-corp/hero.webp';
import seabizaHero from '@/assets/projects/seabiza/hero.webp';
import campaignHero from '@/assets/projects/campaign/hero.webp';

export type ProjectStatus = 'published' | 'draft';

export type ProjectTranslationKey =
  | 'jco'
  | 'campaign'
  | 'seabiza'
  | 'jd';

export type HomeSlot =
  | 'primary'
  | 'secondary'
  | 'supporting-left'
  | 'supporting-right';

export interface ProjectDefinition {
  slug: string;
  translationKey: ProjectTranslationKey;
  image: ImageMetadata;
  status: ProjectStatus;
  order: number;
  featured: boolean;
  homeSlot?: HomeSlot;
  labelOverride?: string;
  subtitleOverride?: string;
}

export const projects: ProjectDefinition[] = [
  {
    slug: 'jco-estate-renovations',
    translationKey: 'jco',
    image: jcoHero,
    status: 'published',
    order: 1,
    featured: true,
    homeSlot: 'primary',
  },
  {
    slug: 'email-campaign',
    translationKey: 'campaign',
    image: campaignHero,
    status: 'published',
    order: 2,
    featured: true,
    homeSlot: 'secondary',
    subtitleOverride: '',
  },
  {
    slug: 'seabiza',
    translationKey: 'seabiza',
    image: seabizaHero,
    status: 'published',
    order: 3,
    featured: true,
    homeSlot: 'supporting-left',
    labelOverride: 'Brand Concept',
  },
  {
    slug: 'jd-good-corp',
    translationKey: 'jd',
    image: jdHero,
    status: 'published',
    order: 4,
    featured: true,
    homeSlot: 'supporting-right',
    labelOverride: 'Brand Identity',
  },
];
