import PublicLayout from '../(public)/layout'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

// ── SIYI ─────────────────────────────────────────────────────────────────────
// First 3 specs in each array are shown as the hero-stat block on the card
const SIYI_GIMBALS = [
  {
    id: 'a2-mini',
    name: 'A2 mini',
    category: 'FPV 廣角雲台',
    image: '/images/siyi/A2mini.webp',
    badge: null,
    specs: [
      { label: '視角 FOV', value: '160°' },
      { label: '重量', value: '85 g' },
      { label: '防護等級', value: 'IP65' },
      { label: '像素', value: '200 萬' },
      { label: '雲台行程', value: '-90° ~ +25°' },
      { label: '影像輸出', value: '乙太網路' },
    ],
    desc: '單軸俯仰式 FPV 廣角雲台，160° 超廣視角，IP65 三防，乙太網路輸出，支援 S.Bus / PWM / UDP 控制，適合廣域監控與低速巡邏。',
    url: 'https://shop.siyi.biz/products/siyi-a2-mini',
  },
  {
    id: 'a8-mini',
    name: 'A8 mini',
    category: 'AI 迷你變焦雲台',
    image: '/images/siyi/A8mini.webp',
    badge: '暢銷',
    specs: [
      { label: '解析度', value: '4K 8MP' },
      { label: '重量', value: '95 g' },
      { label: '數位變焦', value: '6X' },
      { label: '感光元件', value: '1/1.7" Sony CMOS' },
      { label: '穩定軸', value: '3 軸 ±0.01°' },
      { label: '影像輸出', value: '乙太網路 / HDMI / CVBS' },
    ],
    desc: '95g 三軸雲台，搭載 Sony 1/1.7" CMOS，4K@25fps，內建 NPU 支援 AI 自動目標識別，HDMI / CVBS / 乙太網路三種輸出。',
    url: 'https://shop.siyi.biz/products/siyi-a8-mini-gimbal-camera',
  },
  {
    id: 'mt11',
    name: 'MT11',
    category: '雙光熱像雲台',
    image: '/images/siyi/MT11.webp',
    badge: null,
    specs: [
      { label: '熱像儀', value: '256 × 192' },
      { label: '可見光', value: '4K' },
      { label: '數位變焦', value: '8X' },
      { label: '穩定軸', value: '3 軸' },
      { label: '感測', value: '雙光融合' },
      { label: '協議', value: 'ArduPilot / PX4' },
    ],
    desc: '整合可見光與熱成像的雙光雲台，支援圖像融合與偽彩顯示，適合電力巡檢、消防偵察與夜間監控。',
    url: 'https://shop.siyi.biz/products/reebot-robotics-unipod-mt11-new-era-mini-four-sensor-optical-ai-pod-8k-48mp-photography-built-in-10t-computing-power-al-module-ip54-405g',
  },
  {
    id: 'zr10',
    name: 'ZR10',
    category: '變焦雲台',
    image: '/images/siyi/ZR10.jpg',
    badge: null,
    specs: [
      { label: '混合變焦', value: '30X' },
      { label: '光學變焦', value: '10X' },
      { label: '偏航旋轉', value: '320°' },
      { label: '解析度', value: '2K QHD 4MP' },
      { label: '感光元件', value: '1/2.7" CMOS' },
      { label: '穩定軸', value: '3 軸' },
    ],
    desc: '30X 混合變焦、320° 偏航旋轉，兼容 ArduPilot / PX4，適合長距離目標識別與巡檢偵察任務。',
    url: 'https://shop.siyi.biz/products/siyi-zr10-gimbal-camera',
  },
  {
    id: 'zr30',
    name: 'ZR30',
    category: '高倍變焦雲台',
    image: '/images/siyi/ZR30.webp',
    badge: '推薦',
    specs: [
      { label: '混合變焦', value: '180X' },
      { label: '光學變焦', value: '30X' },
      { label: '解析度', value: '4K 8MP' },
      { label: '感光元件', value: '1/2.7" Sony CMOS' },
      { label: '穩定軸', value: '3 軸' },
      { label: '夜視', value: 'HDR + 星光' },
    ],
    desc: '專業級 180X 混合變焦，支援 HDR 星光夜視，滿足遠距離偵察、電力線巡檢與海事監控等高要求任務。',
    url: 'https://shop.siyi.biz/products/zr30-4k-8mp-ultra-hd-180x-hybrid-30x-optical-gimbal-camera',
  },
  {
    id: 'zt6',
    name: 'ZT6',
    category: '雙光光電吊艙',
    image: '/images/siyi/ZT6.jpg',
    badge: null,
    specs: [
      { label: '熱像儀', value: '640 × 512' },
      { label: '可見光', value: '4K 8MP' },
      { label: '測溫', value: '支援' },
      { label: '數位變焦', value: '6X' },
      { label: '協議', value: 'ArduPilot / PX4' },
      { label: '穩定軸', value: '3 軸' },
    ],
    desc: '整合可見光與 640×512 熱像儀，支援溫度測量，廣泛應用於消防、電力與工業巡檢場景。',
    url: 'https://shop.siyi.biz/products/zt6-mini-optical-pod-dual-sensors-gimbal-camera',
  },
  {
    id: 'zt30',
    name: 'ZT30',
    category: '四合一光電吊艙',
    image: '/images/siyi/ZT30.jpg',
    badge: '旗艦',
    specs: [
      { label: '雷射測距', value: '1200 m' },
      { label: '混合變焦', value: '180X' },
      { label: '感測器', value: '4 合 1' },
      { label: '可見光', value: '4K 8MP' },
      { label: '熱像儀', value: '640 × 512' },
      { label: '廣角', value: '2K' },
    ],
    desc: '整合可見光 180X 變焦、640×512 熱像儀、2K 廣角及 1200m 雷射測距，四合一旗艦吊艙。',
    url: 'https://shop.siyi.biz/products/siyi-zt30',
  },
]

