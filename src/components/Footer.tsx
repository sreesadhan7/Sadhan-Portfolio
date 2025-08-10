'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    scrollToSection('hero')
  }

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container-max py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Sadhan Portfolio
          </h3>
          <p className="text-slate-400 max-w-md mx-auto">
            A passionate Software Engineer crafting digital experiences with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Next.js & React</li>
              <li>TypeScript</li>
              <li>Python & Django</li>
              <li>Tailwind CSS</li>
              <li>Three.js & 3D</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Available for opportunities</li>
              <li>Open to collaborations</li>
              <li>Always learning</li>
              <li>Passionate about tech</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>© {currentYear} Sadhan Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and modern web technologies.</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-float-slow opacity-60"></div>
    </footer>
  )
} 