// src/i18n/languages/es.ts
export default {
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    work: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    title: 'Remodelaciones y Renovaciones<br />de Hogar Excepcionales',
    cta: 'Solicita un Presupuesto Gratis',
  },
  aboutIntro: {
    heading: 'La Empresa de Remodelación Líder en el Área de la Bahía',
    body: 'Somos una empresa de remodelación y diseño de interiores con más de dos décadas de experiencia. Nuestra filosofía combina artesanía de precisión con una sensibilidad de diseño que respeta tu visión.',
    cta: 'Conoce más sobre nosotros',
  },
  whyChooseUs: {
    heading: '¿Por qué elegirnos?',
    features: [
      { title: 'Financiamiento<br />Accesible', text: 'Ofrecemos opciones de financiamiento flexibles para hacer realidad tu proyecto sin comprometer tu presupuesto.' },
      { title: 'Consultas Gratis<br />en tu Hogar', text: 'Nuestro equipo visita tu espacio sin costo para entender tu visión y ofrecerte la mejor solución.' },
      { title: 'Servicio<br />Premiado', text: 'Reconocidos por la excelencia en cada proyecto, con premios regionales que avalan nuestra calidad.' },
      { title: 'Licenciados<br />y Asegurados', text: 'Operamos con todas las licencias y seguros vigentes para tu tranquilidad y protección.' },
    ],
  },
  servicesOverview: {
    heading: 'Nuestros Servicios Incluyen',
    cta: 'Ver Todos los Servicios',
    items: [
      { title: 'Cocinas', href: '/services' },
      { title: 'Baños', href: '/services' },
      { title: 'Interiores', href: '/services' },
    ],
  },
  testimonials: {
    heading: 'Clientes Satisfechos',
    items: [
      { quote: 'Un servicio excepcional de principio a fin. El equipo transformó nuestra cocina más allá de lo que imaginábamos. Totalmente recomendados.', name: 'Dave Reddington' },
      { quote: 'Puntualidad, profesionalismo y resultados impecables. Renovaron nuestro baño en tiempo récord y con calidad premium.', name: 'Amelia Banks' },
      { quote: 'Trato cercano, materiales de primera y un acabado que habla por sí solo. Sin duda volvería a contratarlos.', name: 'Kenny Stutes' },
    ],
  },
  cta: {
    heading: 'Crea el hogar de tus sueños.<br />Cuéntanos sobre tu proyecto hoy.',
    button: 'Solicita un Presupuesto Gratis',
  },
  about: {
    hero: {
      heading: 'Sobre AOSET',
      body: 'Somos una empresa especializada en remodelación y diseño de interiores con más de dos décadas de experiencia en el Área de la Bahía. Nuestra filosofía combina artesanía de precisión con un ojo clínico para el diseño.',
    },
    process: {
      heading: 'Nuestro Proceso',
      intro: 'Cada proyecto sigue un camino claro y transparente para garantizar resultados excepcionales.',
      steps: [
        { title: 'Diseño de Preconstrucción', text: 'Desarrollamos planos detallados y especificaciones técnicas antes de mover una sola pieza.' },
        { title: 'Estimación de Diseño y Construcción', text: 'Presupuestos precisos y sin sorpresas para que puedas planificar con confianza.' },
        { title: 'Consulta en Sitio', text: 'Nuestros especialistas visitan tu espacio para evaluar condiciones reales y afinar cada detalle.' },
        { title: 'Toques Finales', text: 'Instalación de acabados, inspección de calidad y entrega impecable: la fase que marca la diferencia.' },
      ],
    },
    quality: {
      heading: 'Nuestra Garantía de Calidad',
      body1: 'Cada proyecto que entregamos está respaldado por nuestra garantía de satisfacción. Utilizamos únicamente materiales de primera clase y técnicas de construcción que han superado las pruebas del tiempo.',
      body2: 'Nuestro compromiso va más allá de la obra: te acompañamos después de la entrega para asegurarnos de que cada detalle esté perfecto.',
    },
    cta: {
      heading: 'Crea el hogar de tus sueños.<br />Cuéntanos sobre tu proyecto hoy.',
      button: 'Solicita un Presupuesto Gratis',
    },
  },
  services: {
    heading: 'Nuestros Servicios',
    subtitle: 'Permítenos ayudarte a hacer realidad tus sueños.',
    items: [
      { title: 'Cocinas', description: 'Diseños funcionales y elegantes que convierten tu cocina en el corazón de tu hogar.', href: '/services/kitchens' },
      { title: 'Baños', description: 'Renovaciones de baños que combinan confort, estética y durabilidad.', href: '/services/bathrooms' },
      { title: 'Interiores', description: 'Espacios interiores redefinidos con materiales premium y visión de diseño contemporáneo.', href: '/services/interiors' },
      { title: 'Ampliaciones', description: 'Expandimos tu hogar con estructuras sólidas que se integran a la perfección con lo existente.', href: '/services/additions' },
      { title: 'Exteriores', description: 'Fachadas y espacios exteriores que elevan la primera impresión de tu propiedad.', href: '/services/exteriors' },
      { title: 'Solarios', description: 'Espacios iluminados por el sol que extienden tu hogar y conectan con la naturaleza.', href: '/services/sunrooms' },
    ],
  },
  work: {
    heading: 'Nuestros Proyectos',
    subtitle: 'Te invitamos a explorar una selección de proyectos recientemente completados.',
  },
  contact: {
    heading: 'Hablemos de<br />Tu Próximo Proyecto',
    intro: 'Completa el formulario o llámanos para coordinar una consulta gratuita en tu hogar.',
    serviceAreasLabel: 'Áreas de servicio:',
    serviceAreas: 'San Francisco, Santa Clara, Alameda, San Mateo',
    form: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar',
      success: '¡Gracias! Tu mensaje ha sido enviado.',
      error: 'Algo salió mal. Por favor intenta de nuevo o llámanos directamente.',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
} as const;
