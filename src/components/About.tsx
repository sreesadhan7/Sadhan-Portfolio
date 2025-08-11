'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import { personalInfo, education } from '@/data/portfolio'

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-portfolio-primary" />
                <span className="text-gray-600">Title: {personalInfo.title}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">About</h4>
              <p className="body-text">{personalInfo.about}</p>
              
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-primary text-white rounded-lg font-medium hover:bg-portfolio-secondary transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto relative z-[10]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-portfolio-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-portfolio-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-portfolio-primary font-medium mb-1">{edu.institution}</p>
                      {edu.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                        {edu.gpa && <span className="text-portfolio-primary">GPA: {edu.gpa}</span>}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{edu.description}</p>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2 text-sm">Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements
                            .flatMap((a) => a.split(',').map((c) => c.trim()).filter(Boolean))
                            .map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/20"
                              >
                                {course}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 