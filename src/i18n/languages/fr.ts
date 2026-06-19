// src/i18n/languages/fr.ts
export default {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    work: 'Réalisations',
    contact: 'Contact',
  },
  hero: {
    title: "Rénovations et Réaménagements<br />Résidentiels d'Exception",
    cta: 'Obtenir un Devis Gratuit',
  },
  aboutIntro: {
    heading: "L'Entreprise de Rénovation Leader de la Baie de San Francisco",
    body: "Nous sommes passionnés par la transformation des espaces. Notre équipe allie des décennies d'expérience à un sens aigu du design pour livrer des résultats qui dépassent les attentes.",
    cta: 'En savoir plus sur nous',
  },
  whyChooseUs: {
    heading: 'Pourquoi nous choisir ?',
    features: [
      { title: 'Financement<br />Facile', text: "Nous proposons des options de financement flexibles pour concrétiser votre projet sans contrainte budgétaire." },
      { title: 'Consultations<br />Gratuites à Domicile', text: "Notre équipe se déplace chez vous gratuitement pour comprendre votre vision et vous proposer la meilleure solution." },
      { title: 'Service<br />Primé', text: "Reconnus pour l'excellence de chaque projet, avec des distinctions régionales qui attestent de notre qualité." },
      { title: 'Agréé &amp;<br />Assuré', text: "Nous opérons avec toutes les licences et assurances en vigueur pour votre tranquillité d'esprit." },
    ],
  },
  servicesOverview: {
    heading: 'Nos Services Comprennent',
    cta: 'Voir Tous les Services',
    items: [
      { title: 'Cuisines', href: '/services' },
      { title: 'Salles de Bain', href: '/services' },
      { title: 'Intérieurs', href: '/services' },
    ],
  },
  testimonials: {
    heading: 'Clients Satisfaits',
    items: [
      { quote: "Un service exceptionnel du début à la fin. L'équipe a transformé notre cuisine au-delà de nos attentes. Hautement recommandé.", name: 'Dave Reddington' },
      { quote: "Ponctualité, professionnalisme et résultats impeccables. Notre salle de bain a été rénovée en un temps record avec une qualité premium.", name: 'Amelia Banks' },
      { quote: "Une approche personnalisée, des matériaux de premier ordre et une finition qui parle d'elle-même. Je les recommande sans hésitation.", name: 'Kenny Stutes' },
    ],
  },
  cta: {
    heading: "Créez la maison de vos rêves.<br />Parlez-nous de votre projet aujourd'hui.",
    button: 'Obtenir un Devis Gratuit',
  },
  about: {
    hero: {
      heading: "À propos d'AOSET",
      body: "Nous sommes une entreprise spécialisée dans la rénovation et le design d'intérieur avec plus de deux décennies d'expérience dans la région de la Baie. Notre philosophie allie artisanat de précision et respect de votre vision.",
    },
    process: {
      heading: 'Notre Processus',
      intro: 'Chaque projet suit un parcours clair et transparent pour garantir des résultats exceptionnels.',
      steps: [
        { title: 'Conception Préalable', text: 'Nous élaborons des plans détaillés et des spécifications techniques avant de démarrer les travaux.' },
        { title: 'Estimation Design & Construction', text: "Des devis précis et sans surprises pour planifier en toute confiance." },
        { title: 'Consultation sur Site', text: "Nos spécialistes se déplacent pour évaluer les conditions réelles et affiner chaque détail." },
        { title: 'Touches Finales', text: "Pose des finitions, contrôle qualité et livraison impeccable : la phase qui fait la différence." },
      ],
    },
    quality: {
      heading: 'Notre Garantie Qualité',
      body1: "Chaque projet livré est couvert par notre garantie de satisfaction. Nous utilisons exclusivement des matériaux haut de gamme et des techniques de construction éprouvées.",
      body2: "Notre engagement va au-delà du chantier : nous vous accompagnons après la livraison pour nous assurer que chaque détail est parfait.",
    },
    cta: {
      heading: "Créez la maison de vos rêves.<br />Parlez-nous de votre projet aujourd'hui.",
      button: 'Obtenir un Devis Gratuit',
    },
  },
  services: {
    heading: 'Nos Services',
    subtitle: "Laissez-nous vous aider à concrétiser vos rêves.",
    items: [
      { title: 'Cuisines', description: 'Des cuisines fonctionnelles et élégantes qui deviennent le cœur de votre maison.', href: '/services/kitchens' },
      { title: 'Salles de Bain', description: 'Des rénovations alliant confort, esthétique et durabilité.', href: '/services/bathrooms' },
      { title: 'Intérieurs', description: 'Des espaces intérieurs redéfinis avec des matériaux premium et une vision contemporaine.', href: '/services/interiors' },
      { title: 'Extensions', description: "Nous agrandissons votre maison avec des structures solides parfaitement intégrées à l'existant.", href: '/services/additions' },
      { title: 'Extérieurs', description: "Façades et espaces extérieurs qui valorisent la première impression de votre propriété.", href: '/services/exteriors' },
      { title: 'Vérandas', description: 'Des espaces lumineux qui prolongent votre maison et vous connectent à la nature.', href: '/services/sunrooms' },
    ],
  },
  work: {
    heading: 'Nos Réalisations',
    subtitle: 'Parcourez une sélection de projets récemment achevés.',
  },
  contact: {
    heading: 'Discutons de<br />Votre Prochain Projet',
    intro: "Remplissez le formulaire ou appelez-nous pour organiser une consultation gratuite à domicile.",
    serviceAreasLabel: 'Zones desservies :',
    serviceAreas: 'San Francisco, Santa Clara, Alameda, San Mateo',
    form: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Téléphone',
      address: 'Adresse',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer',
      success: 'Merci ! Votre message a bien été envoyé.',
      error: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.',
    },
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
} as const;
