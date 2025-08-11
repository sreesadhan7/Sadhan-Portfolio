'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    // Always scroll the main window to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 relative">
      {/* Full-width divider above footer content */}
      <hr className="absolute left-0 w-full border-slate-700 dark:border-slate-800 top-0" style={{ borderTopWidth: 1 }} />
      <div className="container-max py-8 flex flex-col items-center relative z-10">
        {/* Portfolio Heading */}
        <h2 className="text-2xl text-slate-200 mb-1">Sree Sadhan Portfolio</h2>
        {/* Impactful Caption */}
        <p className="text-base text-slate-400 mb-3">Empowering innovation through AI-driven software solutions.</p>
        {/* Full-width divider after caption */}
        <hr className="absolute left-0 w-full border-slate-700 dark:border-slate-800" style={{ borderTopWidth: 1, position: 'relative', marginBottom: '1.5rem' }} />
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex items-center text-sm text-slate-400">
            © {currentYear} Sadhan Portfolio
            <Heart className="w-4 h-4 text-red-500 ml-2 inline" fill="#ef4444" />
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-portfolio-primary hover:bg-portfolio-secondary text-white px-3 py-2 rounded-md transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
} 