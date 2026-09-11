// src/data/projects.ts

import type { ImageMetadata } from 'astro';

import jcoHero from '@/assets/projects/jco-estate-renovations/hero.webp';
import jdHero from '@/assets/projects/jd-good-corp/hero.webp';
import seabizaHero from '@/assets/projects/seabiza/hero.webp';
import campaignHero from '@/assets/projects/email-campaign/hero.webp';

export type ProjectStatus = 'published' | 'draft';

export type ProjectTranslationKey =
  | 'jco'
  | 'campaign'
  | 'seabiza'
  | 'jd';

export interface ProjectDefinition {
  slug: string;
  translationKey: ProjectTranslationKey;
  image: ImageMetadata;
  status: ProjectStatus;
  order: number;
  featured: boolean;
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
  },

  {
    slug: 'email-campaign',
    translationKey: 'campaign',
    image: campaignHero,
    status: 'published',
    order: 2,
    featured: true,
    subtitleOverride: '',
  },

  {
    slug: 'seabiza',
    translationKey: 'seabiza',
    image: seabizaHero,
    status: 'published',
    order: 3,
    featured: true,
    labelOverride: 'Brand Concept',
  },

  {
    slug: 'jd-good-corp',
    translationKey: 'jd',
    image: jdHero,
    status: 'published',
    order: 4,
    featured: true,
    labelOverride: 'Brand Identity',
  },
];