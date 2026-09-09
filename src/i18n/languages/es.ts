// src/i18n/languages/es.ts

/**
 * Spanish translation source.
 *
 * This file implements the canonical schema defined by en.ts.
 * Its structure should remain synchronized with the English file.
 */

import type { TranslationSchema } from './en';

export const es: TranslationSchema = {
  /**
   * Main navigation.
   */
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    work: 'Proyectos',
    contact: 'Contacto',
  },


  /**
   * Portfolio hero.
   */
  hero: {
    eyebrow:
      'Diseño + Código. En Ambos Sentidos.',

    statement: {
      line1:
        'Elevando',

      line2:
        'lo Visible.',
    },

    subtitle:
      'Creatividad, ejecución visual y tecnología hablando un mismo lenguaje.',

    primaryCta:
      'Explorar Proyectos',

    /**
     * Project information displayed inside the hero bento.
     */
    projects: {
      jco: {
        label:
          'Proyecto Destacado',

        title:
          'J&CO',

        subtitle:
          'Estate Renovations',

        meta:
          'Identidad · Impresos · Digital · Web',

        cta:
          'Ver Proyecto',

        alt:
          'Proyecto de identidad de J&CO Estate Renovations',
      },


      campaign: {
        label:
          'Concepto de Campaña',

        title:
          'Del Inbox a la Acción.',

        description:
          'Email, redes sociales, publicidad digital y estrategia de campaña.',

        cta:
          'Ver Caso de Estudio',

        alt:
          'Concepto integrado de campaña de email y publicidad digital',
      },


      seabiza: {
        title:
          'Seabiza',

        subtitle:
          'High-End Yacht Charter',

        meta:
          'Concepto de Marca · Digital · Web',

        cta:
          'Ver Proyecto',

        alt:
          'Concepto de identidad para Seabiza, servicio premium de alquiler de yates',
      },


      /**
       * Technical card showing the implementation behind AOSET.
       */
      built: {
        label:
          'La Base Técnica',

        title:
          'AOSET Visuals es una iniciativa independiente diseñada y desarrollada por Abel T. Oset.',

        stack: [
          'Astro · TypeScript',
          'Tailwind CSS · Cloudflare',
          'Git · CI/CD',
          'AI Integrada',
        ],

        cta:
          'Detalles Técnicos',
      },


      jd: {
        title:
          'J&D',

        subtitle:
          'Good Corp',

        meta:
          'Identidad · Gráfica Vehicular · Digital',

        cta:
          'Ver Proyecto',

        alt:
          'Proyecto de identidad y gráfica vehicular de J&D Good Corp',
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
      'Acerca de AOSET Visuals',

    heading:
      'Claridad. Coherencia. Implementación.',

    intro:
      'AOSET Visuals integra dirección creativa e implementación para dar forma a ideas que comuniquen y funcionen.',

    purpose:
      'El propósito es simple: contribuir a que ideas, emprendimientos y negocios comuniquen de manera efectiva, operen con mayor consistencia y presenten su valor con confianza.',

    philosophy:
      'Un buen diseño debería ir más allá de la apariencia. Siempre que sea posible, debería contribuir a mejores experiencias, una percepción más sólida y resultados tangibles.',
  },


  /**
   * Selected Projects page.
   */
  work: {
    eyebrow:
      'Proyectos Seleccionados',

    heading:
      'Necesidades diferentes. Una perspectiva integrada.',

    intro:
      'Sistemas de identidad, comunicación digital, aplicaciones físicas y experiencias web desarrolladas para diferentes industrias y contextos.',

    viewProject:
      'Explorar Proyecto',
  },


  /**
   * Homepage closing section.
   *
   * The copy invites ideas, projects and collaboration without
   * framing the site as a request for employment.
   */
 closing: {
  eyebrow:
    'Ideas · Proyectos · Colaboración',

  title:
    'Una conversación puede empezar aquí...',

  description:
    'Si una idea, proyecto o desafío puede beneficiarse de una combinación cuidadosa de dirección creativa e implementación, vale la pena explorarlo.',

  cta:
    'Continuar',
},


  /**
   * Dedicated Contact page.
   */
  contact: {
  eyebrow: 'Contacto',
  heading: '¿Algo en mente?',
  intro: 'Unos pocos detalles bastan para empezar.',

  form: {
    firstName:
      'Nombre',

    lastName:
      'Apellido',

    email:
      'Email',

    phone:
      'Teléfono (opcional)',

    subject:
      'Asunto',

    message:
      'Mensaje',

    submit:
      'Enviar Mensaje',

    sending:
      'Enviando...',

    success:
      'Gracias. Tu mensaje ha sido enviado.',

    error:
      'Algo salió mal. Inténtalo nuevamente.',

    invalidEmail:
      'Introduce una dirección de email válida.',

    invalidEmailSubmit:
      'Introduce una dirección de email válida antes de enviar.',

    ariaLabel:
      'Contactar a AOSET Visuals',
  },
},


  /**
   * AOSET Connect experience.
   *
   * This remains separate from the standard Contact page because
   * it supports the QR / digital-card interaction flow.
   */
  connect: {
    slogan:
      'Elevando la Capa Visible',

    descriptor: {
      line1:
        'Diseño y Presentación',

      line2:
        'para Espacios Premium',
    },

    actions: {
      saveContact:
        'Guardar Contacto',

      whatsapp:
        'WhatsApp',

      website:
        'Sitio Web',

      call:
        'Llamar',

      message:
        'Mensaje',
    },

    form: {
      heading:
        'Enviar un Mensaje',

      name:
        'Nombre',

      email:
        'Email',

      phone:
        'Teléfono (opcional)',

      message:
        'Mensaje',

      send:
        'Enviar',

      sending:
        'Enviando...',

      success:
        'Mensaje enviado correctamente.',

      error:
        'No fue posible enviar el mensaje. Inténtalo de nuevo.',
    },

    accessibility: {
      languageSelector:
        'Selector de idioma',

      saveContact:
        'Guardar contacto de AOSET Visuals',

      whatsapp:
        'Contactar a AOSET Visuals por WhatsApp',

      website:
        'Visitar el sitio web de AOSET Visuals',

      call:
        'Llamar a AOSET Visuals',

      message:
        'Enviar un mensaje',

      closeMessage:
        'Cerrar formulario de mensaje',
    },
  },


  /**
   * Global footer.
   */
  footer: {
    rights:
      'Todos los derechos reservados.',
  },
};

export default es;