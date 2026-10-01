// components/Scene3D.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Stars, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth follow mouse rotation
      groupRef.current.rotation.y += (mousePosition.x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (mousePosition.y * 0.3 - groupRef.current.rotation.x) * 0.05;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={1} />
      <pointLight position={[10, -5, 5]} color="#ec4899" intensity={0.8} />
      
      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

      {/* Main group that rotates with mouse */}
      <group ref={groupRef}>
        {/* Central floating sphere */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere ref={sphereRef} args={[1, 64, 64]}>
            <meshStandardMaterial
              color="#4f46e5"
              emissive="#312e81"
              roughness={0.2}
              metalness={0.8}
              wireframe
            />
          </Sphere>
        </Float>

        {/* Orbiting torus */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <Torus
            ref={torusRef}
            args={[2.5, 0.1, 16, 100]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color="#ec4899"
              emissive="#831843"
              roughness={0.3}
              metalness={0.7}
            />
          </Torus>
        </Float>

        {/* Floating cubes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 4;
          return (
            <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
              <Box
                args={[0.5, 0.5, 0.5]}
                position={[
                  Math.cos(angle) * radius,
                  Math.sin(angle * 2) * 2,
                  Math.sin(angle) * radius
                ]}
              >
                <meshStandardMaterial
                  color={`hsl(${i * 45}, 70%, 60%)`}
                  emissive={`hsl(${i * 45}, 70%, 20%)`}
                  transparent
                  opacity={0.7}
                />
              </Box>
            </Float>
          );
        })}

        {/* Small floating particles */}
        {[...Array(20)].map((_, i) => {
          const position: [number, number, number] = [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ];
          
          return (
            <Float key={i} speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <Sphere args={[0.1, 8, 8]} position={position}>
                <meshStandardMaterial
                  color={`hsl(${Math.random() * 360}, 70%, 60%)`}
                  emissive={`hsl(${Math.random() * 360}, 70%, 20%)`}
                />
              </Sphere>
            </Float>
          );
        })}
      </group>
    </>
  );
}