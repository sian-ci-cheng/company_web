import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Shield, Zap, ChevronRight } from "lucide-react";
import { useState } from "react";

const t = {
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
};

export default function App() {
  const [page, setPage] = useState<'home' | 'explore'>('home');
  const [btnMouse, setBtnMouse] = useState<{ x: number; y: number } | null>(null);

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
              <img src="uav_Dock.png" alt="UAV Dock" className="w-full h-full object-cover opacity-50 grayscale-[0.3]" />
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
                className="mb-6"
                style={{
                  fontFamily: '"Youth", sans-serif',
                  fontSize: '110px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  color: 'rgb(255, 255, 255)',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.hero.title1}<br />
                {t.hero.title2}
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
              <div>
                <p className="text-white font-bold text-sm mb-2">{t.footer.companyName}</p>
                <p className="text-white/30 text-xs leading-relaxed">
                  Copyright © 2026 Manna Air Delivery.<br />All rights reserved.
                </p>
              </div>

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
                { href: '#products', label: 'Products' },
                { href: '#company',  label: 'Company' },
                { href: '#contact',  label: 'Contact' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>
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
                  Products
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
                        Learn More
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
                Contact Us
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
                  <a href="#products" className="text-xs text-white/35 hover:text-white transition-colors">Products</a>
                  <a href="#company"  className="text-xs text-white/35 hover:text-white transition-colors">Company</a>
                  <a href="#contact"  className="text-xs text-white/35 hover:text-white transition-colors">Contact</a>
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
