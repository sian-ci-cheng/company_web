'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'

const SUBNAV = [
  {
    brand: 'SIYI', color: '#FF7710',
    items: [
      { zh: '雲台', en: 'Gimbals', href: '/products#siyi-gimbals' },
      { zh: '圖傳', en: 'Datalink', href: '/products#siyi-links' },
      { zh: '配件', en: 'Accessories', href: '/products#siyi-accessories' },
    ],
  },
  {
    brand: 'ReeBot', color: '#3B82F6',
    items: [{ zh: '無人機', en: 'Drone', href: '/products#drone' }],
  },
  {
    brand: 'Heishatech', color: '#22C55E',
    items: [{ zh: '機庫', en: 'Dock', href: '/products#dock' }],
  },
  {
    brand: 'GCS', color: '#A855F7',
    items: [{ zh: '地面站', en: 'GCS', href: '/gcs' }],
  },
]

export default function NavBar() {
  const { lang, toggle } = useLang()

  return (
    <header className="sticky top-0 z-40 bg-ont-black/95 backdrop-blur-sm">
      {/* Main nav */}
      <div className="border-b border-ont-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/ont/logo.png"
              alt="ONT"
              width={32}
              height={32}
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-white font-semibold text-sm">
              {lang === 'zh' ? '永誠發科技' : 'Omni Nexus Tech'}
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/#about" className="text-ont-text-secondary hover:text-white text-sm transition-colors">
              {lang === 'zh' ? '關於我們' : 'About'}
            </Link>
            <Link href="/products" className="text-ont-text-secondary hover:text-white text-sm transition-colors">
              {lang === 'zh' ? '產品總覽' : 'Products'}
            </Link>
            <Link href="/#contact" className="text-ont-text-secondary hover:text-white text-sm transition-colors">
              {lang === 'zh' ? '聯絡我們' : 'Contact'}
            </Link>
          </nav>

          <button
            onClick={toggle}
            className="text-[11px] font-semibold px-3 py-1.5 rounded border border-ont-border text-ont-text-dim hover:text-white hover:border-white/20 transition-all"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>

      {/* Product sub-nav */}
      <div className="border-b border-ont-border bg-[#141414] overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-5 h-9 w-max min-w-full">
            {SUBNAV.map(({ brand, color, items }, i) => (
              <div key={brand} className="flex items-center gap-3 shrink-0">
                {i > 0 && <span className="text-ont-border text-xs select-none">|</span>}
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
                  {brand}
                </span>
                <div className="flex items-center gap-2.5">
                  {items.map(({ zh, en, href }, j) => (
                    <span key={href + zh} className="flex items-center gap-2.5">
                      {j > 0 && <span className="text-ont-border text-[10px] select-none">·</span>}
                      <Link
                        href={href}
                        className="text-[11px] text-ont-text-dim hover:text-white transition-colors whitespace-nowrap"
                      >
                        {lang === 'zh' ? zh : en}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
