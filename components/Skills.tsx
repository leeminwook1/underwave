'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiFigma,
  SiVuedotjs,
  SiPython,
} from 'react-icons/si'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 90 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 90 },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
        { name: 'Express', icon: SiExpress, color: '#000000', level: 85 },
        { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', level: 80 },
        { name: 'Python', icon: SiPython, color: '#3776AB', level: 75 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 80 },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 85 },
        { name: 'Redis', icon: SiRedis, color: '#DC382D', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 80 },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: 70 },
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', level: 75 },
        { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
        { name: 'GitHub', icon: SiGithub, color: '#181717', level: 90 },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            다양한 기술 스택으로 최고의 솔루션을 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon
                          className="text-2xl"
                          style={{ color: skill.color }}
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            그 외 기술 및 도구
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST API',
              'GraphQL',
              'WebSocket',
              'JWT',
              'OAuth',
              'CI/CD',
              'Jest',
              'Cypress',
              'Webpack',
              'Vite',
              'Redux',
              'Zustand',
              'React Query',
              'Prisma',
              'MyBatis',
              'Nginx',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="glass px-4 py-2 rounded-full text-sm hover:bg-primary-500/20 transition-all cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

