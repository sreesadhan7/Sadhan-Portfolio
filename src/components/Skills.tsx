'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { memo, useMemo } from 'react'

// Memoized skill chip component
const SkillChip = memo(({ skill }: { skill: any }) => (
  <span className="px-2 xs:px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-xs xs:text-sm whitespace-nowrap">
    {skill.icon} <span className="ml-1">{skill.name}</span>
  </span>
))

SkillChip.displayName = 'SkillChip'

// Memoized category card component
const CategoryCard = memo(({ category, skills, delay }: { category: any, skills: any[], delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, margin: "-50px" }} 
    transition={{ duration: 0.6, delay, ease: "easeOut" }} 
    className="bg-white dark:bg-slate-800 rounded-xl p-4 xs:p-5 sm:p-6 shadow hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center gap-2 xs:gap-3 mb-3 sm:mb-4">
      <span className="text-xl xs:text-2xl">{category.icon}</span>
      <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
    </div>
    <div className="flex flex-wrap gap-1.5 xs:gap-2">
      {skills.map(skill => (
        <SkillChip key={skill.id} skill={skill} />
      ))}
    </div>
  </motion.div>
))

CategoryCard.displayName = 'CategoryCard'

export function Skills() {
  // Memoize ordered categories to prevent recreation
  const orderedCategories = useMemo(() => [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'databases', name: 'Databases & Storage', icon: '🗄️' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'analytics', name: 'Analytics & Data Science', icon: '📊' },
    { id: 'leadership', name: 'Leadership & Management', icon: '🌟' }
  ], [])

  // Memoize skills by category
  const skillsByCategory = useMemo(() => {
    return orderedCategories.reduce((acc, category) => {
      acc[category.id] = skills.filter(s => s.category === category.id)
      return acc
    }, {} as Record<string, any[]>)
  }, [orderedCategories])

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </motion.div>

        {/* Optimized 3 rows, 2 blocks each */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Row 1: Frontend | Backend */}
          {[orderedCategories[0], orderedCategories[1]].map((cat, i) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              skills={skillsByCategory[cat.id]} 
              delay={i * 0.1} 
            />
          ))}

          {/* Row 2: Databases | Cloud */}
          {[orderedCategories[2], orderedCategories[3]].map((cat, i) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              skills={skillsByCategory[cat.id]} 
              delay={0.2 + i * 0.1} 
            />
          ))}

          {/* Row 3: Analytics | Leadership */}
          {[orderedCategories[4], orderedCategories[5]].map((cat, i) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              skills={skillsByCategory[cat.id]} 
              delay={0.4 + i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
