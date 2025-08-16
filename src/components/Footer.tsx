'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, ExternalLink } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-4 h-4" />
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 relative">
      {/* Full-width divider above footer content */}
      <hr className="absolute left-0 w-full border-slate-700 dark:border-slate-800 top-0" style={{ borderTopWidth: 1 }} />
      <div className="container-max py-8 flex flex-col items-center relative z-10">
        {/* Portfolio Heading */}
        <h2 className="text-2xl text-slate-200 mb-1">Sree Sadhan Portfolio</h2>
        {/* Impactful Caption */}
        <p className="text-base text-slate-400 mb-3">Software Engineer</p>
        {/* Full-width divider after caption */}
        <hr className="absolute left-0 w-full border-slate-700 dark:border-slate-800" style={{ borderTopWidth: 1, position: 'relative', marginBottom: '1.5rem' }} />
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex items-center text-sm text-slate-400">
            © {currentYear} Sadhan Portfolio
            <Heart className="w-4 h-4 text-red-500 ml-2 inline" fill="#ef4444" />
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400 mr-2">Connect with me:</span>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-slate-800 hover:bg-portfolio-primary text-slate-300 hover:text-white px-3 py-2 rounded-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {getIcon(link.icon)}
                <span className="text-sm">{link.platform}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}