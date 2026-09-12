// src/data/projectPresentation.ts

import type { Locale } from '@/i18n/config';
import { useTranslations } from '@/i18n/utils';
import type { ProjectDefinition } from '@/data/projects';

export interface ProjectPresentation {
  alt: string;
  label: string;
  title: string;
  subtitle: string;
  meta: string;
  description: string;
  cta: string;
}

export function getProjectPresentation(
  locale: Locale,
  project: ProjectDefinition,
): ProjectPresentation {
  const t = useTranslations(locale);

  switch (project.translationKey) {
    case 'jco':
      return {
        alt: t.hero.projects.jco.alt,
        label:
          project.labelOverride ??
          t.hero.projects.jco.label,
        title: t.hero.projects.jco.title,
        subtitle:
          project.subtitleOverride ??
          t.hero.projects.jco.subtitle,
        meta: t.hero.projects.jco.meta,
        description: t.hero.projects.jco.meta,
        cta: t.hero.projects.jco.cta,
      };

    case 'campaign':
      return {
        alt: t.hero.projects.campaign.alt,
        label:
          project.labelOverride ??
          t.hero.projects.campaign.label,
        title: t.hero.projects.campaign.title,
        subtitle: project.subtitleOverride ?? '',
        meta: t.hero.projects.campaign.description,
        description: t.hero.projects.campaign.description,
        cta: t.hero.projects.campaign.cta,
      };

    case 'seabiza':
      return {
        alt: t.hero.projects.seabiza.alt,
        label:
          project.labelOverride ??
          'Brand Concept',
        title: t.hero.projects.seabiza.title,
        subtitle:
          project.subtitleOverride ??
          t.hero.projects.seabiza.subtitle,
        meta: t.hero.projects.seabiza.meta,
        description: t.hero.projects.seabiza.meta,
        cta: t.hero.projects.seabiza.cta,
      };

    case 'jd':
      return {
        alt: t.hero.projects.jd.alt,
        label:
          project.labelOverride ??
          'Brand Identity',
        title: t.hero.projects.jd.title,
        subtitle:
          project.subtitleOverride ??
          t.hero.projects.jd.subtitle,
        meta: t.hero.projects.jd.meta,
        description: t.hero.projects.jd.meta,
        cta: t.hero.projects.jd.cta,
      };

    default:
      throw new Error(
        `Unsupported project translation key: ${project.translationKey}`,
      );
  }
}
