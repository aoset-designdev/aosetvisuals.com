// src/i18n/languages/es.ts

import type { TranslationSchema } from './en';

export const es: TranslationSchema = {
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    work: 'Proyectos',
    contact: 'Contacto',
  },

  hero: {
    title: 'Remodelaciones y Renovaciones Excepcionales',
    subtitle:
      'Transformamos espacios con precisión, experiencia y materiales de calidad.',
    cta: 'Solicitar Presupuesto Gratis',
  },

  aboutIntro: {
    heading: 'La Empresa Líder en Remodelación del Área de la Bahía',
    body:
      'Somos una empresa de remodelación y diseño de interiores con más de dos décadas de experiencia en el Área de la Bahía. Nuestra filosofía combina precisión artesanal con una sensibilidad de diseño que respeta tu visión.',
    cta: 'Más Sobre Nosotros',
  },

  whyChooseUs: {
    heading: 'Por Qué Elegirnos',
    subheading:
      'Trabajo dedicado y un servicio integral en el que puedes confiar.',

    features: [
      {
        title: 'Financiamiento Fácil',
        text:
          'Ofrecemos opciones flexibles de financiamiento para hacer realidad tu proyecto sin comprometer tu presupuesto.',
      },
      {
        title: 'Consultas Gratis en Casa',
        text:
          'Nuestro equipo visita tu espacio sin costo para comprender tu visión y ofrecerte la mejor solución.',
      },
      {
        title: 'Servicio Galardonado',
        text:
          'Reconocidos por la excelencia en cada proyecto, con premios regionales que respaldan nuestra calidad.',
      },
      {
        title: 'Licenciados y Asegurados',
        text:
          'Trabajamos con todas las licencias y seguros vigentes para tu tranquilidad y protección.',
      },
    ],
  },

  servicesOverview: {
    heading: 'Nuestros Servicios Incluyen',
    cta: 'Ver Todos los Servicios',

    items: [
      {
        title: 'Cocinas',
        href: '/services/kitchens',
      },
      {
        title: 'Baños',
        href: '/services/bathrooms',
      },
      {
        title: 'Interiores',
        href: '/services/interiors',
      },
    ],
  },

  testimonials: {
    heading: 'Clientes Satisfechos',
    subheading:
      'Conoce lo que propietarios de toda el Área de la Bahía opinan sobre trabajar con nosotros.',

    items: [
      {
        quote:
          'Un servicio excepcional de principio a fin. El equipo transformó nuestra cocina más allá de lo que imaginábamos. Totalmente recomendados.',
        name: 'Dave Reddington',
        role: 'Propietario, San Francisco',
      },
      {
        quote:
          'Puntualidad, profesionalismo y resultados impecables. Nuestro baño fue renovado en tiempo récord con una calidad excelente.',
        name: 'Amelia Banks',
        role: 'Propietaria, San Mateo',
      },
      {
        quote:
          'Atención personalizada, materiales de primera calidad y un acabado que habla por sí solo. Los contrataría nuevamente sin dudarlo.',
        name: 'Kenny Stutes',
        role: 'Propietario, Santa Clara',
      },
    ],
  },

  cta: {
    heading:
      'Crea la casa de tus sueños.Cuéntanos sobre tu proyecto hoy.',
    button: 'Solicitar Presupuesto Gratis',
  },

  about: {
    hero: {
      heading: 'Acerca de AOSET',
      body:
        'Somos una empresa de remodelación y diseño de interiores con más de dos décadas de experiencia en el Área de la Bahía. Nuestra filosofía combina precisión artesanal con una sensibilidad de diseño que respeta tu visión.',
    },

    process: {
      heading: 'Nuestro Proceso',
      intro:
        'Cada proyecto sigue un proceso claro y transparente para garantizar resultados excepcionales.',

      steps: [
        {
          title: 'Diseño Previo a la Construcción',
          text:
            'Desarrollamos planos detallados y especificaciones técnicas antes de iniciar cualquier trabajo.',
        },
        {
          title: 'Diseño y Presupuesto de Construcción',
          text:
            'Presupuestos precisos y sin sorpresas para que puedas planificar con confianza.',
        },
        {
          title: 'Consultas en el Lugar',
          text:
            'Nuestros especialistas visitan tu espacio para evaluar las condiciones reales y perfeccionar cada detalle.',
        },
        {
          title: 'Toques Finales',
          text:
            'Instalación final, inspección de calidad y entrega impecable: la fase que marca la diferencia.',
        },
      ],
    },

    quality: {
      heading: 'Nuestra Garantía de Calidad',
      body1:
        'Cada proyecto que entregamos está respaldado por nuestro compromiso de satisfacción. Utilizamos materiales de primera calidad y técnicas de construcción comprobadas a lo largo del tiempo.',
      body2:
        'Nuestro compromiso continúa después de la entrega: permanecemos contigo para asegurarnos de que cada detalle quede perfecto.',
    },

    cta: {
      heading:
        'Crea la casa de tus sueños.Cuéntanos sobre tu proyecto hoy.',
      button: 'Solicitar Presupuesto Gratis',
    },
  },

  services: {
    heading: 'Nuestros Servicios',
    subtitle:
      'Permítenos ayudarte a convertir tus ideas en realidad.',

    items: [
      {
        title: 'Cocinas',
        description:
          'Cocinas funcionales y elegantes que se convierten en el corazón de tu hogar.',
        href: '/services/kitchens',
      },
      {
        title: 'Baños',
        description:
          'Renovaciones de baños que combinan comodidad, estética y durabilidad.',
        href: '/services/bathrooms',
      },
      {
        title: 'Interiores',
        description:
          'Espacios interiores redefinidos con materiales premium y diseño contemporáneo.',
        href: '/services/interiors',
      },
      {
        title: 'Ampliaciones',
        description:
          'Ampliamos tu hogar con estructuras sólidas que se integran de manera natural.',
        href: '/services/additions',
      },
      {
        title: 'Exteriores',
        description:
          'Fachadas y espacios exteriores que elevan la primera impresión de tu propiedad.',
        href: '/services/exteriors',
      },
      {
        title: 'Sunrooms',
        description:
          'Espacios llenos de luz natural que amplían tu hogar y te conectan con el exterior.',
        href: '/services/sunrooms',
      },
    ],
  },

  work: {
    heading: 'Nuestros Proyectos',
    subtitle:
      'Te invitamos a explorar una selección de nuestros proyectos realizados recientemente.',
  },

  contact: {
    heading: 'Hablemos de Tu Próximo Proyecto',
    intro:
      'Completa el formulario o llámanos para coordinar una consulta gratuita en tu hogar.',
    serviceAreasLabel: 'Áreas de Servicio:',
    serviceAreas: 'San Francisco, Santa Clara, Alameda, San Mateo',

    form: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar',
      success: '¡Gracias! Tu mensaje ha sido enviado.',
      error:
        'Algo salió mal. Inténtalo nuevamente o llámanos directamente.',
    },
  },

  connect: {
    slogan: 'Elevando lo Visible',

    descriptor: {
      line1: 'Diseño y Presentación',
      line2: 'de Espacios Premium',
    },

    actions: {
      saveContact: 'Guardar Contacto',
      whatsapp: 'WhatsApp',
      website: 'Sitio Web',
      call: 'Llamar',
      message: 'Mensaje',
    },

    form: {
      heading: 'Enviar un Mensaje',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono (opcional)',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente.',
      error:
        'No fue posible enviar el mensaje. Inténtalo de nuevo.',
    },

    accessibility: {
      languageSelector: 'Selector de idioma',
      saveContact: 'Guardar el contacto de AOSET Visuals',
      whatsapp: 'Contactar con AOSET Visuals por WhatsApp',
      website: 'Visitar el sitio web de AOSET Visuals',
      call: 'Llamar a AOSET Visuals',
      message: 'Enviar un mensaje',
      closeMessage: 'Cerrar el formulario de mensaje',
    },
  },

  footer: {
    rights: 'Todos los derechos reservados.',
  },
};

export default es;