const SIYI_LINKS = [
  {
    id: 'hm30',
    name: 'HM30',
    category: '數位圖傳系統',
    image: '/images/siyi/HM30.webp',
    badge: null,
    specs: [
      { label: '傳輸距離', value: '30 km' },
      { label: '地面端重量', value: '132 g' },
      { label: '天空端重量', value: '74 g' },
      { label: '地面端防護', value: 'IP53' },
      { label: '天空端電壓', value: '3S – 6S LiPo' },
      { label: '協議', value: 'MAVLink / SBUS / OSD' },
    ],
    desc: '地面端 IP53 防護、PD 30W 快充，天空端 3S–6S 寬電壓，最遠 30km 傳輸，支援 MAVLink 遙測與 SBUS 控制。',
    url: 'https://shop.siyi.biz/products/siyi-hm30-digital-image-transmission',
  },
  {
    id: 'mk15',
    name: 'MK15',
    category: '迷你手持地面站',
    image: '/images/siyi/MK15.webp',
    badge: '推薦',
    specs: [
      { label: '傳輸距離', value: '15 km' },
      { label: '電池壽命', value: '12 小時' },
      { label: '螢幕', value: '5.5" 1080p' },
      { label: '亮度', value: '1000 nit 觸控' },
      { label: '圖傳', value: '1080p 60fps · 180ms' },
      { label: '認證', value: 'CE / FCC / KC' },
    ],
    desc: '整合螢幕與圖傳的一體化手持地面站，15km 傳輸、12 小時續航，適合現場快速部署與遠端巡檢操作。',
    url: 'https://shop.siyi.biz/products/siyi-mk15-enterprise',
  },
  {
    id: 'unirc7',
    name: 'UniRC7',
    category: '七通道遙控器',
    image: '/images/siyi/UniRC7.webp',
    badge: null,
    specs: [
      { label: '通道數', value: '7 ch' },
      { label: '傳輸距離', value: '10 km' },
      { label: '延遲', value: '< 30 ms' },
      { label: '頻率', value: '2.4 GHz' },
      { label: '協議', value: 'SBUS / PPM' },
      { label: '認證', value: 'CE / FCC' },
    ],
    desc: '輕量化七通道長距離遙控器，低延遲高可靠，兼容主流飛控協議，適合各類無人機快速部署場景。',
    url: 'https://shop.siyi.biz/products/siyi-unirc-7-pro-handheld-ground-station?VariantsId=10833',
  },
]

