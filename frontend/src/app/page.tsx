'use client'
import { useLang } from '@/context/LanguageContext'
import PublicLayout from './(public)/layout'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const BRANDS = [
  {
    name: 'SIYI',
    tag: '雲台・圖傳・地面站', tagEn: 'Gimbals · Datalink · GCS',
    desc: 'SIYI 專注於無人機影像傳輸與雲台系統，提供高穩定性的 FPV 圖傳、多軸雲台及地面控制站，廣泛應用於航拍、巡檢與國防領域。',
    descEn: 'SIYI specializes in drone imaging and gimbal systems, offering high-stability FPV datalinks, multi-axis gimbals, and ground control stations for aerial photography, inspection, and defense.',
    accent: '#FF7710',
    logo: 'SIYI',
    href: '/products#siyi',
    products:   ['A8 mini 雲台', 'ZR30 180X 變焦雲台', 'ZT30 四合一光電吊艙', 'HM30 / MK15 圖傳地面站'],
    productsEn: ['A8 mini Gimbal', 'ZR30 180X Zoom Gimbal', 'ZT30 Quad-Sensor Pod', 'HM30 / MK15 Datalink & GCS'],
  },
  {
    name: 'ReeBot',
    tag: '工業無人機', tagEn: 'Industrial UAV',
    desc: 'ReeBot 打造專業工業級無人機，具備高酬載、長續航與惡劣環境適應能力，適合能源巡檢、測繪、農業及緊急救援等多元場景。',
    descEn: 'ReeBot builds professional industrial UAVs with high payload, long endurance, and all-weather capability for energy inspection, surveying, agriculture, and emergency response.',
    accent: '#3B82F6',
    logo: 'RB',
    href: '/products#drone',
    products:   ['UniDrone E900 · 56 分鐘續航', '2.1 kg 酬載 · 35 km 傳輸', 'RTK 精準定位 · AI 追蹤', 'LiDAR 全向避障'],
    productsEn: ['UniDrone E900 · 56-min endurance', '2.1 kg payload · 35 km range', 'RTK precision · AI tracking', 'LiDAR omnidirectional avoidance'],
  },
  {
    name: 'Heishatech',
    tag: '車頂自動機庫', tagEn: 'Vehicle Rooftop Dock',
    desc: 'Heishatech（HEISHA）專業車頂自動機庫解決方案，全自動降落、充電、一鍵起降，實現無人值守車載巡邏部署。',
    descEn: 'Heishatech (HEISHA) provides professional vehicle-mounted drone dock solutions with fully automatic landing, charging, and one-click takeoff for unmanned vehicle patrol.',
    accent: '#22C55E',
    logo: 'HST',
    href: '/products#dock',
    products:   ['DCap Lite · 輕量車頂機庫', 'DCap · 標準款 IP55 防護', 'DCap Pro · 支援 DJI M30', '32 分鐘快速充電'],
    productsEn: ['DCap Lite · Lightweight vehicle dock', 'DCap · Standard IP55', 'DCap Pro · DJI M30 support', '32-min fast charging'],
  },
]

const USECASES = [
  {
    title: '能源基礎設施巡檢', titleEn: 'Energy Infrastructure Inspection',
    desc: '電塔、管線、風機定期自動巡檢，降低人力成本與安全風險。',
    descEn: 'Automated inspection of power towers, pipelines, and turbines, reducing labor costs and safety risks.',
  },
  {
    title: '安防與邊境監控', titleEn: 'Security & Border Surveillance',
    desc: '結合機庫 24/7 自動起降，實現大範圍持續監控覆蓋。',
    descEn: 'Integrated with auto-docks for 24/7 auto launch, enabling large-scale continuous monitoring.',
  },
  {
    title: '測繪與地理資訊', titleEn: 'Surveying & Geoinformatics',
    desc: '高精度航測搭配 SIYI 圖傳，快速產出正射影像與點雲數據。',
    descEn: 'High-precision aerial survey with SIYI datalink for rapid orthomosaic and point cloud output.',
  },
  {
    title: '農業與環境監測', titleEn: 'Agriculture & Environmental Monitoring',
    desc: '精準噴灑、作物生長分析與環境數據採集。',
    descEn: 'Precision spraying, crop growth analysis, and environmental data collection.',
  },
]

