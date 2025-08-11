'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, Github, Linkedin, Twitter, Globe, Download, Briefcase } from 'lucide-react'
import { contactInfo, socialLinks } from '@/data/portfolio'

// Icon mapping for social links
const iconMap: Record<string, React.ComponentType<any>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  globe: Globe
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Resend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', message: '' })
        }, 3000)
      } else {
        // Handle error
        const errorData = await response.json()
        alert(errorData.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="gradient-text text-4xl md:text-5xl font-bold mb-6">
            Opportunity to Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm actively seeking new opportunities and collaborations. Whether you have a project in mind, 
            a position to fill, or just want to discuss potential partnerships, I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Let's Connect
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Opportunity to Work Together')}`}
                    className="inline-block relative z-20 pointer-events-auto text-slate-600 dark:text-slate-400 hover:text-portfolio-primary underline underline-offset-2 break-all"
                    title="Email me"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200">Availability</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Open to new opportunities • Remote/Hybrid • Full-time/Contract
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Resume Download (match Hero styling) */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Resume</h4>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-portfolio-primary text-white rounded-lg font-medium hover:bg-portfolio-secondary transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto relative z-[10]"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links (match Hero styling) */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Professional Profiles</h4>
              <div className="flex justify-start gap-4">
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
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    aria-label={social.platform}
                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300 pointer-events-auto relative z-[10]"
                  >
                    {social.platform === 'GitHub' && <Github className="w-6 h-6" />}
                    {social.platform === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                    {social.platform !== 'GitHub' && social.platform !== 'LinkedIn' && (
                      <Globe className="w-6 h-6" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Opportunity to Work Together
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I'll get back to you within 24 hours!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your opportunity, project, or collaboration idea..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 