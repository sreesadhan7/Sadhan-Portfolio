'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const proficiencyColors = {
  beginner: 'from-gray-400 to-gray-500',
  intermediate: 'from-yellow-400 to-orange-500',
  advanced: 'from-blue-400 to-cyan-500',
  expert: 'from-green-400 to-emerald-500'
}

const proficiencyWidths = {
  beginner: 'w-1/4',
  intermediate: 'w-1/2',
  advanced: 'w-3/4',
  expert: 'w-full'
}

export function Skills() {
  const skillCategories = [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'database', name: 'Database & Storage', icon: '🗄️' },
    { id: 'devops', name: 'DevOps & Tools', icon: '🚀' },
    { id: 'other', name: 'Other Skills', icon: '🔧' }
  ]

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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.id)
            
            if (categorySkills.length === 0) return null

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-900">{category.name}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-portfolio-primary/30">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{skill.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-portfolio-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-gray-500 capitalize">{skill.proficiency}</span>
                          </div>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Beginner</span>
                            <span>Expert</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: proficiencyWidths[skill.proficiency] }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${proficiencyColors[skill.proficiency]} rounded-full transition-all duration-300`}
                            />
                          </div>
                        </div>

                        {/* Skill Level Badge */}
                        <div className="mt-4 flex justify-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${proficiencyColors[skill.proficiency]}`}>
                            {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Always Learning & Growing</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Continuous Learning</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Problem Solving</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Team Collaboration</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Code Quality</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 