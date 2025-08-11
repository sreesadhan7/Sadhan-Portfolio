'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function createSnowflakeTexture(size = 64): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, size, size)
  ctx.translate(size / 2, size / 2)
  ctx.strokeStyle = 'rgba(255,255,255,0.95)'
  ctx.lineWidth = 2

  // Draw 6-armed snowflake with small branches
  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -size / 2 + 6)
    ctx.stroke()

    const branchYs = [-size * 0.18, -size * 0.3]
    for (const y of branchYs) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(6, y + 6)
      ctx.moveTo(0, y)
      ctx.lineTo(-6, y + 6)
      ctx.stroke()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  texture.premultiplyAlpha = true
  return texture
}

function SnowField({ count = 700 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Spread flakes across a wide frustum-aligned volume
      array[i * 3 + 0] = Math.random() * 3 - 1.5 // x in [-1.5, 1.5]
      array[i * 3 + 1] = Math.random() * 2 - 1 // y in [-1, 1]
      array[i * 3 + 2] = Math.random() * 2 - 1 // z in [-1, 1]
    }
    return array
  }, [count])

  const speeds = useMemo(() => Float32Array.from({ length: count }, () => 0.03 + Math.random() * 0.14), [count])
  const offsets = useMemo(() => Float32Array.from({ length: count }, () => Math.random() * Math.PI * 2), [count])
  const texture = useMemo(() => createSnowflakeTexture(64), [])

  useFrame((state, delta) => {
    const p = pointsRef.current
    if (!p) return
    const attr = p.geometry.getAttribute('position') as THREE.BufferAttribute
    const array = attr.array as Float32Array
    const time = state.clock.elapsedTime
    for (let i = 0; i < count; i++) {
      const idx = i * 3
      // Fall speed + slight sway
      array[idx + 1] -= speeds[i] * delta * 0.4
      array[idx] += Math.sin(time + offsets[i]) * 0.0008
      // Wrap to top when below view
      if (array[idx + 1] < -1.1) {
        array[idx + 1] = 1.1
        array[idx] = Math.random() * 3 - 1.5
        array[idx + 2] = Math.random() * 2 - 1
      }
    }
    attr.needsUpdate = true
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        map={texture}
        transparent
        color="#e3f2ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <Canvas
        className="absolute inset-0 pointer-events-none"
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1.5], fov: 60 }}
      >
        {/* Snowflakes implemented with Three.js (R3F) */}
        <SnowField count={100} />
      </Canvas>
    </div>
  )
}