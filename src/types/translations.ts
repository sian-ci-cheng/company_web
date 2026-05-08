export type TranslationKeys = {
  nav: {
    explore: string;
    safety: string;
    about: string;
    tryNow: string;
  };
  about: {
    label: string;
    subtitle: string;
    intro: string;
    orchestrate: {
      zh: string;
      desc: string;
    };
    navigate: {
      zh: string;
      desc: string;
    };
    threshold: {
      zh: string;
      desc: string;
    };
  };
  explore: {
    intro: string;
    orchestrate: {
      zh: string;
      product: string;
      productDesc: string;
      features: string[];
    };
    navigate: {
      zh: string;
      product: string;
      productDesc: string;
      features: string[];
    };
    threshold: {
      zh: string;
      product: string;
      productDesc: string;
      features: string[];
    };
  };
  hero: {
    tag: string;
    title1: string;
    title2: string;
    desc: string;
    watchDemo: string;
    solutions: string;
  };
  cards: {
    hubs: {
      title: string;
      desc: string;
      feature1: string;
      feature2: string;
    };
    rescue: {
      title: string;
      desc: string;
      feature1: string;
      feature2: string;
    };
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    companyName: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    desc: string;
    sections: {
      company: string;
      legal: string;
    };
    links: {
      careers: string;
      contact: string;
      feedback: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
    rights: string;
  };
};

export type Translations = {
  en: TranslationKeys;
  zh: TranslationKeys;
};
