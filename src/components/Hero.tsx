'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'
import { useState, useCallback } from 'react'

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  const handleImageError = useCallback(() => {
    setImageError(true)
    setImageLoaded(true) // Stop loading state
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-portfolio-light via-white to-portfolio-primary/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pb-16 sm:pb-8 md:pb-0">
      {/* Simplified background elements for faster loading */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-primary/10 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-secondary/10 rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="container-max relative z-10 pb-8 sm:pb-4 md:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-lg font-medium text-portfolio-primary mb-1">
                Hello, I'm
              </h2>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-1 dark:text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text mb-4">
                {personalInfo.title}
              </div>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300 leading-relaxed">
                Transforming complex challenges into elegant digital solutions. With 3+ years of experience in Full-Stack Development, AI/ML, Application Testing and Cloud Technologies, and a Master’s in Computer Science and AI/ML from the University of Florida, I’m on a mission to build technology that inspires and drives change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 xs:px-8 py-3 bg-portfolio-primary text-white rounded-lg font-medium hover:bg-portfolio-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 xs:px-8 py-3 border-2 border-portfolio-primary text-portfolio-primary rounded-lg font-medium hover:bg-portfolio-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                >
                  {social.platform === 'GitHub' && <Github className="w-6 h-6" />}
                  {social.platform === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                  {social.platform === 'Portfolio' && <Github className="w-6 h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-glow overflow-hidden">
                {/* Loading placeholder */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/80 to-portfolio-secondary/80 rounded-full flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white opacity-80">
                      SS
                    </div>
                    {/* Loading animation */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/20 border-t-white/60 animate-spin"></div>
                  </div>
                )}
                
                {/* Error fallback */}
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                      SS
                    </div>
                  </div>
                )}
                
                {/* Actual image */}
                <Image
                  src="/MVNC4784.JPG"
                  alt="Sai Sree Sadhan Polimera"
                  fill
                  sizes="(max-width: 475px) 12rem, (max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, (max-width: 1280px) 20rem, 24rem"
                  priority
                  quality={85} // Reduced from 95 for faster loading
                  draggable={false}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className={`object-cover rounded-full select-none scale-110 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkRMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2H6H9bcfaSXWGaRmknyLiblbIhFWuIWOWGo+6hRUylYIg1dRHkNvRUlhzuNR5Lc+yqH3FfQaGCpEWq/isFPR6AJKMaGBJ+gBa8fcECFSZBRBpPfhfNNEYs6/n7VoB4qGq9Z4tS2xkp8fKKZGlKsElUhQ3pJCHDMEhb6h/B/DP2fPV3SqBVh4hh94P84a8fOHpIBgOxOhDQhYqRmY1AEK2hmGRsrOOC/GYHKEWYgO3pq1k1mfRKqSQnF+HDp+LBGZKNJtJK+k0dNE1FiPkVrmxWCyJSb7ASOA+D"
                />
              </div>
              
              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-2 xs:-bottom-3 -left-2 xs:-left-3 bg-white rounded-lg shadow-lg p-2 xs:p-3 border border-gray-200 dark:bg-slate-800 dark:border-slate-700"
              >
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-300">Experience</div>
                <div className="text-lg xs:text-xl font-bold text-portfolio-primary">3+ Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - positioned relative to viewport on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 hover:text-portfolio-primary transition-colors duration-300 dark:text-gray-300 flex flex-col items-center"
        >
          <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 mb-1 xs:mb-2 dark:text-gray-300" />
          <span className="text-xs xs:text-sm whitespace-nowrap">Scroll Down</span>
        </motion.button>
      </motion.div>
    </section>
  )
} 