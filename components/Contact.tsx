
"use client"

import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Float, Torus } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react"

function SpinningTorus({
  color,
  args,
  speed,
  axis,
}: {
  color: string
  args: [number, number, number, number]
  speed: number
  axis: "x" | "y" | "z"
}) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (axis === "x") {
      ref.current.rotation.x = time * speed
    }

    if (axis === "y") {
      ref.current.rotation.y = time * speed
    }

    if (axis === "z") {
      ref.current.rotation.z = time * speed
    }

    ref.current.rotation.z += time * speed * 0.5
  })

  return (
    <Torus ref={ref} args={args}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.4}
        wireframe
      />
    </Torus>
  )
}

function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.2} />

      <pointLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#c8a97e"
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={0.8}
        color="#4f46e5"
      />

      <Stars
        radius={60}
        depth={30}
        count={2000}
        factor={2}
        fade
        speed={0.5}
      />

      <Float speed={1} floatIntensity={0.5}>
        <SpinningTorus
          color="#c8a97e"
          args={[2, 0.03, 8, 80]}
          speed={0.25}
          axis="x"
        />

        <SpinningTorus
          color="#4f46e5"
          args={[3, 0.02, 8, 80]}
          speed={-0.2}
          axis="y"
        />

        <SpinningTorus
          color="#ec4899"
          args={[1.5, 0.025, 8, 60]}
          speed={0.35}
          axis="z"
        />
      </Float>
    </>
  )
}

const SOCIALS = [
  {
    Icon: Github,
    label: "GitHub",
    handle: "View my projects",
    href: "https://github.com",
    color: "#ffffff",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    handle: "Muhammad Haris",
    href: "https://www.linkedin.com/in/muhammad-haris-8518b5156/",
    color: "#0077b5",
  },
  {
    Icon: Mail,
    label: "Email",
    handle: "Let's work together",
    href: "mailto:muhammad.haris@gmail.com",
    color: "#c8a97e",
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(200,169,126,0.04),transparent)]" />

      {/* 3D Background Canvas */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <ContactScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[9px] tracking-[0.5em] text-[#c8a97e]/60 uppercase mb-4">
            Let's Build Together
          </p>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get In{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              Touch
            </span>
          </h2>

          <p className="text-white/30 text-base max-w-lg mx-auto">
            Open to new opportunities, freelance projects, and interesting
            conversations.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Connect */}
            <div className="mb-12">
              <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-6">
                Connect
              </p>

              <div className="space-y-4">
                {SOCIALS.map(
                  ({ Icon, label, handle, href, color }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-5 p-5 border border-white/6 hover:border-white/15 group transition-all bg-white/[0.01]"
                    >
                      <div className="w-11 h-11 flex items-center justify-center border border-white/8 group-hover:border-white/20 transition-all">
                        <Icon
                          size={17}
                          color={color}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <p className="text-[10px] tracking-widest text-white/30 uppercase">
                          {label}
                        </p>

                        <p className="text-sm text-white/70 font-medium mt-1">
                          {handle}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="ml-auto text-white/20 group-hover:text-white/60 transition-colors"
                      />
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-7 border border-white/6"
            >
              <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-3">
                Availability
              </p>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                <span className="text-white font-semibold text-sm">
                  Available for Work
                </span>
              </div>

              <p className="text-white/30 text-xs leading-relaxed">
                Currently open to full-time positions, contract roles,
                frontend development opportunities, and interesting
                freelance projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

