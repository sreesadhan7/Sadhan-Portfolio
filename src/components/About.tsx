'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import { personalInfo, education } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

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
                <MapPin className="w-5 h-5 text-portfolio-primary" />
                <span className="text-gray-600">Location: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-portfolio-primary" />
                <span className="text-gray-600">Birth Date: {formatDate(personalInfo.birthDate)}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-portfolio-primary" />
                <span className="text-gray-600">Title: {personalInfo.title}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">About</h4>
              <p className="text-gray-600 leading-relaxed">{personalInfo.about}</p>
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-portfolio-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 text-sm mb-3">{edu.field}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{edu.description}</p>
                      <div className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
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