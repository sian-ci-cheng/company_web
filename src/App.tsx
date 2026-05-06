import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Shield, Zap, ChevronRight } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    nav: {
      explore: "Explore",
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
        title: "ONT GCS →",
        desc: "Integrated mission control systems for real-time aerial intelligence and emergency cargo deployment.",
        feature1: "Smart Monitoring",
        feature2: "Remote Operation"
      }
    },
    cta: {
      title: "Ready to fly?",
      button: "Try it now"
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
      explore: "探索",
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
        title: "ONT GCS →",
        desc: "整合任務控制系統，實現即時空中情報與緊急貨物部署。",
        feature1: "智慧監控",
        feature2: "遠端操作"
      }
    },
    cta: {
      title: "準備好啟航了嗎？",
      button: "立即嘗試"
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

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const t = translations[lang];

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-black">
      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col sm:flex-row items-center gap-3 pointer-events-auto">
        <a
          href="https://www.youtube.com/watch?v=z6fpbOJErRM&list=PLHcL6Rzx6ICrODY_vDKCB-owQjQvsMZAG"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors group flex items-center gap-2 shadow-xl shadow-black/60"
        >
          {t.hero.watchDemo}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <button className="px-8 py-4 bg-black/70 border border-white/25 backdrop-blur-sm hover:bg-white/10 font-bold text-xs uppercase tracking-widest rounded-full transition-colors shadow-xl shadow-black/60 text-white">
          {t.hero.solutions}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
          >
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
          <p className="text-base md:text-lg text-white/70 max-w-sm leading-relaxed">
            {t.hero.desc}
          </p>
        </motion.div>
      </section>

      {/* Explore Section */}
      <section id="explore">
        {/* Explore Hero — same cinematic feel as main hero */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-35 grayscale">
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.85)_100%)]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">{t.nav.explore}</p>
            <h2 className="heading-xl">{t.explore.intro}</h2>
          </motion.div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="px-6 md:px-12 py-16 space-y-5 max-w-7xl mx-auto w-full">
          {([
            { letter: 'O', word: 'rchestrate', key: 'orchestrate' as const, image: 'ON-Dock.png',   imageAlt: 'ON-Dock',        bg: '#4ADE80' },
            { letter: 'N', word: 'avigate',    key: 'navigate'    as const, image: 'gcs.png',       imageAlt: 'ONT GCS',        bg: '#FACC15' },
            { letter: 'T', word: 'hreshold',   key: 'threshold'   as const, image: 'AIimage.png',   imageAlt: 'AI Recognition', bg: '#F87171' },
          ] as const).map(({ letter, word, key, image, imageAlt, bg }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-[2rem] overflow-hidden text-black flex flex-col lg:flex-row min-h-[460px]"
              style={{ backgroundColor: bg }}
            >
              {/* Left: info panel */}
              <div className="shrink-0 w-full lg:w-52 p-8 flex flex-col bg-black/[0.07]">
                <div className="mb-6">
                  <div className="flex items-baseline font-display uppercase mb-2">
                    <span className="text-5xl font-black leading-none">{letter}</span>
                    <span className="text-black/35 text-xs font-bold tracking-[0.15em]">{word}</span>
                  </div>
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-sm">
                    {t.explore[key].zh}
                  </span>
                </div>
                <div className="mt-auto">
                  {t.explore[key].features.map((f, fi) => (
                    <div key={fi} className="border-t border-black/10 py-3">
                      <span className="text-xs text-black/65 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center: product image */}
              <div className="relative flex-1 min-h-[260px] lg:min-h-0">
                <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Right: title + desc + CTA */}
              <div className="shrink-0 w-full lg:w-72 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-display font-black leading-none tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                  >
                    {t.explore[key].product}
                  </h3>
                  <p className="text-black/55 text-sm leading-relaxed">
                    {t.explore[key].productDesc}
                  </p>
                </div>
                <button className="self-start mt-8 px-7 py-3.5 bg-black text-white font-bold text-[11px] uppercase tracking-widest rounded-full hover:bg-black/75 transition-colors">
                  {lang === 'en' ? 'More details' : '了解更多'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mobile Hubs Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#111] group cursor-pointer border border-white/5 min-h-[500px]"
          >
            <img 
              src="ON-Dock.png" 
              alt="ON-Dock Charging Station" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="relative z-10 p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="font-display text-5xl font-bold mb-4">{t.cards.hubs.title}</h2>
              <p className="text-lg text-white/70 mb-8 max-w-xs">
                {t.cards.hubs.desc}
              </p>
              
              <ul className="space-y-3 text-sm font-semibold tracking-wide uppercase text-white">
                <li className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-accent" /> {t.cards.hubs.feature1}
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-accent" /> {t.cards.hubs.feature2}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Rescue Ready Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#111] group cursor-pointer border border-white/5 min-h-[500px]"
          >
             <img 
              src="gcs.png" 
              alt="Ground Control System" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="relative z-10 p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-display text-5xl font-bold mb-4">{t.cards.rescue.title}</h2>
              <p className="text-lg text-white/70 mb-8 max-w-xs">
                {t.cards.rescue.desc}
              </p>
              
              <ul className="space-y-3 text-sm font-semibold tracking-wide uppercase text-white">
                <li className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-white/60" /> {t.cards.rescue.feature1}
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-white/60" /> {t.cards.rescue.feature2}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-8">{t.about.label}</p>
            <div className="flex flex-wrap items-baseline font-display uppercase mb-4">
              <span className="text-accent text-6xl md:text-8xl font-black leading-none">O</span>
              <span className="text-white/50 text-base md:text-xl font-bold tracking-[0.15em]">rchestrate.&ensp;</span>
              <span className="text-accent text-6xl md:text-8xl font-black leading-none">N</span>
              <span className="text-white/50 text-base md:text-xl font-bold tracking-[0.15em]">avigate.&ensp;</span>
              <span className="text-accent text-6xl md:text-8xl font-black leading-none">T</span>
              <span className="text-white/50 text-base md:text-xl font-bold tracking-[0.15em]">hreshold.</span>
            </div>
            <p className="text-xl md:text-2xl font-display font-bold text-white/20 tracking-wider mb-12">
              {t.about.subtitle}
            </p>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
              {t.about.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              { letter: 'O', word: 'rchestrate', key: 'orchestrate' as const },
              { letter: 'N', word: 'avigate',    key: 'navigate'    as const },
              { letter: 'T', word: 'hreshold',   key: 'threshold'   as const },
            ].map(({ letter, word, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-black p-10 md:p-12 flex flex-col gap-6"
              >
                <div className="flex items-baseline gap-0 font-display uppercase">
                  <span className="text-accent text-5xl font-black leading-none">{letter}</span>
                  <span className="text-white/40 text-sm font-bold tracking-[0.15em]">{word}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent/60">
                  {t.about[key].zh}
                </p>
                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {t.about[key].desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center border-t border-white/5">
        <h3 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tighter text-balanced">
          {t.cta.title}
        </h3>
        <button className="px-16 py-8 bg-accent text-black font-bold text-xl uppercase tracking-wider rounded-full hover:scale-105 transition-transform">
          {t.cta.button}
        </button>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 text-white/40">
        {/* Nav row */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 mb-12 border-b border-white/5">
          <div className="flex flex-wrap gap-6">
            <a href="#explore" className="text-sm font-medium text-white/50 hover:text-white transition-colors">{t.nav.explore}</a>
            <a href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">{t.nav.safety}</a>
            <a href="#about" className="text-sm font-medium text-white/50 hover:text-white transition-colors">{t.nav.about}</a>
          </div>
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
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="ONT Shield_logo.png" alt="Omni Nexus Logo" className="h-8 w-8 rounded-lg invert" />
                <span className="font-display font-bold text-white tracking-widest uppercase">Omni Nexus Tech</span>
              </div>
              <div className="space-y-4 max-w-sm">
                <p className="text-white font-bold text-lg">{t.footer.companyName}</p>
                <div className="leading-relaxed">
                  <p>{t.footer.addressLabel}{t.footer.address}</p>
                  <p>{t.footer.phoneLabel}{t.footer.phone}</p>
                </div>
                <p className="text-sm opacity-60">
                  {t.footer.desc}
                </p>
              </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">{t.footer.sections.company}</h4>
            <ul className="space-y-4 text-sm mt-4">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.careers}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.feedback}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">{t.footer.sections.legal}</h4>
            <ul className="space-y-4 text-sm mt-4">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.cookies}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5 text-xs uppercase tracking-widest font-bold">
          <p>{t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
