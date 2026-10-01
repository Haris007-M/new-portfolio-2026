"use client"
import React, { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text, Environment, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

const SKILL_CATEGORIES = [
  {
    label: "Core",
    color: "#c8a97e",
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript ES2024"],
  },
  {
    label: "Styling",
    color: "#4f46e5",
    skills: ["Tailwind CSS", "CSS Modules", "Framer Motion", "GSAP"],
  },
  {
    label: "Backend",
    color: "#10b981",
    skills: ["Node.js", "Supabase", "PostgreSQL", "REST / GraphQL"],
  },
  {
    label: "3D & Visual",
    color: "#ec4899",
    skills: ["Three.js", "React Three Fiber", "WebGL", "GLSL Shaders"],
  },
  {
    label: "Tooling",
    color: "#f59e0b",
    skills: ["Git & GitHub", "Vercel / Railway", "Docker", "Turborepo"],
  },
  {
    label: "Testing",
    color: "#06b6d4",
    skills: ["Vitest", "Playwright", "React Testing Library", "Storybook"],
  },
]

const FLOATING_WORDS = [
  { word: "React", pos: [-4, 2, 0] as [number, number, number], color: "#61dafb", size: 0.28 },
  { word: "Next.js", pos: [4, 1.5, -1] as [number, number, number], color: "#fff", size: 0.24 },
  { word: "TypeScript", pos: [-3, -1.5, 1] as [number, number, number], color: "#3178c6", size: 0.22 },
  { word: "Tailwind", pos: [3.5, -1, 0.5] as [number, number, number], color: "#38bdf8", size: 0.20 },
  { word: "Three.js", pos: [0, 2.5, -2] as [number, number, number], color: "#c8a97e", size: 0.22 },
  { word: "Node.js", pos: [-4.5, 0, -1] as [number, number, number], color: "#68a063", size: 0.20 },
  { word: "Supabase", pos: [1, -2.5, 1] as [number, number, number], color: "#5a67d8", size: 0.18 },
  { word: "Framer", pos: [-1.5, 3, 0] as [number, number, number], color: "#ff4d8d", size: 0.18 },
]

function SkillWord({ word, pos, color, size }: { word: string; pos: [number, number, number]; color: string; size: number }) {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state) => {
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3 + pos[0]) * 0.1
    ref.current.position.y = pos[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + pos[2]) * 0.1
  })
  return (
    <group ref={ref} position={pos}>
      <Text fontSize={size} color={color} anchorX="center" anchorY="middle" font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2">
        {word}
      </Text>
    </group>
  )
}

function CenterOrb() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.2
  })
  return (
    <Float speed={1} floatIntensity={0.3}>
      <Sphere ref={ref} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#0a0a0a"
          emissive="#c8a97e"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.05}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-[#030303] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,169,126,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[9px] tracking-[0.5em] text-[#c8a97e]/60 uppercase mb-4">What I Work With</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            Skills &{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              Stack
            </span>
          </h2>
        </motion.div>

      

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 border border-white/6 bg-white/[0.02] group hover:border-white/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-semibold" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}