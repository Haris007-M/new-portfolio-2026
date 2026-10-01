"use client"
import React, { useEffect, useRef, useState, Suspense } from "react"
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Code2, Layers, Zap, Globe } from "lucide-react"
import Lenis from "lenis"
import Navbar from "@/components/Navbar"
import HeroScene from "@/components/HeroScene"
import ProjectsSection from "@/components/Projects3D"
import SkillsSection from "@/components/Skills3D"
import AboutSection from "@/components/About"
import ContactSection from "@/components/Contact"

// Expose lenis so ProjectsSection can pause/resume it
export let globalLenis: any = null

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    let prog = 0
    const interval = setInterval(() => {
      prog += Math.random() * 15
      if (prog >= 100) {
        prog = 100
        clearInterval(interval)
        setTimeout(() => setLoaded(true), 500)
      }
      setLoadProgress(Math.min(prog, 100))
    }, 120)

    // Lenis smooth scroll — store in module-level var so ProjectsSection can pause it
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    globalLenis = lenis
    ;(window as any).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      clearInterval(interval)
      lenis.destroy()
      globalLenis = null
    }
  }, [])

  return (
    <>
      {/* LOADER */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#030303] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-[10px] tracking-[0.5em] text-[#c8a97e] mb-8 font-light uppercase">Initializing</p>
              <div className="text-6xl font-black tracking-tighter text-white mb-12"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                MH
              </div>
              <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#c8a97e]"
                  style={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-white/20 text-xs mt-4 font-mono">{Math.floor(loadProgress)}%</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#030303] text-white overflow-x-hidden">
        <Navbar />

        {/* HERO */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            </Canvas>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 text-center px-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[11px] tracking-[0.6em] text-[#c8a97e] mb-6 uppercase font-light"
            >
              Frontend Engineer & Creative Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.9] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Muhammad<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                Haris
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-white/40 text-lg max-w-md mx-auto mb-12 font-light leading-relaxed"
            >
              Crafting immersive digital experiences with Next.js, React & Three.js
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#projects"
                className="px-10 py-4 bg-[#c8a97e] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors duration-500">
                View Work
              </a>
              <a href="#contact"
                className="px-10 py-4 border border-white/20 text-white font-bold text-xs tracking-widest uppercase hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all duration-500">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute left-8 bottom-1/2 translate-y-1/2 z-20 flex flex-col gap-6"
          >
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:aryan@dev.io", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                whileHover={{ x: 6 }}
                className="text-white/30 hover:text-[#c8a97e] transition-colors duration-300" title={label}>
                <Icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
            <div className="w-[1px] h-16 bg-white/10 mx-auto mt-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] tracking-[0.5em] text-white/25 uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
              <ChevronDown size={16} className="text-white/25" />
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS — Lenis is paused inside this component while hijacking scroll */}
        <ProjectsSection />

        <SkillsSection />
        <AboutSection />
        <ContactSection />

        <footer className="py-10 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-widest font-light">
            © 2025 Muhammad Haris — Built with Next.js, Three.js & Framer Motion
          </p>
        </footer>
      </div>
    </>
  )
}