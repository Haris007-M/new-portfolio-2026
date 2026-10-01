"use client"
import React, { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const PROJECTS = [
  {
    id: 1,
    title: "Confiance Capital Markets",
    subtitle: "Financial Website",
    description:
      "Modern financial markets website with a premium trading-focused interface and responsive design.",
    color: "#c8a97e",
    liveLink: "https://confiance-capital-markets.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "ACCAM FX",
    subtitle: "Forex Website",
    description:
      "Responsive forex trading website with a clean financial interface and modern visual presentation.",
    color: "#4f46e5",
    liveLink: "https://demo-accamfx.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 3,
    title: "BlueVox",
    subtitle: "Trading Platform",
    description:
      "Modern trading website designed around a professional financial brand identity.",
    color: "#2563eb",
    liveLink: "https://copy-bluevox.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "STW Markets",
    subtitle: "Forex Website",
    description:
      "Professional financial website with a responsive layout and trading-focused user experience.",
    color: "#10b981",
    liveLink: "https://demo-stw-markets.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Framer Motion"],
  },
  {
    id: 5,
    title: "Smart Markets FX",
    subtitle: "Trading Website",
    description:
      "Modern forex website with responsive sections and a polished financial design.",
    color: "#ec4899",
    liveLink: "https://smart-markets-fx.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    title: "FXGO",
    subtitle: "Forex Platform",
    description:
      "Modern forex trading website with a clean and professional user interface.",
    color: "#f59e0b",
    liveLink: "https://fxgo-beta.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 7,
    title: "MFX Trades",
    subtitle: "Trading Platform",
    description:
      "Professional trading website focused on presenting financial services in a modern interface.",
    color: "#06b6d4",
    liveLink: "https://www.mfxtrades.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 8,
    title: "VexaMarkets",
    subtitle: "Broker Website",
    description:
      "Premium broker website with a modern trading interface and responsive experience.",
    color: "#c4aa71",
    liveLink: "https://www.vexamarkets.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 9,
    title: "Meraj FX Markets",
    subtitle: "Forex Website",
    description:
      "Modern forex broker website with a professional financial visual system.",
    color: "#8b5cf6",
    liveLink: "https://meraj-fx-markets.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 10,
    title: "Majesty Forex",
    subtitle: "Forex Website",
    description:
      "Responsive forex website built around a clean and premium trading experience.",
    color: "#e11d48",
    liveLink: "https://majestyforex.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: 11,
    title: "MYGXG Trading",
    subtitle: "Trading Platform",
    description:
      "Professional trading platform website with a modern financial design.",
    color: "#14b8a6",
    liveLink: "https://mygxg-trading.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 12,
    title: "Aadinath Capital",
    subtitle: "Capital Markets",
    description:
      "Modern capital markets website with responsive layouts and professional presentation.",
    color: "#f97316",
    liveLink: "https://aadinath-capital.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 13,
    title: "Rumza FX Markets",
    subtitle: "Forex Website",
    description:
      "Modern forex website with a responsive interface and financial brand presentation.",
    color: "#0ea5e9",
    liveLink: "https://rumza-fx-markets.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 14,
    title: "GXG Trading",
    subtitle: "Trading Platform",
    description:
      "Professional trading website designed with a modern and responsive user experience.",
    color: "#22c55e",
    liveLink: "https://gxg-trading.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 15,
    title: "MGlobal",
    subtitle: "Financial Website",
    description:
      "Premium financial website with a strong visual identity and responsive interface.",
    color: "#d09304",
    liveLink: "https://m-global.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Framer Motion"],
  },
  {
    id: 16,
    title: "DoTradeFX",
    subtitle: "Forex Platform",
    description:
      "Modern forex trading platform website with a professional user experience.",
    color: "#6366f1",
    liveLink: "https://www.dotradefx.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 17,
    title: "Quantix Markets",
    subtitle: "Trading Website",
    description:
      "Modern financial markets website with a premium trading-focused design.",
    color: "#a855f7",
    liveLink: "https://quantix-markets.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 18,
    title: "TradesFX Pro",
    subtitle: "Forex Website",
    description:
      "Professional forex website with a clean and responsive financial interface.",
    color: "#ef4444",
    liveLink: "https://tradesfxpro.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 19,
    title: "ItsAmir",
    subtitle: "Personal Website",
    description:
      "Modern personal website with a clean visual presentation and responsive layout.",
    color: "#f43f5e",
    liveLink: "https://itsamir.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 20,
    title: "Nexit Limited",
    subtitle: "Corporate Website",
    description:
      "Corporate website with a modern visual identity and responsive presentation.",
    color: "#d946ef",
    liveLink: "https://nexit-limited.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 21,
    title: "Marketing",
    subtitle: "Digital Marketing",
    description:
      "Modern marketing website designed for presenting digital services and solutions.",
    color: "#84cc16",
    liveLink: "https://marketing-six-puce.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Framer Motion"],
  },
  {
    id: 22,
    title: "London Wales",
    subtitle: "Corporate Website",
    description:
      "Responsive business website with a clean and professional presentation.",
    color: "#0f766e",
    liveLink: "https://london-wales.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 23,
    title: "New Template 03",
    subtitle: "Website Template",
    description:
      "Modern responsive website template focused on visual presentation and usability.",
    color: "#0891b2",
    liveLink: "https://new-template-03.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 24,
    title: "GXGFX Trading",
    subtitle: "Trading Website",
    description:
      "Professional trading website with a modern financial interface.",
    color: "#16a34a",
    liveLink: "https://gxgfx-trading.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 25,
    title: "BePrime FX",
    subtitle: "Forex Platform",
    description:
      "Modern forex broker website with a premium responsive interface.",
    color: "#7c3aed",
    liveLink: "https://beprime-fx.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 26,
    title: "CopyVolNex",
    subtitle: "Trading Platform",
    description:
      "Modern trading platform website with a responsive financial interface.",
    color: "#0284c7",
    liveLink: "https://copyvolnex.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 27,
    title: "Nexaura Lab",
    subtitle: "Software Agency",
    description:
      "Software and IT solutions website presenting digital products, services and business solutions.",
    color: "#02b0aa",
    liveLink: "https://nexauralab.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: 28,
    title: "BePrime FX 31AM",
    subtitle: "Forex Website",
    description:
      "Alternative forex website concept with a modern responsive financial design.",
    color: "#9333ea",
    liveLink: "https://beprime-fx-31am.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 29,
    title: "GXG Pro FX",
    subtitle: "Forex Platform",
    description:
      "Professional forex trading website with a modern and responsive interface.",
    color: "#059669",
    liveLink: "https://gxgprofx.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 30,
    title: "Prime Security",
    subtitle: "Security Company",
    description:
      "Professional security company website with a strong corporate visual identity.",
    color: "#7c3aed",
    liveLink: "https://www.primesecuritys.co.uk/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 31,
    title: "FFA Champions",
    subtitle: "Sports Website",
    description:
      "Modern sports-focused website with responsive layouts and engaging visual sections.",
    color: "#eab308",
    liveLink: "https://www.ffachampions.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: 32,
    title: "New Template 04",
    subtitle: "Website Template",
    description:
      "Responsive modern website template with a clean visual design.",
    color: "#f97316",
    liveLink: "https://new-template-04.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 33,
    title: "May Template",
    subtitle: "Website Template",
    description:
      "Modern website template built with responsive layouts and polished interactions.",
    color: "#db2777",
    liveLink: "https://15-may-new-template.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 34,
    title: "GXGFX Trading",
    subtitle: "Trading Platform",
    description:
      "Professional trading website with a responsive financial interface.",
    color: "#10b981",
    liveLink: "https://www.gxgfxtrading.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 35,
    title: "Fizmo",
    subtitle: "Website Template",
    description:
      "Modern template focused on clean design, responsive layouts and smooth interactions.",
    color: "#6366f1",
    liveLink: "https://fizmo-template.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: 36,
    title: "Tiger Capital FX",
    subtitle: "Forex Website",
    description:
      "Modern forex website designed with a professional financial visual language.",
    color: "#dc2626",
    liveLink: "https://tiger-capital-fx.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 37,
    title: "New Template 01",
    subtitle: "Website Template",
    description:
      "Responsive website template with a clean and modern interface.",
    color: "#0284c7",
    liveLink: "https://new-template-01.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 38,
    title: "Auro Markets FX",
    subtitle: "Forex Platform",
    description:
      "Professional forex website with a premium responsive design.",
    color: "#d97706",
    liveLink: "https://auromarketsfx.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 39,
    title: "Template 02",
    subtitle: "Website Template",
    description:
      "Modern responsive template designed for professional digital experiences.",
    color: "#8b5cf6",
    liveLink: "https://template-02-three.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 40,
    title: "Pipsio Global",
    subtitle: "Forex Website",
    description:
      "Modern forex trading website with a professional financial presentation.",
    color: "#0ea5e9",
    liveLink: "https://www.pipsioglobal.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 41,
    title: "Auxion FX",
    subtitle: "Forex Platform",
    description:
      "Modern forex website with responsive layouts and financial branding.",
    color: "#14b8a6",
    liveLink: "https://auxion-fx.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 42,
    title: "Bravo FX Markets",
    subtitle: "Forex Website",
    description:
      "Professional forex website with a clean and responsive interface.",
    color: "#f43f5e",
    liveLink: "https://bravofxmarkets.com/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "React", "Framer Motion"],
  },
  {
    id: 43,
    title: "New Template",
    subtitle: "Website Template",
    description:
      "Modern website template with a responsive layout and polished visual presentation.",
    color: "#84cc16",
    liveLink: "https://newtemplate-pied.vercel.app/",
    repoLink: "#",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
];

