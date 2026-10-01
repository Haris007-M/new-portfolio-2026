"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Torus,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Mail,
  Download,
} from "lucide-react";
import * as THREE from "three";

/* =========================================================
   REAL PROFESSIONAL DATA
========================================================= */

const STATS = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "50+",
    label: "Web Projects",
  },
  {
    number: "BS",
    label: "Computer Science",
  },
  {
    number: "Next.js",
    label: "Primary Framework",
  },
];

const EXPERIENCE = [
  {
    period: "Oct 2024 — Present",
    role: "Frontend Developer",
    company: "Tiansmin9",
    description:
      "Working on frontend projects with a strong focus on CRM applications. Developed functional API integrations and CRM interfaces using Next.js, TypeScript and Tailwind CSS.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },

  {
    period: "Sep 2023 — Sep 2024",
    role: "Frontend Developer",
    company: "Smash Code",
    description:
      "Contributed to frontend projects including dashboards, e-commerce platforms and job board applications. Worked with React, Next.js, React Bootstrap, Tailwind CSS and modern frontend tooling.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },

  {
    period: "Mar 2023 — Aug 2023",
    role: "Frontend Developer",
    company: "Venux Bytes",
    description:
      "Worked remotely on web applications and collaborated with cross-functional teams to design, develop and deploy responsive web interfaces based on client requirements.",
    technologies: [
      "React",
      "AngularJS",
      "React Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    period: "Jul 2022 — Dec 2022",
    role: "Web Developer",
    company: "Borialias Enterprises",
    description:
      "Developed and maintained web projects including landing pages, e-commerce websites and redesigns. Worked with React and Next.js and integrated backend services.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
    ],
  },
];

const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Framer Motion",
  "GSAP",
  "REST APIs",
  "Supabase",
  "Firebase",
  "Responsive Design",
];

/* =========================================================
   3D ORB
========================================================= */

function SmallOrb() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    ref.current.rotation.y = time * 0.3;

    ref.current.rotation.x =
      Math.sin(time * 0.4) * 0.2;
  });

  return (
    <Float
      speed={2}
      floatIntensity={1}
    >
      <Sphere
        ref={ref}
        args={[1.2, 32, 32]}
      >
        <MeshDistortMaterial
          color="#0a0a0a"
          emissive="#4f46e5"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
          wireframe
        />
      </Sphere>

      <Torus
        args={[1.8, 0.015, 8, 80]}
      >
        <meshStandardMaterial
          color="#c8a97e"
          emissive="#c8a97e"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
        />
      </Torus>
    </Float>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030303] "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(79,70,229,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-[#c8a97e]/60">
            Who I Am
          </p>

          <h2
            className="text-5xl font-black tracking-tighter md:text-7xl"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            About{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke:
                  "1px rgba(255,255,255,0.2)",
              }}
            >
              Me
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================================
              IMAGE / VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="relative">

              {/* Main image */}

              <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0a0a0a]">

                <img
                  src="/profile.jpg"
                  alt="Muhammad Haris"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Bottom name */}

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#c8a97e]">
                    Frontend Developer
                  </p>

                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                    Muhammad Haris
                  </h3>

                  <p className="mt-2 text-xs text-white/45">
                    React · Next.js · TypeScript
                  </p>
                </div>

              </div>

              {/* Small 3D element */}

              <div className="absolute -bottom-14 -right-12 hidden h-40 w-40 md:block">
                <Canvas
                  camera={{
                    position: [0, 0, 5],
                    fov: 50,
                  }}
                >
                  <ambientLight intensity={0.3} />

                  <pointLight
                    position={[5, 5, 5]}
                    intensity={2}
                    color="#c8a97e"
                  />

                  <pointLight
                    position={[-5, -5, 5]}
                    intensity={1}
                    color="#4f46e5"
                  />

                  <Suspense fallback={null}>
                    <SmallOrb />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              BIO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >

            <p className="mb-6 text-xl leading-9 text-white/65">
              I'm a{" "}
              <span className="text-white">
                frontend developer
              </span>{" "}
              focused on building modern,
              responsive and interactive web
              applications.
            </p>

            <p className="mb-6 text-sm leading-7 text-white/35">
              I have 3+ years of professional
              experience working on websites,
              dashboards, CRM systems, e-commerce
              platforms and other web applications.
              My main development stack includes
              React, Next.js, TypeScript and
              Tailwind CSS.
            </p>

            <p className="mb-8 text-sm leading-7 text-white/35">
              I also work with REST APIs,
              authentication, Supabase, Firebase
              and modern UI libraries. I enjoy
              turning designs and ideas into clean,
              responsive and production-ready
              interfaces.
            </p>

            {/* Buttons */}

            <div className="mb-10 flex flex-wrap gap-3">

              <a
                href="mailto:itshariskhan09@gmail.com"
                className="flex items-center gap-2 bg-[#c8a97e] px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-black transition-colors hover:bg-white"
              >
                <Mail size={13} />
                Email Me
              </a>

              <a
                href="/haris cv2026.pdf"
                target="_blank"
                className="flex items-center gap-2 border border-white/10 px-6 py-3 text-[10px] uppercase tracking-widest text-white/50 transition-all hover:border-white/30 hover:text-white"
              >
                <Download size={13} />
                Resume
              </a>

            </div>

            {/* Skills */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <Code2
                  size={14}
                  className="text-[#c8a97e]"
                />

                <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                  Technologies
                </span>

              </div>

              <div className="flex flex-wrap gap-2">

                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[10px] text-white/40 transition hover:border-[#c8a97e]/30 hover:text-white/70"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          </motion.div>
        </div>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <div className="mt-32">

          <div className="mb-12 flex items-center gap-4">

            <BriefcaseBusiness
              size={16}
              className="text-[#c8a97e]"
            />

            <p className="text-[9px] uppercase tracking-[0.45em] text-white/30">
              Professional Experience
            </p>

          </div>

          <div className="relative">

            {/* Timeline line */}

            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.07]" />

            <div className="space-y-12">

              {EXPERIENCE.map(
                (item, index) => (
                  <motion.div
                    key={`${item.company}-${item.period}`}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.1,
                    }}
                    className="relative pl-8"
                  >

                    {/* Dot */}

                    <div className="absolute left-[-2px] top-1.5 h-2 w-2 rounded-full bg-[#c8a97e] shadow-[0_0_12px_rgba(200,169,126,0.5)]" />

                    <div className="grid gap-5 md:grid-cols-[180px_1fr]">

                      {/* Date */}

                      <div>

                        <p className="font-mono text-[10px] tracking-widest text-[#c8a97e]">
                          {item.period}
                        </p>

                      </div>

                      {/* Content */}

                      <div>

                        <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-white/25">
                          {item.company}
                        </p>

                        <h3 className="text-xl font-bold tracking-tight text-white">
                          {item.role}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {item.technologies.map(
                            (technology) => (
                              <span
                                key={
                                  technology
                                }
                                className="border border-white/[0.07] px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/25"
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                    </div>
                  </motion.div>
                )
              )}

            </div>
          </div>
        </div>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-24 border border-white/[0.07] bg-white/[0.015] p-7 md:p-9"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c8a97e]/20 bg-[#c8a97e]/5">

                <GraduationCap
                  size={19}
                  className="text-[#c8a97e]"
                />

              </div>

              <div>

                <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-white/25">
                  Education
                </p>

                <h3 className="text-xl font-bold">
                  BS Computer Science
                </h3>

                <p className="mt-1 text-sm text-white/35">
                  University of Swabi
                </p>

              </div>
            </div>

            <div className="text-left md:text-right">

              <p className="font-mono text-[10px] text-[#c8a97e]">
                Sep 2017 — Sep 2021
              </p>

              <p className="mt-2 text-xs text-white/25">
                Computer Science
              </p>

            </div>

          </div>
        </motion.div>

        {/* =================================================
            STATS
        ================================================= */}

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

          {STATS.map(
            (stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group border border-white/[0.06] p-6 text-center transition-all hover:border-[#c8a97e]/20"
              >

                <div
                  className="mb-2 text-3xl font-black tracking-tighter text-[#c8a97e] md:text-4xl"
                  style={{
                    fontFamily:
                      "'Playfair Display', serif",
                  }}
                >
                  {stat.number}
                </div>

                <div className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  {stat.label}
                </div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}