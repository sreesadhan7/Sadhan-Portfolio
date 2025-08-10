'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

export function Skills() {
  const orderedCategories = [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'databases', name: 'Databases & Storage', icon: '🗄️' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'analytics', name: 'Analytics & Data Science', icon: '📊' },
    { id: 'leadership', name: 'Leadership & Management', icon: '🌟' }
  ]

  const categoryToSkills = (categoryId: string) => skills.filter(s => s.category === categoryId)

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </motion.div>

        {/* 3 rows, 2 blocks each */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Row 1: Frontend | Backend */}
          {[orderedCategories[0], orderedCategories[1]].map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryToSkills(cat.id).map(skill => (
                  <span key={skill.id} className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm">
                    {skill.icon} <span className="ml-1">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Row 2: Databases | Cloud */}
          {[orderedCategories[2], orderedCategories[3]].map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryToSkills(cat.id).map(skill => (
                  <span key={skill.id} className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm">
                    {skill.icon} <span className="ml-1">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Row 3: Analytics | Leadership */}
          {[orderedCategories[4], orderedCategories[5]].map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryToSkills(cat.id).map(skill => (
                  <span key={skill.id} className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm">
                    {skill.icon} <span className="ml-1">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 