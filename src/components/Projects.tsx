'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ChevronLeft, ChevronRight, Code, Globe, Smartphone, Monitor, Brain } from 'lucide-react'
import { projects } from '@/data/portfolio'

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
  ai: Brain,
  other: Code
}

const categoryColors = {
  web: 'from-blue-500 to-cyan-500',
  mobile: 'from-green-500 to-emerald-500',
  desktop: 'from-purple-500 to-pink-500',
  ai: 'from-orange-500 to-red-500',
  other: 'from-gray-500 to-slate-500'
}

export function Projects() {
  const [startIdx, setStartIdx] = useState(0)
  const projectsPerPage = 3
  const totalProjects = projects.length

  // Helper to wrap index correctly for carousel
  const mod = (n: number, m: number) => ((n % m) + m) % m

  // Always show up to 3 projects, wrap around if needed
  let visibleProjects: typeof projects = [];
  if (totalProjects <= projectsPerPage) {
    visibleProjects = projects;
  } else {
    visibleProjects = Array.from({ length: projectsPerPage }, (_, i) =>
      projects[mod(startIdx + i, totalProjects)]
    );
  }

  const handlePrev = () => {
    if (totalProjects <= projectsPerPage) return;
    setStartIdx((prev) => {
      // If not a multiple of projectsPerPage, handle wrap-around correctly
      let next = prev - projectsPerPage;
      if (next < 0) {
        // Go to the last full page
        const remainder = totalProjects % projectsPerPage;
        if (remainder === 0) {
          next = totalProjects - projectsPerPage;
        } else {
          next = totalProjects - remainder;
        }
      }
      return next;
    });
  }
  const handleNext = () => {
    if (totalProjects <= projectsPerPage) return;
    setStartIdx((prev) => {
      let next = prev + projectsPerPage;
      if (next >= totalProjects) {
        next = 0;
      }
      return next;
    });
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-2"></div>
          <div className="flex justify-center mb-2">
            <span className="inline-block px-6 py-2 rounded-full bg-portfolio-primary text-white text-lg font-semibold shadow-md border-2 border-portfolio-primary" style={{ minWidth: 60 }}>
              All Projects: {totalProjects}
            </span>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          {totalProjects > projectsPerPage && (
            <button
              aria-label="Previous"
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow transition focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
              tabIndex={0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={startIdx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 md:grid-cols-${projectsPerPage} gap-8 w-full max-w-6xl`}
            >
              {visibleProjects.map((project, index) => {
                const IconComponent = categoryIcons[project.category]
                const gradientClass = categoryColors[project.category]
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-gray-400" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${gradientClass}`}>
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-portfolio-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="body-text mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="body-text flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Project Links */}
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View code for ${project.title}`}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                            tabIndex={0}
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {totalProjects > projectsPerPage && (
            <button
              aria-label="Next"
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow transition focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
              tabIndex={0}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
} 