"use client"
import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <motion.div
        className="cursor"
        style={{ left: cursorX, top: cursorY }}
      />
      <motion.div
        className="cursor-ring"
        style={{ left: ringX, top: ringY }}
      />
    </>
  )
}