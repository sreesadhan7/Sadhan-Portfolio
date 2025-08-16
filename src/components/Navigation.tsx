'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import { navigationItems } from '@/data/portfolio'
import { scrollToSection } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    // Close menu first
    setIsOpen(false)
    
    // Add a small delay to ensure menu closes before scrolling
    // This helps with Android browsers
    setTimeout(() => {
      scrollToSection(href.replace('#', ''))
    }, 100)
  }

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside (Android compatibility)
  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false)
      }
    }

    // Handle escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      // Prevent body scroll when menu is open (iOS Safari fix)
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      
      document.addEventListener('touchstart', handleOutsideClick, { passive: true })
      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('keydown', handleEscKey)
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
      document.body.style.height = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-portfolio-primary text-white rounded-full shadow-lg hover:bg-portfolio-secondary transition-all duration-300 hover:scale-110"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 xs:h-18 sm:h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg xs:text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
              onClick={scrollToTop}
            >
              Sree Sadhan
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-portfolio-primary transition-colors duration-300 font-medium dark:text-gray-300 text-sm lg:text-base"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Resume Download Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 lg:px-4 py-2 bg-portfolio-primary text-white rounded-lg font-medium hover:bg-portfolio-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm lg:text-base"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden lg:inline">Resume</span>
              </motion.a>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-700 hover:text-portfolio-primary transition-colors duration-300 dark:text-gray-300"
            >
              {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200/20 dark:border-gray-700/20 absolute left-0 right-0 top-full z-50 min-h-screen"
            >
              <div className="container-max py-3 xs:py-4 space-y-3 xs:space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-gray-700 hover:text-portfolio-primary active:text-portfolio-primary transition-colors duration-300 font-medium py-3 px-2 dark:text-gray-300 text-sm xs:text-base rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 active:bg-gray-200 dark:active:bg-slate-700 touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Resume Download in Mobile Menu */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-3 xs:pt-4 border-t border-gray-200/20 dark:border-gray-700/20"
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left text-portfolio-primary hover:text-portfolio-secondary active:text-portfolio-secondary transition-colors duration-300 font-medium py-3 px-2 flex items-center gap-2 text-sm xs:text-base rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 active:bg-gray-200 dark:active:bg-slate-700 touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                  <div className="mt-2"><ThemeToggle /></div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
} 