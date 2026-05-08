import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronRight, Globe, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const defaultT = {
    nav: {
      explore: "Product",
      safety: "Application",
      about: "About Us",
      tryNow: "Contact US"
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

function parseCSV(csv: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const line of csv.trim().split('\n').slice(1)) {
    if (!line.trim()) continue;
    const out: string[] = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { if (inQ && line[i+1] === '"') { cur += '"'; i++; } else { inQ = !inQ; } }
      else if (c === ',' && !inQ) { out.push(cur); cur = ''; }
      else { cur += c; }
    }
    out.push(cur);
    const [key, val] = [out[0], out[1]];
    if (!key || val === undefined) continue;
    const parts = key.split('.');
    let node = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!node[parts[i]]) node[parts[i]] = {};
      node = node[parts[i]] as Record<string, unknown>;
    }
    node[parts[parts.length - 1]] = val.includes('|') ? val.split('|') : val;
  }
  return result;
}

export default function App() {
  const [page, setPage] = useState<'home' | 'explore'>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [t, setT] = useState<any>(defaultT);

  useEffect(() => {
    fetch('./content.csv')
      .then(r => r.text())
      .then(csv => setT({ ...defaultT, ...parseCSV(csv) }))
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
          {/* Fixed bottom navbar */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
            <AnimatePresence>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 -z-10" onClick={() => setMenuOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 16 }}
                    transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-3 bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ width: '300px' }}
                  >
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                      <span className="font-display font-black text-xl tracking-tighter text-white">Omni Nexus Tech</span>
                      <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors cursor-pointer">✕</button>
                    </div>
                    <nav className="py-2">
                      {[
                        { label: t.nav.explore, action: () => { goTo('explore'); setMenuOpen(false); } },
                        { label: t.nav.safety,  action: () => setMenuOpen(false) },
                        { label: t.nav.about,   action: () => { goTo('explore'); setMenuOpen(false); } },
                        { label: t.nav.tryNow,  action: () => setMenuOpen(false) },
                      ].map(({ label, action }) => (
                        <motion.button key={label} onClick={action} whileHover={{ x: 16, y: -4, scale: 1.04 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }} className="w-full text-left px-6 py-4 text-white font-semibold text-lg border-b border-white/[0.04] last:border-0 cursor-pointer origin-left">{label}</motion.button>
                      ))}
                    </nav>
                    <div className="px-6 py-5 border-t border-white/5">
                      <p className="text-white/30 text-xs">{t.footer.rights}</p>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <div className="flex items-center gap-3">
              <button onClick={() => setMenuOpen(v => !v)} className="flex items-center justify-between px-6 bg-black/70 border border-white/20 backdrop-blur-sm rounded-full shadow-xl shadow-black/60 cursor-pointer hover:border-white/40 transition-colors" style={{ width: '200px', height: '47px' }}>
                <span className="font-display font-black text-base tracking-tighter text-white">Explore</span>
                <img src="ONT Shield_logo.png" alt="ONT Logo" className="h-5 w-5 invert" />
              </button>
              <button className="flex items-center justify-center bg-black/70 border border-white/20 backdrop-blur-sm rounded-full shadow-xl shadow-black/60 cursor-pointer hover:border-white/40 transition-colors" style={{ width: '44px', height: '44px' }}>
                <svg viewBox="0 0 24 24" fill="#1877F2" className="w-full h-full"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button className="flex items-center justify-center bg-black/70 border border-white/20 backdrop-blur-sm rounded-full shadow-xl shadow-black/60 cursor-pointer hover:border-white/40 transition-colors" style={{ width: '44px', height: '44px' }}>
                <svg viewBox="0 0 24 24" className="w-full h-full"><defs><linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#8134AF"/></linearGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </button>
            </div>
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

              {/* ON-Dock */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#111] group cursor-pointer border border-white/5"
                style={{ height: 'calc(100vh - 2rem)' }}
              >
                <img src="ON-Dock.png" alt="ON-Dock" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-end">
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

              {/* ON-GCS */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#111] group cursor-pointer border border-white/5"
                style={{ height: 'calc(100vh - 2rem)' }}
              >
                <img src="ON-GCS-W.png" alt="ON-GCS" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-end">
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

          {/* Home footer — MANNA style */}
          <footer className="pt-12 pb-10 px-6 md:px-14 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

              {/* Row 1: brand + nav links */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                <span className="font-display font-black text-xl tracking-tighter text-white">ONT</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    t.footer.links.careers,
                    t.footer.links.cookies,
                    t.footer.links.privacy,
                    t.footer.links.terms,
                    t.footer.links.contact,
                    t.footer.links.feedback,
                  ].map(label => (
                    <a key={label} href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Row 2: copyright */}
              <p className="text-white/30 text-xs leading-relaxed">
                Copyright © 2026 Omni Nexus Tech.<br />All rights reserved.
              </p>
            </div>
          </footer>
        </>
      )}

      {/* ═══════════════ EXPLORE ═══════════════ */}
      {page === 'explore' && (
        <>
          {/* 產品介紹 */}
          <section id="products" className="pt-20 pb-8 px-6 md:px-12">
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
                  { letter: 'N', word: 'avigate',    key: 'navigate'    as const, image: 'ON-GCS.png',      imageAlt: 'ON-GCS',        bg: '#FACC15' },
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
                        {t.explore[key].features.map((f: string, fi: number) => (
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
                        More details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About ONT */}
          <section className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-6">
                  About ONT
                </p>
                <h2 className="font-display font-bold tracking-tighter mb-12" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.1' }}>
                  Elevating Mission-Critical<br />Autonomy
                </h2>

                <div className="space-y-8 text-white/60 leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="font-bold text-white mb-3">The Gap We Close</p>
                    <p>In the high-stakes worlds of public safety, emergency response, and industrial logistics, the drone is only as effective as the system supporting it. For too long, organizations have struggled with fragmented technology—unreliable data links, manual charging bottlenecks, and disconnected fleet management.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <p className="font-bold text-white mb-3">Built for the Front Lines</p>
                    <p>ONT was founded by a team of specialist engineers with deep roots in high-speed video processing, industrial networking, and automated control systems. We didn't just want to build better hardware; we set out to build a unified intelligence layer for the unmanned era.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="font-bold text-white mb-3">Our Mission</p>
                    <p>We empower police, fire departments, and logistics leaders to make split-second decisions with absolute confidence. Whether it's coordinating a multi-rotor swarm for search and rescue, or managing a persistent 24/7 "Drone-in-a-Box" infrastructure, our technology ensures that your fleet is always charged, always connected, and always ready.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="border-l-2 border-accent pl-6 py-4"
                  >
                    <p className="text-base font-bold text-accent mb-3">Orchestrate. Navigate. Threshold.</p>
                    <p className="text-white/70">From the docking station to the deep-tech flight controls and the security of your airspace, we provide the end-to-end stack that turns autonomous flight into an operational reality.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-4"
                  >
                    <p className="text-lg font-bold text-white">We are ONT. We build the systems that keep you ahead of the mission.</p>
                  </motion.div>
                </div>
              </motion.div>
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
                Contact
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
              <p className="text-[9px] tracking-wide font-normal text-white/20">{t.footer.rights}</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}