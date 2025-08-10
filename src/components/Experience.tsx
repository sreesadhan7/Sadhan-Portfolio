'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { workExperience } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-primary/30 hidden lg:block"></div>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative lg:grid lg:grid-cols-12 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`lg:col-span-5 ${
                  index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8'
                }`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-portfolio-primary">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-portfolio-primary rounded-full flex items-center justify-center text-white">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-portfolio-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden h-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 