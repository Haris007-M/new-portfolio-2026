"use client"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Stars, Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei"
import * as THREE from "three"

function FloatingRing({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * speed
    ref.current.rotation.z = state.clock.getElapsedTime() * speed * 0.5
  })
  return (
    <Torus ref={ref} args={[1.5, 0.02, 16, 100]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.6} />
    </Torus>
  )
}

function ParticleField() {
  const count = 800
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return arr
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#c8a97e" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function CentralSphere() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.15
    ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
  })
  return (
    <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
      <Sphere ref={ref} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          emissive="#c8a97e"
          emissiveIntensity={0.15}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={1.5}
        />
      </Sphere>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#c8a97e" />
      <pointLight position={[-5, -5, 3]} intensity={1} color="#4f46e5" />
      <pointLight position={[0, -8, -5]} intensity={0.5} color="#ec4899" />
      <Stars radius={80} depth={50} count={3000} factor={3} fade speed={0.5} />
      <ParticleField />
      <CentralSphere />
      <FloatingRing position={[0, 0, 0]} color="#c8a97e" speed={0.3} />
      <FloatingRing position={[0, 0, 0]} color="#4f46e5" speed={-0.2} />
      <FloatingRing position={[0, 0.5, -0.5]} color="#ec4899" speed={0.15} />
    </>
  )
}