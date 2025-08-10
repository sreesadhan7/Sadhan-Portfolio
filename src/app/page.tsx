'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'

const About = dynamic(() => import('@/components/About').then(mod => ({ default: mod.About })), { ssr: false, loading: () => <div /> })
const Experience = dynamic(() => import('@/components/Experience').then(mod => ({ default: mod.Experience })), { ssr: false, loading: () => <div /> })
const Projects = dynamic(() => import('@/components/Projects').then(mod => ({ default: mod.Projects })), { ssr: false, loading: () => <div /> })
const Skills = dynamic(() => import('@/components/Skills').then(mod => ({ default: mod.Skills })), { ssr: false, loading: () => <div /> })
const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.default })), { ssr: false, loading: () => <div /> })
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.default })), { ssr: false, loading: () => <div /> })
const FloatingParticles = dynamic(() => import('@/components/FloatingParticles').then(mod => ({ default: mod.default })), { ssr: false, loading: () => <div /> })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
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
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <FloatingParticles />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  )
} 