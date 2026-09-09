// src/i18n/languages/en.ts

/**
 * English translation source.
 *
 * This file defines the canonical translation schema used by
 * all other language files.
 */

export const en = {
  /**
   * Main navigation.
   */
  nav: {
    home: 'Home',
    about: 'About',
    work: 'Projects',
    contact: 'Contact',
  },


  /**
   * Portfolio hero.
   *
   * The hero introduces AOSET's core relationship between
   * design and implementation without over-explaining
   * capabilities that are demonstrated by the project cards.
   */
  hero: {
    eyebrow: 'Design + Code. In Both Directions.',

    statement: {
      line1: 'Elevating',
      line2: 'the Visible Layer',
    },

    subtitle:
      'Creative thinking, visual craft and technology speaking the same language.',

    primaryCta:
      'Explore Selected Work',

    /**
     * Project information displayed inside the hero bento.
     */
    projects: {
      jco: {
        label:
          'Featured Project',

        title:
          'J&CO',

        subtitle:
          'Estate Renovations',

        meta:
          'Brand Identity · Print · Digital · Web',

        cta:
          'View Project',

        alt:
          'J&CO Estate Renovations brand identity project',
      },


      campaign: {
        label:
          'Campaign Concept',

        title:
          'From Inbox to Action.',

        description:
          'Email, social media, display advertising and campaign strategy.',

        cta:
          'View Case Study',

        alt:
          'Integrated email and digital advertising campaign concept',
      },


      seabiza: {
        title:
          'Seabiza',

        subtitle:
          'High-End Yacht Charter',

        meta:
          'Brand Concept · Digital · Web',

        cta:
          'View Project',

        alt:
          'Seabiza high-end yacht charter identity concept',
      },


      /**
       * Technical card showing the implementation behind AOSET.
       */
      built: {
        label:
          'Behind the Interface',

        title:
          'AOSET Visuals is an independent venture designed and developed by Abel T. Oset.',

        stack: [
          'Astro · TypeScript',
          'Tailwind CSS · Cloudflare',
          'Git · CI/CD',
          'AI-Augmented',
        ],

        cta:
          'Technical Overview',
      },


      jd: {
        title:
          'J&D',

        subtitle:
          'Good Corp',

        meta:
          'Brand Identity · Vehicle Graphics · Digital',

        cta:
          'View Project',

        alt:
          'J&D Good Corp brand identity and vehicle graphics project',
      },
    },
  },


  /**
   * Homepage About section.
   *
   * AOSET is presented as an independent creative venture.
   * The copy focuses on approach, intent and practical value
   * without overstating business outcomes.
   */
  about: {
    eyebrow:
      'About AOSET Visuals',

    heading:
      'Clarity. Coherence. Implementation.',

    intro:
      'AOSET Visuals brings creative direction and implementation together, connecting ideas with how they take shape, communicate and function.',

    purpose:
      'The purpose is simple: to help ideas, ventures and businesses communicate effectively, operate with greater consistency and present their value with confidence.',

    philosophy:
      'Good design should go beyond appearance. Whenever possible, it should contribute to better experiences, stronger perception and tangible results.',
  },


  /**
   * Selected Projects page.
   */
  work: {
    eyebrow:
      'Selected Projects',

    heading:
      'Different needs. One integrated perspective.',

    intro:
      'Identity systems, digital communication, physical applications and web experiences developed across different industries and contexts.',

    viewProject:
      'Explore Project',
  },


  /**
   * Homepage closing section.
   *
   * The copy invites ideas, projects and collaboration without
   * making the site feel like an employment request.
   */
 closing: {
  eyebrow:
    'Ideas · Projects · Collaboration',

  title:
    'A conversation can start here...',

  description:
    'If an idea, project or challenge could benefit from a thoughtful mix of creative direction and implementation, there’s room to explore it.',

  cta:
    'Continue',
},


  /**
   * Dedicated Contact page.
   */
  contact: {
  eyebrow: 'Get in Touch',

  heading: 'Something in mind?',

  intro: 'A few details are enough to get started.',

  form: {
    firstName:
      'First Name',

    lastName:
      'Last Name',

    email:
      'Email',

    phone:
      'Phone (optional)',

    subject:
      'Subject',

    message:
      'Message',

    submit:
      'Send Message',

    sending:
      'Sending...',

    success:
      'Thanks. Your message has been sent.',

    error:
      'Something went wrong. Please try again.',

    invalidEmail:
      'Please enter a valid email address.',

    invalidEmailSubmit:
      'Please provide a valid email address before submitting.',

    ariaLabel:
      'Contact AOSET Visuals',
  },
},


  /**
   * AOSET Connect experience.
   *
   * This is separate from the standard Contact page because it
   * supports the QR / digital-card interaction flow.
   */
  connect: {
    slogan:
      'Elevating the Visible Layer',

    descriptor: {
      line1:
        'Design & Presentation',

      line2:
        'for Premium Spaces',
    },

    actions: {
      saveContact:
        'Save Contact',

      whatsapp:
        'WhatsApp',

      website:
        'Website',

      call:
        'Call',

      message:
        'Message',
    },

    form: {
      heading:
        'Send a Message',

      name:
        'Name',

      email:
        'Email',

      phone:
        'Phone (optional)',

      message:
        'Message',

      send:
        'Send',

      sending:
        'Sending...',

      success:
        'Message sent successfully.',

      error:
        'Unable to send message. Please try again.',
    },

    accessibility: {
      languageSelector:
        'Language selector',

      saveContact:
        'Save contact for AOSET Visuals',

      whatsapp:
        'Contact AOSET Visuals on WhatsApp',

      website:
        'Visit the AOSET Visuals website',

      call:
        'Call AOSET Visuals',

      message:
        'Send a message',

      closeMessage:
        'Close message form',
    },
  },


  /**
   * Global footer.
   */
  footer: {
    rights:
      'All rights reserved.',
  },
} as const;


/**
 * Recursively converts literal string values into general
 * string types while preserving the complete object structure.
 *
 * Arrays are handled explicitly because `as const` generates
 * readonly tuples and arrays.
 */
type DeepStringify<T> =
  T extends string
    ? string
    : T extends readonly (infer U)[]
      ? readonly DeepStringify<U>[]
      : T extends object
        ? {
            [K in keyof T]:
              DeepStringify<T[K]>;
          }
        : T;


/**
 * Canonical schema used by all localized dictionaries.
 */
export type TranslationSchema =
  DeepStringify<typeof en>;

export default en;