'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022.03 - 현재',
      description: [
        'Next.js 기반 대규모 웹 애플리케이션 개발 및 유지보수',
        '마이크로서비스 아키텍처 설계 및 구현으로 시스템 확장성 30% 향상',
        '코드 리뷰 및 주니어 개발자 멘토링',
        'CI/CD 파이프라인 구축으로 배포 시간 50% 단축',
      ],
      icon: FaBriefcase,
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020.06 - 2022.02',
      description: [
        'React 및 Vue.js를 활용한 반응형 웹 애플리케이션 개발',
        '웹 성능 최적화로 로딩 속도 40% 개선',
        'Figma 디자인을 픽셀 퍼펙트하게 구현',
        '10개 이상의 클라이언트 프로젝트 성공적으로 완수',
      ],
      icon: FaBriefcase,
    },
    {
      type: 'education',
      title: '컴퓨터공학 학사',
      company: '한국대학교',
      period: '2016.03 - 2020.02',
      description: [
        '자료구조, 알고리즘, 데이터베이스 등 전공 과목 이수',
        '졸업 프로젝트: AI 기반 추천 시스템 개발',
        '학점: 4.0/4.5',
        '프로그래밍 동아리 회장 역임',
      ],
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            저의 경력과 학력을 소개합니다
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <motion.div
                    className="glass p-6 rounded-2xl glow-on-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <exp.icon
                        className={`text-3xl ${
                          exp.type === 'work' ? 'text-primary-400' : 'text-accent-400'
                        }`}
                      />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-primary-400 mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg"
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            자격증 & 수료증
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'AWS Certified Solutions Architect', year: '2023' },
              { name: 'Google Cloud Professional', year: '2022' },
              { name: '정보처리기사', year: '2020' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 bg-gray-800/50 rounded-xl"
              >
                <p className="font-semibold mb-1">{cert.name}</p>
                <p className="text-sm text-gray-400">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

