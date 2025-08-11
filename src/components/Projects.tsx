'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { projects } from '@/data/portfolio'

export function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'web'>('all')

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === selectedCategory)

  // Count projects by category
  const aiCount = projects.filter(p => p.category.toLowerCase() === 'ai').length
  const webCount = projects.filter(p => p.category.toLowerCase() === 'web').length

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  // Reset to first project when category changes
  useEffect(() => {
    setCurrentProjectIndex(0)
  }, [selectedCategory])

  // Get the projects to display (with wrapping). We'll render up to 3 and let CSS handle visibility per breakpoint
  const getDisplayProjects = () => {
    const result = []
    for (let i = 0; i < Math.min(3, filteredProjects.length); i++) {
      const index = (currentProjectIndex + i) % filteredProjects.length
      result.push(filteredProjects[index])
    }
    return result
  }

  const displayProjects = getDisplayProjects()

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Explore some of my recent work and contributions. Each project showcases different technologies and problem-solving approaches.
          </p>
          
          {/* Category Buttons */}
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-2 inline-flex items-center gap-2 ${
                selectedCategory === 'all' 
                  ? 'bg-portfolio-primary text-white border-portfolio-primary' 
                  : 'bg-white text-portfolio-primary border-portfolio-primary/30 hover:bg-portfolio-primary/5'
              }`}
            >
              <Github className="w-5 h-5" />
              <span>All Projects: {projects.length}</span>
            </button>
            
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-2 ${
                selectedCategory === 'ai' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
              }`}
            >
              AI: {aiCount}
            </button>
            
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-2 ${
                selectedCategory === 'web' 
                  ? 'bg-green-500 text-white border-green-500' 
                  : 'bg-white text-green-600 border-green-200 hover:bg-green-50'
              }`}
            >
              Responsive Web: {webCount}
            </button>
          </div>
        </motion.div>

        {/* Project Indicators - Moved above the carousel */}
        <div className="flex justify-center gap-2 mb-6">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentProjectIndex
                  ? 'bg-portfolio-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Projects Container - Responsive layout */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/30 backdrop-blur-md rounded-full shadow-lg hover:bg-white/50 transition-all duration-200 hover:scale-110 border border-white/20 hover:shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/30 backdrop-blur-md rounded-full shadow-lg hover:bg-white/50 transition-all duration-200 hover:scale-110 border border-white/20 hover:shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Projects Container - 1/2/3 cards by breakpoint */}
          <div className="flex justify-center gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16">
            {displayProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${currentProjectIndex}`}
                initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${index === 1 ? 'hidden sm:block' : ''} ${index === 2 ? 'hidden lg:block' : ''} w-[90%] sm:w-80 md:w-96 h-[560px] sm:h-[600px] flex-shrink-0`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-primary/5 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <div className="text-7xl opacity-20">
                      {project.category.toLowerCase() === 'ai' ? '🤖' : '🌐'}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 capitalize">
                        {project.category.toLowerCase() === 'ai' ? 'AI' : project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col min-h-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 flex-shrink-0">
                      {project.title}
                    </h4>
                    
                    {/* Scrollable content area */}
                    <div className="flex-1 overflow-y-auto min-h-0">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies - More visible with bigger container */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md font-medium">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Features */}
                      {project.features && project.features.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 mb-2 font-medium dark:text-gray-300">Key Features:</p>
                          <ul className="space-y-1.5">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2 dark:text-gray-300">
                                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action Button - Always at bottom */}
                    <div className="w-full pt-4 mt-4 border-t border-gray-100 flex-shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center text-gray-600">
          <span className="font-medium">{currentProjectIndex + 1}</span> of {filteredProjects.length} projects
        </div>
      </div>
    </section>
  )
}