const SIYI_ACCESSORIES = [
  {
    id: 'rtk',
    name: 'RTK 定位定向模組',
    category: 'RTK 導航',
    image: '/images/siyi/RTK.png',
    badge: null,
    specs: [
      { label: '定位精度', value: '公分級 RTK' },
      { label: '重量', value: '22.8 g' },
      { label: '工作電壓', value: '4.5 ~ 5.5 V' },
      { label: '接收器', value: 'Unicore UM982' },
      { label: '磁羅盤', value: 'PNI RM3100' },
      { label: '功耗', value: '1 W' },
    ],
    desc: '採用 Unicore UM982 全系統全頻接收器與 PNI RM3100 工業磁羅盤，單模組雙天線即可取代指南針，公分級定位定向。',
    url: 'https://shop.siyi.biz/products/siyi-rtk-positioning-and-orientation-module',
  },
  {
    id: 'ai-tracking',
    name: 'AI 智能追蹤',
    category: 'AI 視覺模組',
    image: '/images/siyi/AI_Tracking.webp',
    badge: null,
    specs: [
      { label: '目標類型', value: '人 / 車 / 物體' },
      { label: '追蹤模式', value: '自動 / 框選' },
      { label: '幀率', value: '30 fps' },
      { label: '延遲', value: '< 100 ms' },
      { label: '協議', value: 'UART / HDMI' },
      { label: '部署', value: '邊緣運算' },
    ],
    desc: '邊緣 AI 視覺模組，支援人員、車輛與自訂目標自動追蹤，與 SIYI 雲台深度整合，實現一鍵鎖定追蹤。',
    url: 'https://shop.siyi.biz/products/siyi-ai-tracking-module-ii',
  },
  {
    id: 'power-module',
    name: '電源模組',
    category: '電力管理配件',
    image: '/images/siyi/power_module.jpg',
    badge: null,
    specs: [
      { label: '輸入電壓', value: '6S – 12S LiPo' },
      { label: '最大電流', value: '200 A' },
      { label: '量測精度', value: '± 1%' },
      { label: '輸出', value: '5V / 12V BEC' },
      { label: '協議', value: 'I2C / CAN' },
      { label: '防護', value: 'IP55' },
    ],
    desc: '高精度無人機電源模組，支援 6S–12S 電池，精準量測電壓電流並提供穩壓 BEC，確保飛控與任務設備穩定供電。',
    url: 'https://shop.siyi.biz/products/2s-to-14s-power-module',
  },
  {
    id: 'hall-sensor',
    name: 'Hall 電流感測器',
    category: '電力量測配件',
    image: '/images/siyi/hall_sensor.png',
    badge: null,
    specs: [
      { label: '量測範圍', value: '0 – 200 A' },
      { label: '精度', value: '± 0.5%' },
      { label: '輸入電壓', value: '3.3V / 5V' },
      { label: '輸出', value: '類比電壓' },
      { label: '協議', value: 'ADC' },
      { label: '適用', value: '多旋翼 / 固定翼' },
    ],
    desc: '霍爾效應電流感測器，無接觸量測大電流，適合無人機動力系統電流監控與飛行資料記錄應用。',
    url: 'https://shop.siyi.biz/products/hall-sensor-power-module',
  },
  {
    id: 'n7',
    name: 'N7 飛行控制器',
    category: '開源飛行控制器',
    image: '/images/siyi/N7.webp',
    badge: null,
    specs: [
      { label: '主處理器', value: 'STM32H743 480MHz' },
      { label: 'IMU', value: '雙 IMU 冗餘 + 恆溫' },
      { label: '重量', value: '57 g' },
      { label: 'UART / I2C / CAN', value: '4 / 3 / 1' },
      { label: 'PWM 輸出', value: '8 + 5 可程式' },
      { label: '工作溫度', value: '-20 ~ 65°C' },
    ],
    desc: '搭載 STM32H743 480MHz，雙 IMU 冗餘加恆溫加熱，協處理器 STM32F103，相容 PX4 / ArduPilot，適合工業級多旋翼部署。',
    url: 'https://shop.siyi.biz/products/siyi-n7-autopilot-flight-controller?VariantsId=10788',
  },
  {
    id: 'r1m',
    name: 'R1M 攝像頭',
    category: '選配攝像頭',
    image: '/images/siyi/R1M.webp',
    badge: null,
    specs: [
      { label: '感光元件', value: '1/2.9" CMOS' },
      { label: '像素', value: '200 萬' },
      { label: '影像輸出', value: '乙太網路' },
      { label: '協議', value: 'UDP 網口視訊' },
    ],
    desc: '輕量選配攝像頭，1/2.9" 200 萬像素，乙太網路輸出，可搭配 HM30 等圖傳系統使用。',
    url: 'https://shop.siyi.biz/products/r1m-recording-camera',
  },
]