function getWebsiteScreenshot(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url`;
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const total = PROJECTS.length
  const p = PROJECTS[current]

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1))

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [current, total])

  // Wheel navigation
  const sectionRef = useRef<HTMLDivElement>(null)
  const wheelCooldown = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5
      if (!inView) return

      if (wheelCooldown.current) {
        e.preventDefault()
        return
      }

      if (e.deltaY > 30) {
        if (current < total - 1) {
          e.preventDefault()
          wheelCooldown.current = true
          setCurrent((c) => Math.min(total - 1, c + 1))
          setTimeout(() => { wheelCooldown.current = false }, 800)
        }
      } else if (e.deltaY < -30) {
        if (current > 0) {
          e.preventDefault()
          wheelCooldown.current = true
          setCurrent((c) => Math.max(0, c - 1))
          setTimeout(() => { wheelCooldown.current = false }, 800)
        }
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [current, total])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative  py-16 lg:py-0 flex flex-col justify-center bg-[#030303] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#0f0f0f,#030303)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 mb-6 md:mb-8">
        <p className="text-[9px] tracking-[0.5em] text-[#c8a97e]/55 uppercase mb-2">Featured Work</p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Projects
        </h2>
      </div>

      {/* Main card area */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-6 px-4 sm:px-10 md:px-16">

        {/* Prev button */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous Project"
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all bg-[#030303]/80 z-20"
        >
          <ChevronLeft size={18} className="text-white/60" />
        </button>

        {/* Card container */}
        <div className="flex-1 relative overflow-hidden min-h-[480px] sm:min-h-[440px] md:min-h-[480px] lg:h-[58vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex flex-col lg:flex-row overflow-hidden bg-[#030303] rounded-sm"
              style={{ border: `1px solid ${p.color}30` }}
            >
              {/* Browser Preview Frame — Top/Left half */}
              <div className="relative lg:w-1/2 h-56 sm:h-64 lg:h-full bg-[#080808] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#050505] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="text-[9px] tracking-wider text-white/30 truncate max-w-[200px] sm:max-w-xs px-2 font-mono">
                    {p.liveLink}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screenshot view */}
                <div className="relative flex-1 overflow-hidden group">
                  <img
                    src={getWebsiteScreenshot(p.liveLink)}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Color accent bar */}
                <div className="absolute top-0 left-0 bottom-0 w-[2px] hidden lg:block" style={{ backgroundColor: p.color }} />
              </div>

              {/* Info — Bottom/Right half */}
              <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-[#030303] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] tracking-[0.45em] text-white/25 uppercase font-mono">{p.year}</span>
                    <div className="w-5 h-px bg-white/10" />
                    <span className="text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: p.color }}>{p.subtitle}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {p.title}
                  </h3>

                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[8px] tracking-widest uppercase px-2 py-1 text-white/35" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[9px] tracking-widest uppercase text-black px-5 py-2.5 font-bold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: p.color }}
                  >
                    <ExternalLink size={10} /> Live Demo
                  </a>
                  <a
                    href={p.repoLink}
                    className="flex items-center gap-2 text-[9px] tracking-widest uppercase text-white/50 border border-white/10 px-5 py-2.5 hover:border-white/30 hover:text-white transition-all"
                  >
                    <Github size={10} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next Project"
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all bg-[#030303]/80 z-20"
        >
          <ChevronRight size={18} className="text-white/60" />
        </button>
      </div>

      {/* Dots + counter */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-4 px-6 sm:px-10 md:px-16 mt-6 md:mt-8">
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
          {PROJECTS.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-px rounded-full transition-all duration-300 cursor-pointer flex-shrink-0"
              style={{
                width: i === current ? 36 : 12,
                backgroundColor: i === current ? proj.color : "rgba(255,255,255,0.2)",
                opacity: i === current ? 1 : 0.4,
              }}
            />
          ))}
        </div>
        <span className="text-[9px] tracking-[0.4em] text-white/15 uppercase ml-auto sm:ml-2">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        {/* Scroll hint */}
        <span className="ml-auto text-[9px] tracking-widest text-white/15 uppercase hidden lg:block">
          ↓ scroll · → arrow keys
        </span>
      </div>
    </section>
  )
}