"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LINKS = ["Home", "Projects", "Skills", "About", "Contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("Home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            M.HARIS<span className="text-[#c8a97e]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 relative group ${
                  active === link ? "text-[#c8a97e]" : "text-white/40 hover:text-white"
                }`}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c8a97e] transition-all duration-300 ${active === link ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            ))}
          </nav>

          <a
            href="/haris cv2026.pdf"
            className="hidden md:block px-6 py-2.5 border border-[#c8a97e]/40 text-[#c8a97e] text-[10px] tracking-widest uppercase hover:bg-[#c8a97e] hover:text-black transition-all duration-500"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="w-6 h-[1px] bg-white block" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-[1px] bg-white block" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="w-6 h-[1px] bg-white block" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black tracking-tighter text-white hover:text-[#c8a97e] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}