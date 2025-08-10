'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-portfolio-light via-white to-portfolio-primary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-portfolio-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max relative z-10">
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
              <h2 className="text-lg font-medium text-portfolio-primary mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                {personalInfo.name}
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold gradient-text mb-4">
                {personalInfo.title}
              </div>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
                Transforming ideas into elegant digital solutions with expertise in full-stack development, AI/ML, and cloud technologies. Currently pursuing my Master's at the University of Florida while building innovative applications that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-portfolio-primary text-white rounded-lg font-medium hover:bg-portfolio-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-portfolio-primary text-portfolio-primary rounded-lg font-medium hover:bg-portfolio-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-glow overflow-hidden">
                <Image
                  src="/MVNC4784.JPG"
                  alt="Sai Sree Sadhan Polimera"
                  fill
                  sizes="(max-width: 1024px) 20rem, 20rem"
                  priority
                  quality={100}
                  draggable={false}
                  className="object-cover rounded-full select-none scale-110"
                />
              </div>
              
              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              >
                <div className="text-sm text-gray-600">Experience</div>
                <div className="text-2xl font-bold text-portfolio-primary">3+ Years</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              >
                <div className="text-sm text-gray-600">Projects</div>
                <div className="text-lg font-semibold text-portfolio-primary">10+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 hover:text-portfolio-primary transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm">Scroll Down</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 