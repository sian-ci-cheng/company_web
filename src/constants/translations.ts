import type { Translations } from "@/types/translations";

export const defaultTranslations: Translations = {
  en: {
    nav: {
      explore: "Explore ONT",
      safety: "Safety",
      about: "About Us",
      tryNow: "Try Now"
    },
    about: {
      label: "Our Philosophy",
      subtitle: "Orchestrate. Navigate. Threshold.",
      intro: "Omni Nexus Tech was founded on a core belief: intelligent autonomy should serve those who need it most. From emergency response to critical infrastructure monitoring, we build systems that let operators accomplish missions with greater precision, speed, and confidence.",
      orchestrate: {
        zh: "Orchestrate",
        desc: "Every mission is an interplay of complex systems — drones, data, operators, and ground infrastructure. We design platforms that bring order to complexity, enabling every operational layer to coordinate seamlessly. Our systems don't just automate tasks; they integrate the entire operational ecosystem so teams can focus on decisions, not logistics."
      },
      navigate: {
        zh: "Navigate",
        desc: "The real world is full of uncertainty. Changing weather, shifting terrain, communication disruptions. We design our systems to advance robustly through uncertainty — adaptive, resilient, and always mission-oriented. For us, navigation is not just a flight path; it's the ability to find the right course under any conditions."
      },
      threshold: {
        zh: "Threshold",
        desc: "We exist at the edge of possibility. Every product pushes the boundary between human capability and machine precision — redefining what operators can see, reach, and protect. Threshold is our commitment: to continuously push the frontier, making today's limits tomorrow's starting point."
      }
    },
    explore: {
      intro: "Explore our complete autonomous aerial systems ecosystem.",
      orchestrate: {
        zh: "Orchestrate",
        product: "ON-Dock",
        productDesc: "Autonomous Hangar System",
        features: ["Visual Landing", "Communication Relay", "Detachable RTK", "4/5G Module"]
      },
      navigate: {
        zh: "Navigate",
        product: "ONT-GCS",
        productDesc: "Multi-drone Ground Control",
        features: ["Multi-drone Swarm Flight", "Custom Ground Control Station (ONT-GCS)"]
      },
      threshold: {
        zh: "Threshold",
        product: "AI Recognition",
        productDesc: "Intelligent Recognition System",
        features: ["AI Object Recognition", "Multi-drone ISR"]
      }
    },
    hero: {
      tag: "Orchestrate. Navigate. Threshold.",
      title1: "ONT Service",
      title2: "is here",
      desc: "",
      watchDemo: "Watch Demo",
      solutions: "Solutions"
    },
    cards: {
      hubs: {
        title: "ON-Dock →",
        desc: "ON-Dock delivers precise autonomous landing and rapid power replenishment in any field environment.",
        feature1: "Autonomous Docking System",
        feature2: "All-weather Protection"
      },
      rescue: {
        title: "ON-GCS →",
        desc: "An integrated mission control system for real-time aerial intelligence and emergency cargo deployment.",
        feature1: "Smart Surveillance",
        feature2: "Remote Operations"
      }
    },
    cta: {
      title: "Ready to take flight?",
      button: "Contact Us"
    },
    footer: {
      companyName: "Omni Nexus Tech Co., Ltd.",
      addressLabel: "Address: ",
      address: "7F06, No.5, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei",
      phoneLabel: "Phone: ",
      phone: "02-27588857",
      desc: "Empowering the world with intelligent autonomous systems and high-performance logistics platforms.",
      sections: {
        company: "Company",
        legal: "Legal"
      },
      links: {
        careers: "Careers",
        contact: "Contact",
        feedback: "Feedback",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy"
      },
      rights: "© 2026 Omni Nexus Tech. All rights reserved."
    }
  },
  zh: {
    nav: {
      explore: "探索永誠發",
      safety: "安全",
      about: "關於我們",
      tryNow: "立即體驗"
    },
    about: {
      label: "公司理念",
      subtitle: "統籌、導航、邊界守護",
      intro: "永誠發科技創立於一個核心信念：智慧自主應當服務於最需要它的人。從緊急救援到關鍵基礎設施監控，我們打造的系統讓操作人員以更高的精準度、速度與信心完成任務。",
      orchestrate: {
        zh: "統籌",
        desc: "每一次任務都是複雜系統的交織——無人機、數據、操作員與地面基礎設施。我們設計的平台為複雜性帶來秩序，讓每一個作業層面都能無縫協調。我們的系統不只是自動化任務，更整合整個作業生態，讓團隊專注於決策，而非後勤。"
      },
      navigate: {
        zh: "導航",
        desc: "現實世界充滿不確定性。天氣變化、地形更迭、通訊中斷。我們將系統設計為在不確定中穩健前行——具備適應性、韌性，並始終朝任務目標定向。導航對我們而言，不只是飛行路徑，更是在任何條件下找到正確航向的能力。"
      },
      threshold: {
        zh: "邊界守護",
        desc: "我們存在於可能性的邊界。每一款產品都在推進人類能力與機器精準度之間的界線——重新定義操作員能看見、觸及與守護的範疇。邊界守護是我們的承諾：持續推進前沿，讓今日的極限成為明日的起點。"
      }
    },
    explore: {
      intro: "探索我們完整的自主空中系統生態。",
      orchestrate: {
        zh: "統籌",
        product: "ON-Dock",
        productDesc: "自主機庫系統",
        features: ["視覺降落", "通訊中繼站", "可吸拆RTK", "4/5G模組"]
      },
      navigate: {
        zh: "導航",
        product: "ONT-GCS",
        productDesc: "多無人機地面控制",
        features: ["多無人機群飛", "客製化地面控制站（ONT-GCS）"]
      },
      threshold: {
        zh: "邊界守護",
        product: "AI辨識",
        productDesc: "智慧辨識系統",
        features: ["AI物件辨識", "多無人機偵蒐"]
      }
    },
    hero: {
      tag: "Orchestrate. Navigate. Threshold.",
      title1: "智慧科技",
      title2: "定義救援",
      desc: "以自主飛行器與整合式行動充電站，強化緊急應對效率。",
      watchDemo: "觀看演示",
      solutions: "解決方案"
    },
    cards: {
      hubs: {
        title: "ON-Dock →",
        desc: "ON-Dock 在任何野外環境下皆能提供精準的自主降落與快速電力補充。",
        feature1: "自主對接系統",
        feature2: "全天候防護設計"
      },
      rescue: {
        title: "ON-GCS →",
        desc: "整合任務控制系統，實現即時空中情報與緊急貨物部署。",
        feature1: "智慧監控",
        feature2: "遠端操作"
      }
    },
    cta: {
      title: "準備好啟航了嗎？",
      button: "聯絡我們"
    },
    footer: {
      companyName: "永誠發科技股份有限公司",
      addressLabel: "地址：",
      address: "台北市信義區信義路五段5號7F06",
      phoneLabel: "電話：",
      phone: "02-27588857",
      desc: "以智慧自主系統與高效能物流平台賦能全球。",
      sections: {
        company: "公司資訊",
        legal: "法律條款"
      },
      links: {
        careers: "招募人才",
        contact: "聯絡我們",
        feedback: "意見回饋",
        privacy: "隱私權政策",
        terms: "服務條款",
        cookies: "Cookie 政策"
      },
      rights: "© 2026 永誠發科技。保留所有權利。"
    }
  }
};
