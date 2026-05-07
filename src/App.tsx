import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Shield, Zap, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      explore: "Explore OmniNexus",
      safety: "Safety",
      about: "About Us",
      tryNow: "Try AeroSwift"
    },
    about: {
      label: "Our Philosophy",
      subtitle: "統籌、導航、邊界守護",
      intro: "OmniNexus Tech was founded on a single conviction: intelligent autonomy should serve those who need it most. From emergency rescue to critical infrastructure monitoring, we build systems that let operators achieve more — with greater precision, speed, and confidence.",
      orchestrate: {
        zh: "統籌",
        desc: "Every mission is a web of moving parts — drones, data, operators, and ground infrastructure. We design platforms that bring order to complexity, enabling seamless coordination across every layer of an operation. Our systems don't just automate tasks; they harmonize entire ecosystems so teams can focus on decisions, not logistics."
      },
      navigate: {
        zh: "導航",
        desc: "The real world is unpredictable. Weather shifts, terrain changes, communications drop. We engineer our systems to move through uncertainty with confidence — adaptive, resilient, and always oriented toward the mission. Navigation, for us, is not just a flight path. It is the capacity to find the right course under any condition."
      },
      threshold: {
        zh: "邊界守護",
        desc: "We exist at the edge of what is possible. Every product we build pushes the boundary between human capability and machine precision — redefining what operators can see, reach, and protect. Threshold is our promise: to keep advancing the frontier, so that the limits of today become the baseline of tomorrow."
      }
    },
    explore: {
      intro: "Discover our complete ecosystem of autonomous aerial systems.",
      orchestrate: {
        zh: "統籌",
        product: "ON-Dock",
        productDesc: "Autonomous Hangar System",
        features: ["Visual Landing", "Communication Relay Station", "Detachable RTK", "4/5G Module"]
      },
      navigate: {
        zh: "導航",
        product: "ONT-GCS",
        productDesc: "Multi-drone Ground Control",
        features: ["Multi-drone Swarm Flight", "Custom Ground Control System (ONT-GCS)"]
      },
      threshold: {
        zh: "邊界守護",
        product: "AI Vision",
        productDesc: "Intelligent Recognition",
        features: ["AI Object Recognition", "Multi-drone Reconnaissance"]
      }
    },
    hero: {
      tag: "Orchestrate. Navigate. Threshold.",
      title1: "Rescue defined",
      title2: "by intelligence",
      desc: "Empowering emergency response with autonomous aircraft and integrated mobile charging stations.",
      watchDemo: "Watch Demo",
      solutions: "Solutions"
    },
    cards: {
      hubs: {
        title: "ON-Dock →",
        desc: "ON-Dock provides precision autonomous landing and rapid energy replenishment in any field condition.",
        feature1: "Autonomous Docking",
        feature2: "Weatherproof Design"
      },
      rescue: {
        title: "ON-GCS →",
        desc: "Integrated mission control systems for real-time aerial intelligence and emergency cargo deployment.",
        feature1: "Smart Monitoring",
        feature2: "Remote Operation"
      }
    },
    cta: {
      title: "Ready to fly?",
      button: "Contact Us"
    },
    footer: {
      companyName: "Omni Nexus Tech Co., Ltd.",
      addressLabel: "Address: ",
      address: "7F06, No. 5, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City",
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

function parseCSVLine(line: string): [string, string, string] {
  const out: string[] = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else { inQ = !inQ; }
    } else if (c === ',' && !inQ) { out.push(cur); cur = ''; }
    else { cur += c; }
  }
  out.push(cur);
  return [out[0] ?? '', out[1] ?? '', out[2] ?? ''];
}

function setPath(obj: Record<string, unknown>, path: string, val: unknown) {
  const parts = path.split('.');
  let node = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!node[parts[i]]) node[parts[i]] = {};
    node = node[parts[i]] as Record<string, unknown>;
  }
  node[parts[parts.length - 1]] = val;
}

