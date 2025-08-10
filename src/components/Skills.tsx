'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

export function Skills() {
  const orderedCategories = [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'database', name: 'Database & Storage', icon: '🗄️' },
    { id: 'devops', name: 'DevOps & Tools', icon: '🚀' },
    { id: 'other', name: 'Other Skills', icon: '🔧' }
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

        <div className="grid lg:grid-cols-2 gap-8">
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

          {/* Row 2: Database | DevOps */}
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

          {/* Row 3: Other (full width) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white rounded-xl p-6 shadow lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{orderedCategories[4].icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">{orderedCategories[4].name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryToSkills('other').map(skill => (
                <span key={skill.id} className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm">
                  {skill.icon} <span className="ml-1">{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 