'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { workExperience } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

export function Experience() {
  const getCompanyInitials = (company: string): string => {
    return company
      .split(/\s+/)
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase()
  }

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-portfolio-primary/30 dark:bg-portfolio-primary/40 hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative lg:grid lg:grid-cols-12 lg:gap-8"
              >
                {/* Centered logo circle on the line */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6">
                  <div className="relative w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white dark:bg-slate-800 shadow-xl ring-4 ring-portfolio-primary/30 overflow-hidden">
                    {/* @ts-ignore: allow optional logoUrl on exp */}
                    {exp.companyLogoUrl ? (
                      <Image src={exp.companyLogoUrl} alt={exp.company} fill sizes="(max-width: 1280px) 48px, 64px" className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs xl:text-sm font-bold text-portfolio-primary">
                          {getCompanyInitials(exp.company)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Meta next to the circle (location + dates) */}
                <div
                  className={`hidden lg:block absolute top-6 xl:top-9 ${
                    index % 2 === 0
                      ? 'left-[calc(51%+1.75rem)] xl:left-[calc(51%+2.25rem)] text-left'
                      : 'right-[calc(51%+1.75rem)] xl:right-[calc(51%+2.25rem)] text-right'
                  }`}
                >
                  <div className="text-sm xl:text-base text-gray-700 dark:text-gray-200 leading-tight">
                    <div className={`flex items-center gap-1 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="w-3 h-3 xl:w-4 xl:h-4 text-gray-500 dark:text-gray-300" />
                      <span>{exp.location}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-3 h-3 xl:w-4 xl:h-4 text-gray-500 dark:text-gray-300" />
                      <span>
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 xs:p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-portfolio-primary text-left">
                    <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <div className="w-10 h-10 xs:w-12 xs:h-12 bg-portfolio-primary rounded-full flex items-center justify-center text-white">
                        <Briefcase className="w-5 h-5 xs:w-6 xs:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">{exp.title}</h3>
                        <p className="text-portfolio-primary font-medium text-sm xs:text-base">{exp.company}</p>
                      </div>
                    </div>

                    {/* Location and Dates (mobile only) */}
                    <div className="space-y-2 xs:space-y-3 mb-3 xs:mb-4 lg:hidden">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="body-text flex items-start gap-2 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/20">
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