// ── ReeBot ───────────────────────────────────────────────────────────────────
const REEBOT_PRODUCTS = [
  {
    id: 'e900',
    name: 'UniDrone E900',
    category: '工業四旋翼無人機',
    image: '/images/reebot/E900_Drone.webp',
    badge: '旗艦機型',
    specs: [
      { label: '最長續航', value: '56 min' },
      { label: '最大酬載', value: '2.1 kg' },
      { label: '傳輸距離', value: '35 km' },
      { label: '最大起飛重量', value: '10.5 kg' },
      { label: '最高飛行速度', value: '20 m/s' },
      { label: '槳葉', value: '22" 折疊槳' },
      { label: '防護等級', value: 'IPX4' },
      { label: '雲台搭載', value: '最多雙雲台' },
      { label: '導航', value: 'GPS / BeiDou / RTK' },
      { label: '避障', value: 'LiDAR 全向 12m' },
    ],
    desc: '專業工業級四旋翼，56 分鐘續航、2.1kg 酬載。AI 智能追蹤、RTK 精準定位、LiDAR 全向避障，可搭載雙雲台。',
    url: 'https://shop.reebot.com/products/reebot-robotics-unidrone-e900-enterprise-drone',
  },
]

// ── Heishatech ───────────────────────────────────────────────────────────────
const HEISHA_PRODUCTS = [
  {
    id: 'dcap',
    name: 'DCap',
    category: '車頂自動機庫',
    image: '/images/heisha/Dcap.webp',
    badge: null,
    specs: [
      { label: '充電時間', value: '32 min' },
      { label: '防護等級', value: 'IP55' },
      { label: '最大功率', value: '500 W' },
      { label: '重量', value: '35 kg' },
      { label: '適用機型', value: 'DJI / Skydio / Autel' },
      { label: '壽命', value: '5,000 小時' },
      { label: '連接協議', value: 'MQTT / MODBUS RTU' },
    ],
    desc: 'IP55 防護，-20~50°C 寬溫工作，支援 DJI Mavic 等主流機型自動降落充電，32 分鐘快充，無人值守車載巡邏。',
    url: 'https://heishatech.com/solutions/dcap-vehicle-mounted-drone-dock/',
  },
]