function parseContentCSV(csv: string): typeof translations {
  const en: Record<string, unknown> = {};
  const zh: Record<string, unknown> = {};
  for (const line of csv.trim().split('\n').slice(1)) {
    if (!line.trim()) continue;
    const [key, enVal, zhVal] = parseCSVLine(line);
    if (!key) continue;
    const toVal = (v: string) => (v.includes('|') ? v.split('|') : v);
    setPath(en, key, toVal(enVal));
    setPath(zh, key, toVal(zhVal || enVal));
  }
  return { en, zh } as typeof translations;
}

function LangToggle({ lang, setLang }: { lang: 'en' | 'zh'; setLang: (l: 'en' | 'zh') => void }) {
  return (
    <div className="flex items-center bg-white/10 border border-white/20 rounded-full p-1 gap-0.5">
      <Globe className="w-3.5 h-3.5 text-white/40 mx-1.5" />
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${lang === 'en' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
      >EN</button>
      <button
        onClick={() => setLang('zh')}
        className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${lang === 'zh' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
      >中文</button>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [allT, setAllT] = useState(translations);
  const [page, setPage] = useState<'home' | 'explore'>('home');
  const [btnMouse, setBtnMouse] = useState<{ x: number; y: number } | null>(null);
  const t = allT[lang];

  useEffect(() => {
    fetch('./content.csv')
      .then(r => r.text())
      .then(csv => setAllT(parseContentCSV(csv)))
      .catch(() => {});
  }, []);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale  = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const goTo = (p: 'home' | 'explore') => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-black">

      {/* ═══════════════ HOME ═══════════════ */}
      {page === 'home' && (
        <>
          {/* Fixed LangToggle — top right */}
          <div className="fixed top-6 right-6 z-50">
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          {/* Fixed Explore button — bottom center */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <button
              onClick={() => goTo('explore')}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setBtnMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => setBtnMouse(null)}
              style={{
                background: btnMouse
                  ? `radial-gradient(circle at ${btnMouse.x}px ${btnMouse.y}px, #D0F040 0%, #a8d800 55%, rgba(0,0,0,0.7) 100%)`
                  : 'rgba(0,0,0,0.7)',
                color: btnMouse ? '#000' : '#fff',
                borderColor: btnMouse ? 'transparent' : 'rgba(255,255,255,0.25)',
              }}
              className="px-12 py-3 border backdrop-blur-sm font-bold text-sm uppercase tracking-widest rounded-full shadow-xl shadow-black/60 cursor-pointer"
            >
              {t.nav.explore}
            </button>
          </div>

          {/* Hero */}
          <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50 grayscale-[0.3]">
                <source src="videoplayback.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(208,240,64,0.05)_0%,transparent_70%)]" />
            </div>
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-10 left-8 md:top-14 md:left-14 z-10 max-w-xl"
            >
              <div className="flex items-center gap-3 mb-10">
                <img src="ONT Shield_logo.png" alt="Omni Nexus Logo" className="h-9 w-9 rounded-xl invert" />
                <span className="font-display font-bold text-sm tracking-tighter uppercase text-white/70">Omni Nexus Tech</span>
              </div>
              <h1
                className="font-display font-bold leading-[0.9] tracking-[-0.04em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
              >
                {t.hero.title1}<br />
                {lang === 'zh' ? '' : 'by '}<span className="text-accent italic">{t.hero.title2}</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-sm leading-relaxed">{t.hero.desc}</p>
            </motion.div>
          </section>

          {/* ON-Dock + ON-GCS cards */}
          <section className="py-4 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#111] group cursor-pointer border border-white/5"
                style={{ height: 'calc(100vh - 2rem)' }}
              >
                <img src="ON-Dock.png" alt="ON-Dock" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t.cards.hubs.title}</h2>
                  <p className="text-xl text-white/70 mb-8 max-w-sm leading-relaxed">{t.cards.hubs.desc}</p>
                  <ul className="space-y-3 text-sm font-semibold tracking-wide uppercase text-white">
                    <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-accent" />{t.cards.hubs.feature1}</li>
                    <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-accent" />{t.cards.hubs.feature2}</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#111] group cursor-pointer border border-white/5"
                style={{ height: 'calc(100vh - 2rem)' }}
              >
                <img src="gcs.png" alt="ON-GCS" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t.cards.rescue.title}</h2>
                  <p className="text-xl text-white/70 mb-8 max-w-sm leading-relaxed">{t.cards.rescue.desc}</p>
                  <ul className="space-y-3 text-sm font-semibold tracking-wide uppercase text-white">
                    <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-white/60" />{t.cards.rescue.feature1}</li>
                    <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-white/60" />{t.cards.rescue.feature2}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Home footer */}
          <footer className="pt-10 pb-12 px-6 md:px-14 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start justify-between gap-8">
              {/* Left: company name + copyright */}
              <div>
                <p className="text-white font-bold text-sm mb-2">{t.footer.companyName}</p>
                <p className="text-white/30 text-xs leading-relaxed">
                  Copyright © 2026 Manna Air Delivery.<br />All rights reserved.
                </p>
              </div>

              {/* Right: links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 sm:text-right">
                {[
                  t.footer.links.careers,
                  t.footer.links.cookies,
                  t.footer.links.privacy,
                  t.footer.links.terms,
                  t.footer.links.contact,
                  t.footer.links.feedback,
                ].map(label => (
                  <a key={label} href="#" className="text-xs text-white/35 hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </>
      )}

      {/* ═══════════════ EXPLORE ═══════════════ */}
      {page === 'explore' && (
        <>
          {/* Fixed header */}
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/90 backdrop-blur-md border-b border-white/5">
            <button onClick={() => goTo('home')} className="flex items-center gap-3 group">
              <ChevronRight className="w-4 h-4 text-white/40 rotate-180 group-hover:text-white transition-colors" />
              <img src="ONT Shield_logo.png" alt="Logo" className="h-7 w-7 rounded-lg invert" />
              <span className="font-display font-bold text-sm tracking-tighter uppercase text-white/60 group-hover:text-white transition-colors hidden sm:inline">
                Omni Nexus Tech
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {[
                { href: '#products', label: lang === 'zh' ? '產品介紹' : 'Products' },
                { href: '#company',  label: lang === 'zh' ? '公司資訊' : 'Company'  },
                { href: '#contact',  label: lang === 'zh' ? '聯絡我們' : 'Contact'  },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>

            <LangToggle lang={lang} setLang={setLang} />
          </header>

          {/* 產品介紹 */}
          <section id="products" className="pt-24 pb-8 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-3">
                  {lang === 'zh' ? '產品介紹' : 'Products'}
                </p>
                <p className="text-white/60 text-base">{t.explore.intro}</p>
              </motion.div>

              <div className="space-y-4">
                {([
                  { letter: 'O', word: 'rchestrate', key: 'orchestrate' as const, image: 'ON-Dock.png',  imageAlt: 'ON-Dock',        bg: '#4ADE80' },
                  { letter: 'N', word: 'avigate',    key: 'navigate'    as const, image: 'gcs.png',      imageAlt: 'ON-GCS',        bg: '#FACC15' },
                  { letter: 'T', word: 'hreshold',   key: 'threshold'   as const, image: 'AIimage.png',  imageAlt: 'AI Recognition', bg: '#F87171' },
                ] as const).map(({ letter, word, key, image, imageAlt, bg }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                    className="rounded-[1.75rem] overflow-hidden text-black flex flex-col lg:flex-row"
                    style={{ backgroundColor: bg, minHeight: '380px' }}
                  >
                    {/* Left: letter + features */}
                    <div className="shrink-0 w-full lg:w-48 p-7 flex flex-col justify-between bg-black/[0.08]">
                      <div>
                        <div className="flex items-baseline font-display uppercase mb-3">
                          <span className="text-5xl font-black leading-none">{letter}</span>
                          <span className="text-black/30 text-xs font-bold tracking-[0.15em] ml-1">{word}</span>
                        </div>
                        <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-sm">
                          {t.explore[key].zh}
                        </span>
                      </div>
                      <div className="mt-6">
                        {t.explore[key].features.map((f, fi) => (
                          <div key={fi} className="border-t border-black/10 py-2.5">
                            <span className="text-xs text-black/60 font-semibold leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Center: image */}
                    <div className="relative flex-1" style={{ minHeight: '240px' }}>
                      <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                    </div>

                    {/* Right: product info */}
                    <div className="shrink-0 w-full lg:w-72 p-7 lg:p-10 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-3">
                          {t.explore[key].productDesc}
                        </p>
                        <h3
                          className="font-display font-black leading-[0.9] tracking-tight"
                          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                        >
                          {t.explore[key].product}
                        </h3>
                      </div>
                      <button className="self-start mt-8 px-6 py-3 bg-black text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-black/70 transition-colors">
                        {lang === 'en' ? 'More details' : '了解更多'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 公司資訊 */}
          <section id="company" className="py-20 px-6 md:px-12 border-t border-white/5 mt-8">
            <div className="max-w-5xl mx-auto">

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14"
              >
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-5">{t.about.label}</p>
                <div className="flex flex-wrap items-baseline font-display uppercase mb-5">
                  <span className="text-accent text-5xl md:text-7xl font-black leading-none">O</span>
                  <span className="text-white/35 text-sm md:text-lg font-bold tracking-[0.15em]">rchestrate.&ensp;</span>
                  <span className="text-accent text-5xl md:text-7xl font-black leading-none">N</span>
                  <span className="text-white/35 text-sm md:text-lg font-bold tracking-[0.15em]">avigate.&ensp;</span>
                  <span className="text-accent text-5xl md:text-7xl font-black leading-none">T</span>
                  <span className="text-white/35 text-sm md:text-lg font-bold tracking-[0.15em]">hreshold.</span>
                </div>
                <p className="text-lg text-white/55 max-w-2xl leading-relaxed">{t.about.intro}</p>
              </motion.div>

              {/* Philosophy panels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-10">
                {([
                  { letter: 'O', word: 'rchestrate', key: 'orchestrate' as const },
                  { letter: 'N', word: 'avigate',    key: 'navigate'    as const },
                  { letter: 'T', word: 'hreshold',   key: 'threshold'   as const },
                ] as const).map(({ letter, word, key }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col gap-4"
                  >
                    <div className="flex items-baseline font-display uppercase">
                      <span className="text-accent text-4xl font-black leading-none">{letter}</span>
                      <span className="text-white/25 text-xs font-bold tracking-[0.15em] ml-1">{word}</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent/60">{t.about[key].zh}</p>
                    <p className="text-white/50 text-base leading-relaxed flex-1">{t.about[key].desc}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* 聯絡我們 */}
          <section id="contact" className="py-28 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-black uppercase tracking-widest text-accent mb-6">
                {lang === 'zh' ? '聯絡我們' : 'Contact'}
              </p>
              <h3
                className="font-display font-bold tracking-tighter mb-8"
                style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: '0.95' }}
              >
                {t.cta.title}
              </h3>
              <a
                href="mailto:info@omninexustech.com"
                className="inline-flex items-center gap-2 px-12 py-5 bg-accent text-black font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
              >
                {t.cta.button}
                <ChevronRight className="w-4 h-4" />
              </a>
              <p className="mt-6 text-white/25 text-xs tracking-wider">info@omninexustech.com</p>

              <div className="mt-16 border border-white/10 rounded-2xl p-8 md:p-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">{t.footer.companyName}</p>
                  <div className="space-y-1.5 text-white/40 text-sm leading-relaxed">
                    <p>{t.footer.addressLabel}{t.footer.address}</p>
                    <p>{t.footer.phoneLabel}{t.footer.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-white/35 text-sm leading-relaxed">{t.footer.desc}</p>
                </div>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Explore footer */}
          <footer className="py-8 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <img src="ONT Shield_logo.png" alt="Logo" className="h-5 w-5 rounded invert opacity-30" />
                <div className="flex gap-5">
                  <a href="#products" className="text-xs text-white/35 hover:text-white transition-colors">{lang === 'zh' ? '產品介紹' : 'Products'}</a>
                  <a href="#company"  className="text-xs text-white/35 hover:text-white transition-colors">{lang === 'zh' ? '公司資訊' : 'Company'}</a>
                  <a href="#contact"  className="text-xs text-white/35 hover:text-white transition-colors">{lang === 'zh' ? '聯絡我們' : 'Contact'}</a>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/20">{t.footer.rights}</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
