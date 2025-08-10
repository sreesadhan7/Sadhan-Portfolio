'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    const el = document.getElementById('home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-max py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">© {currentYear} Sadhan Portfolio</div>
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