// ── Component: ProductCard ────────────────────────────────────────────────────
function ProductCard({
  name,
  category,
  badge,
  image,
  specs,
  desc,
  url,
  accent,
}: {
  name: string
  category: string
  badge: string | null
  image: string | null
  specs: { label: string; value: string }[]
  desc: string
  url: string
  accent: string
}) {
  const heroStats = specs.slice(0, 3)
  const restSpecs = specs.slice(3)

  return (
    <div className="flex flex-col bg-ont-card border border-ont-border rounded overflow-hidden hover:border-white/20 transition-colors duration-200">
      {/* Visual area */}
      <div className="h-44 relative overflow-hidden">
        {image ? (
          <>
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ont-card/70 to-transparent" />
          </>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center select-none"
            style={{ background: `linear-gradient(135deg, ${accent}0d 0%, ${accent}26 100%)` }}
          >
            <span
              className="text-6xl font-black tracking-tighter"
              style={{ color: accent, opacity: 0.18 }}
            >
              {name.replace(/\s+/g, '').slice(0, 4)}
            </span>
          </div>
        )}
        {badge && (
          <span
            className="absolute top-3 right-3 text-[10px] font-semibold px-1.5 py-0.5 rounded-sm z-10"
            style={{ backgroundColor: accent + '30', color: accent, backdropFilter: 'blur(4px)' }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category + Name */}
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: accent }}>
          {category}
        </p>
        <h3 className="text-white font-bold text-lg leading-tight mb-3">{name}</h3>

        {/* Description */}
        <p className="text-ont-text-secondary text-xs leading-relaxed mb-4">{desc}</p>

        {/* Hero stats */}
        <div className="grid grid-cols-3 gap-px bg-ont-border rounded overflow-hidden mb-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-[#1c1c1c] px-2 py-2.5 text-center">
              <p className="text-white text-xs font-bold leading-snug">{s.value}</p>
              <p className="text-ont-text-dim text-[10px] leading-snug mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Additional specs */}
        {restSpecs.length > 0 && (
          <div className="space-y-1.5 mb-4">
            {restSpecs.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-3">
                <span className="text-ont-text-dim text-[11px]">{s.label}</span>
                <span className="text-white text-[11px] font-medium text-right">{s.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-ont-border">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-ont-text-dim hover:text-white transition-colors"
          >
            <ExternalLink size={11} />
            原廠規格
          </a>
          <Link
            href="/#contact"
            className="ml-auto flex items-center gap-1 text-xs font-medium px-4 py-1.5 rounded transition-colors"
            style={{ backgroundColor: accent + '18', color: accent, border: `1px solid ${accent}35` }}
          >
            詢價
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Component: BrandSection ───────────────────────────────────────────────────
function BrandSection({
  id,
  name,
  tag,
  accent,
  desc,
  children,
}: {
  id: string
  name: string
  tag: string
  accent: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: accent }}>
          {tag}
        </p>
        <h2 className="text-white font-bold text-3xl mb-3">{name}</h2>
        <p className="text-ont-text-secondary text-sm max-w-xl">{desc}</p>
      </div>
      {children}
    </section>
  )
}

// ── Component: SubsectionLabel ────────────────────────────────────────────────
function SubsectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-ont-text-dim text-[11px] font-semibold uppercase tracking-widest pb-3 border-b border-ont-border mb-5">
      {children}
    </p>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  return (
    <PublicLayout>
      {/* Hero + tab nav */}
      <div className="border-b border-ont-border px-6 pt-12 pb-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-ont-orange text-[11px] font-semibold uppercase tracking-widest mb-3">產品總覽</p>
          <h1 className="text-white font-bold text-4xl mb-3">代理品牌產品線</h1>
          <p className="text-ont-text-secondary text-sm max-w-lg mb-10">
            SIYI · ReeBot · Heishatech 三大品牌完整產品線，含雲台圖傳、工業無人機與全自動車頂機庫。
          </p>

          {/* Tab nav */}
          <div className="flex items-center -mb-px">
            {[
              { href: '#siyi',  label: 'SIYI',      color: '#FF7710' },
              { href: '#drone', label: 'Drone',      color: '#3B82F6' },
              { href: '#dock',  label: '機庫 / Dock', color: '#22C55E' },
              { href: '/gcs',   label: 'GCS',        color: '#A855F7' },
            ].map(({ href, label, color }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium px-5 py-3 border-b-2 border-transparent hover:border-current opacity-50 hover:opacity-100 transition-all duration-150"
                style={{ color }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SIYI ── */}
      <BrandSection
        id="siyi"
        name="SIYI"
        tag="雲台・圖傳・地面站"
        accent="#FF7710"
        desc="SIYI 專注無人機影像傳輸與雲台系統，提供高穩定性 FPV 圖傳、多軸雲台及地面控制站，廣泛應用於航拍、巡檢與國防領域。"
      >
        <div className="mb-10">
          <SubsectionLabel>雲台 / 光電吊艙</SubsectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIYI_GIMBALS.map((p) => (
              <ProductCard key={p.id} {...p} accent="#FF7710" />
            ))}
          </div>
        </div>
        <div className="mb-10">
          <SubsectionLabel>圖傳 / 地面站 / 遙控</SubsectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIYI_LINKS.map((p) => (
              <ProductCard key={p.id} {...p} accent="#FF7710" />
            ))}
          </div>
        </div>
        <div>
          <SubsectionLabel>配件 / Accessories</SubsectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SIYI_ACCESSORIES.map((p) => (
              <ProductCard key={p.id} {...p} accent="#FF7710" />
            ))}
          </div>
        </div>
      </BrandSection>

      <Divider />

      {/* ── Drone ── */}
      <BrandSection
        id="drone"
        name="Drone"
        tag="工業無人機・ReeBot"
        accent="#3B82F6"
        desc="ReeBot 打造專業工業級無人機，高酬載、長續航與惡劣環境適應能力，適合能源巡檢、測繪、農業及緊急救援等場景。"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REEBOT_PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} accent="#3B82F6" />
          ))}
        </div>
      </BrandSection>

      <Divider />

      {/* ── 機庫 / Dock ── */}
      <BrandSection
        id="dock"
        name="機庫 / Dock"
        tag="車頂自動機庫・Heishatech"
        accent="#22C55E"
        desc="Heishatech（HEISHA）專業車頂自動機庫，全自動降落、充電、一鍵起降，實現無人值守車載巡邏部署。"
      >
        <div className="max-w-sm">
          {HEISHA_PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} accent="#22C55E" />
          ))}
        </div>
      </BrandSection>

      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <Divider />
        <div className="mt-14 p-10 sm:p-14 text-center border border-ont-border rounded bg-ont-card">
          <p className="text-ont-orange text-[11px] font-semibold uppercase tracking-widest mb-3">採購詢價</p>
          <h2 className="text-white font-bold text-2xl mb-3">需要報價或技術規格？</h2>
          <p className="text-ont-text-secondary text-sm mb-10 max-w-sm mx-auto">
            歡迎來電或來信，我們將安排專人協助報價、規格確認與售後支援。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="text-center">
              <p className="text-ont-text-dim text-[11px] uppercase tracking-widest mb-2">電話</p>
              <a href="tel:0227588857" className="text-white font-mono text-3xl hover:text-ont-orange transition-colors">
                02-27588857
              </a>
            </div>
            <div className="hidden sm:block h-14 w-px bg-ont-border" />
            <div className="text-center">
              <p className="text-ont-text-dim text-[11px] uppercase tracking-widest mb-2">服務時間</p>
              <p className="text-white text-base">週一至週五 09:00 – 17:00</p>
            </div>
          </div>
        </div>
      </div>

      <AdminFooter />
    </PublicLayout>
  )
}

function AdminFooter() {
  return (
    <div className="border-t border-ont-border mt-8">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end">
        <Link
          href="/login"
          className="flex items-center gap-1.5 text-[11px] text-ont-text-dim hover:text-white transition-colors"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          後台管理
        </Link>
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-ont-border to-transparent" />
    </div>
  )
}