export default function HomePage() {
  const { lang } = useLang()
  const t = (zh: string, en: string) => lang === 'zh' ? zh : en

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-28 px-6">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-ont-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-ont-orange/10 border border-ont-orange/20 text-ont-orange text-xs font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ont-orange animate-pulse" />
            {t('無人機系統整合代理商', 'Drone System Integration Agent')}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            {t('專業無人機解決方案', 'Professional Drone Solutions')}<br />
            <span className="text-ont-orange">{t('一站式代理服務', 'One-Stop Agent Service')}</span>
          </h1>

          <p className="text-ont-text-secondary text-base sm:text-lg leading-relaxed mb-9 max-w-xl mx-auto">
            {t(
              '永誠發科技代理 SIYI、ReeBot、Heishatech 三大品牌，提供無人機本體、雲台圖傳系統及全自動機庫的完整採購與技術支援服務。',
              'Omni Nexus Tech represents SIYI, ReeBot, and Heishatech, providing complete procurement and technical support for UAV systems, gimbal datalinks, and automated vehicle docks.',
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#brands"
              className="flex items-center gap-2 bg-ont-orange hover:bg-ont-orange-dim text-white font-medium px-6 py-2.5 rounded transition-colors duration-150"
            >
              {t('瀏覽代理品牌', 'Browse Brands')}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 border border-ont-border text-ont-text-secondary hover:border-ont-orange hover:text-ont-orange px-6 py-2.5 rounded transition-all duration-150 text-sm font-medium"
            >
              {t('詢價 / 聯絡我們', 'Inquire / Contact Us')}
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* Brand showcase */}
      <section id="brands" className="max-w-6xl mx-auto px-6 py-20">
        <SectionLabel>{t('代理品牌', 'Our Brands')}</SectionLabel>
        <h2 className="text-white font-semibold text-2xl mb-10">{t('我們代理的產品線', 'Product Lines We Represent')}</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {BRANDS.map(({ name, tag, tagEn, desc, descEn, accent, logo, href, products, productsEn }) => (
            <div
              key={name}
              className="ont-card p-6 flex flex-col gap-4 hover:border-ont-orange/30 transition-colors duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: accent + '22', color: accent }}
              >
                {logo}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-lg">{name}</h3>
                  <span
                    className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: accent + '18', color: accent }}
                  >
                    {lang === 'zh' ? tag : tagEn}
                  </span>
                </div>
                <p className="text-ont-text-secondary text-sm leading-relaxed">{lang === 'zh' ? desc : descEn}</p>
              </div>

              <ul className="space-y-1">
                {(lang === 'zh' ? products : productsEn).map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-ont-text-dim">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="mt-auto flex items-center gap-1.5 text-xs text-ont-text-dim group-hover:text-ont-orange transition-colors self-start"
              >
                <ExternalLink size={12} />
                {t('查看全部產品規格', 'View Full Specifications')}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Use cases */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionLabel>{t('應用場景', 'Use Cases')}</SectionLabel>
        <h2 className="text-white font-semibold text-2xl mb-10">{t('適用產業與場景', 'Industries & Applications')}</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {USECASES.map(({ title, titleEn, desc, descEn }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-lg border border-ont-border bg-ont-card hover:border-ont-orange/30 transition-colors"
            >
              <span className="w-1 shrink-0 rounded-full bg-ont-orange mt-1" />
              <div>
                <h3 className="text-white font-medium text-sm mb-1">{lang === 'zh' ? title : titleEn}</h3>
                <p className="text-ont-text-secondary text-xs leading-relaxed">{lang === 'zh' ? desc : descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="ont-card p-8 sm:p-12 text-center">
          <SectionLabel>{t('聯絡我們', 'Contact Us')}</SectionLabel>
          <h2 className="text-white font-semibold text-2xl mb-3">{t('採購諮詢 / 技術詢價', 'Procurement & Technical Inquiry')}</h2>
          <p className="text-ont-text-secondary text-sm mb-10 max-w-md mx-auto">
            {t(
              '需要 SIYI、ReeBot 或 Heishatech 產品報價、技術規格或整合建議，歡迎來電或來信，我們將安排專人為您服務。',
              "Need a quote, technical specs, or integration advice for SIYI, ReeBot, or Heishatech? Contact us and we'll arrange a dedicated representative.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-ont-text-dim text-xs uppercase tracking-widest mb-1.5">{t('電話', 'Phone')}</p>
              <a href="tel:0227588857" className="text-white font-mono text-2xl hover:text-ont-orange transition-colors">
                02-27588857
              </a>
            </div>
            <div className="hidden sm:block h-12 w-px bg-ont-border" />
            <div className="text-center">
              <p className="text-ont-text-dim text-xs uppercase tracking-widest mb-1.5">{t('服務時間', 'Business Hours')}</p>
              <p className="text-white text-sm">{t('週一至週五 09:00 – 17:00', 'Mon–Fri 09:00 – 17:00')}</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-ont-border to-transparent" />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-ont-orange text-xs uppercase tracking-widest font-medium mb-2">{children}</p>
  )
}
