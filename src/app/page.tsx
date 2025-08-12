'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'

// Optimized loading strategies for better performance
const About = dynamic(() => import('@/components/About').then(mod => ({ default: mod.About })), { 
  ssr: true, // Enable SSR for faster initial load
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
})

const Experience = dynamic(() => import('@/components/Experience').then(mod => ({ default: mod.Experience })), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-50 dark:bg-gray-900 rounded-lg" />
})

const Projects = dynamic(() => import('@/components/Projects').then(mod => ({ default: mod.Projects })), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
})

const Skills = dynamic(() => import('@/components/Skills').then(mod => ({ default: mod.Skills })), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-50 dark:bg-gray-900 rounded-lg" />
})

const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.Contact })), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-slate-50 dark:bg-slate-800 rounded-lg" />
})

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: false,
  loading: () => <div className="h-32 animate-pulse bg-gray-900 dark:bg-gray-800" />
})

// Lazy load particles only when needed
const FloatingParticles = dynamic(() => import('@/components/FloatingParticles').then(mod => ({ default: mod.FloatingParticles })), { 
  ssr: false,
  loading: () => null
})

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-dark via-portfolio-primary to-portfolio-secondary flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white">Loading Portfolio...</h1>
        <p className="text-white/80 mt-2">Optimizing for best experience</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    // Immediate loading with resource optimization
    const loadPortfolio = async () => {
      // Preload critical resources concurrently
      const preloadPromises = [
        // Preload hero image
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve // Don't block on image errors
          img.src = '/MVNC4784.JPG'
        }),
        // Preload critical project images
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve
          img.src = '/projectImages/agentic-ai-systems.webp'
        })
      ]

      // Wait for critical resources or timeout after 200ms
      await Promise.race([
        Promise.all(preloadPromises),
        new Promise(resolve => setTimeout(resolve, 200))
      ])

      setIsLoading(false)
      // Load particles after main content renders
      setTimeout(() => setShowParticles(true), 500)
    }

    loadPortfolio()
  }, [])

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <main className="min-h-screen bg-background">
      {showParticles && <FloatingParticles />}
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 dark:bg-gray-900" />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 dark:bg-gray-900" />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="h-96 animate-pulse bg-slate-50 dark:bg-slate-800" />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className="h-32 animate-pulse bg-gray-900 dark:bg-gray-800" />}>
            <Footer />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </main>
  )
} 