'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { ProjectImage } from './ProjectImage'
import { useProjectImagePreloader } from '@/utils/imagePreloader'
import { useCategoryImagePrefetch } from './ImagePrefetch'
import { useOptimizedProjectNavigation, useOptimizedCategoryNavigation } from '@/hooks/useOptimizedNavigation'

export function Projects() {
  // Category navigation with smooth transitions
  const { category: selectedCategory, changeCategory, isTransitioning: isCategoryTransitioning } = 
    useOptimizedCategoryNavigation<'all' | 'ai' | 'web'>('all')

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => 
    selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category.toLowerCase() === selectedCategory),
    [selectedCategory]
  )

  // Optimized project navigation
  const {
    currentIndex: currentProjectIndex,
    isTransitioning: isProjectTransitioning,
    navigateToNext: nextProject,
    navigateToPrevious: prevProject,
    getDisplayProjects,
    isImagePreloaded
  } = useOptimizedProjectNavigation({
    projects: filteredProjects,
    preloadCount: 6, // Increased from 4 to 6
    transitionDelay: 100 // Reduced from 150 to 100 for faster transitions
  })

  // Prefetch images for current category
  useCategoryImagePrefetch(selectedCategory)

  // Count projects by category
  const aiCount = projects.filter(p => p.category.toLowerCase() === 'ai').length
  const webCount = projects.filter(p => p.category.toLowerCase() === 'web').length

  // Get display projects with enhanced loading states
  const displayProjects = getDisplayProjects(3)

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
              onClick={() => changeCategory('all')}
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
              onClick={() => changeCategory('ai')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-2 ${
                selectedCategory === 'ai' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
              }`}
            >
              AI: {aiCount}
            </button>
            
            <button
              onClick={() => changeCategory('web')}
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
          <div className="flex justify-center gap-3 xs:gap-4 sm:gap-6 px-2 xs:px-4 sm:px-8 lg:px-16">
            {displayProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${currentProjectIndex}`}
                initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${index === 1 ? 'hidden sm:block' : ''} ${index === 2 ? 'hidden lg:block' : ''} w-[95%] xs:w-[90%] sm:w-80 md:w-96 lg:w-[400px] h-[500px] xs:h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px] flex-shrink-0`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
                  {/* Project Image */}
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    title={project.title}
                    category={project.category}
                    priority={index === 0} // Only first image gets priority
                    eager={index === 0 || isImagePreloaded(project.image)} // Only eager load the first image or preloaded ones
                  />

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
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium hover:scale-105 active:scale-95 transform"
                        onMouseEnter={() => {
                          // Prefetch the GitHub page on hover
                          if (project.githubUrl) {
                            const link = document.createElement('link');
                            link.rel = 'prefetch';
                            link.href = project.githubUrl;
                            document.head.appendChild(link);
                          }
                        }}
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