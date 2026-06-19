// src/i18n/languages/en.ts
export default {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
  },
  hero: {
    title: 'Exceptional Home<br />Remodeling &amp; Renovations',
    cta: 'Get A Free Estimate',
  },
  aboutIntro: {
    heading: 'The Leading Bay Area Remodeling Company',
    body: "We're a remodeling and interior design company with over two decades of experience in the Bay Area. Our philosophy blends precision craftsmanship with a design sensibility that honors your vision.",
    cta: 'More About Us',
  },
  whyChooseUs: {
    heading: 'Why Choose Us',
    features: [
      { title: 'Easy<br />Financing', text: 'We offer flexible financing options to bring your project to life without straining your budget.' },
      { title: 'Free, At Home<br />Consultations', text: 'Our team visits your space at no cost to understand your vision and offer the best solution.' },
      { title: 'Award Winning<br />Service', text: 'Recognized for excellence in every project, with regional awards that validate our quality.' },
      { title: 'Licensed &amp;<br />Insured', text: 'We operate with all current licenses and insurance for your peace of mind and protection.' },
    ],
  },
  servicesOverview: {
    heading: 'Our Services Include',
    cta: 'See All Services',
    items: [
      { title: 'Kitchens', href: '/services' },
      { title: 'Bathrooms', href: '/services' },
      { title: 'Interiors', href: '/services' },
    ],
  },
  testimonials: {
    heading: 'Satisfied Customers',
    items: [
      { quote: "Exceptional service from start to finish. The team transformed our kitchen beyond what we imagined. Highly recommended.", name: 'Dave Reddington' },
      { quote: "Punctuality, professionalism, and impeccable results. Our bathroom was renovated in record time with premium quality.", name: 'Amelia Banks' },
      { quote: "Personal approach, top-tier materials, and a finish that speaks for itself. I would hire them again without hesitation.", name: 'Kenny Stutes' },
    ],
  },
  cta: {
    heading: 'Create your dream home.<br />Tell us about your project today.',
    button: 'Get A Free Estimate',
  },
  about: {
    hero: {
      heading: 'About AOSET',
      body: "We're a remodeling and interior design company with over two decades of experience in the Bay Area. Our philosophy blends precision craftsmanship with a design sensibility that honors your vision.",
    },
    process: {
      heading: 'Our Process',
      intro: 'Every project follows a clear, transparent path to ensure exceptional results.',
      steps: [
        { title: 'Preconstruction Design', text: 'We develop detailed plans and technical specs before a single piece moves.' },
        { title: 'Design & Construction Estimate', text: 'Precise, no-surprise budgets so you can plan with confidence.' },
        { title: 'On-Site Consultations', text: 'Our specialists visit your space to assess real conditions and refine every detail.' },
        { title: 'The Finishing Touches', text: 'Finish installation, quality inspection, and flawless handover — the phase that makes the difference.' },
      ],
    },
    quality: {
      heading: 'Our Quality Guarantee',
      body1: 'Every project we deliver is backed by our satisfaction guarantee. We use only first-class materials and construction techniques that have stood the test of time.',
      body2: "Our commitment goes beyond the build: we stay with you after handover to make sure every detail is perfect.",
    },
    cta: {
      heading: 'Create your dream home.<br />Tell us about your project today.',
      button: 'Get A Free Estimate',
    },
  },
  services: {
    heading: 'Our Services',
    subtitle: "Let us help you make your dreams a reality.",
    items: [
      { title: 'Kitchen', description: 'Functional, elegant kitchens that become the heart of your home.', href: '/services/kitchens' },
      { title: 'Bathrooms', description: 'Bathroom renovations combining comfort, aesthetics, and durability.', href: '/services/bathrooms' },
      { title: 'Interiors', description: 'Interior spaces redefined with premium materials and contemporary design.', href: '/services/interiors' },
      { title: 'Additions', description: 'We expand your home with solid structures that integrate seamlessly.', href: '/services/additions' },
      { title: 'Exteriors', description: 'Facades and outdoor spaces that elevate your property\'s first impression.', href: '/services/exteriors' },
      { title: 'Sunrooms', description: 'Sun-filled spaces that extend your home and connect you with nature.', href: '/services/sunrooms' },
    ],
  },
  work: {
    heading: 'Our Work',
    subtitle: "You're invited to browse a selection of recently completed projects below.",
  },
  contact: {
    heading: "Let's Discuss<br />Your Next Project",
    intro: 'Fill out the form, or call us to set up a free in-home consultation.',
    serviceAreasLabel: 'Service Areas:',
    serviceAreas: 'San Francisco, Santa Clara, Alameda, San Mateo',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
      success: 'Thanks! Your message has been sent.',
      error: 'Something went wrong. Please try again or call us directly.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
} as const;
