'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 md:py-20 relative bg-gradient-to-br from-white via-pink-50/20 to-white min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Vision & Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            우리는 트렌드를 분석하지만, 목적은 사람에 있습니다
          </p>
        </motion.div>

        {/* 큰 비주얼 섹션 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 md:mb-32 rounded-2xl md:rounded-3xl overflow-hidden"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-primary-200 to-primary-300">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80" 
              alt="Vision" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
              >
                급변하는 흐름 속에서<br/>사람들이 쉽게 놓치는 일상과 문화를 발견합니다
              </motion.h3>
            </div>
          </div>
        </motion.div>

        {/* 두 개의 미션 - 세로 레이아웃 */}
        <div className="space-y-20 mb-32">
          {/* 영리적 미션 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                      alt="Business Mission" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <span className="text-primary-600 font-semibold">Business Mission</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  트렌드를 분석해,<br/>기업의 방향성을 제안합니다
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">사회·문화·라이프스타일 트렌드 분석</h4>
                      <p className="text-gray-600 text-sm">데이터와 관찰을 기반으로 한 분석 보고서 제공</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">B2B 대상 마케팅 전략 제안</h4>
                      <p className="text-gray-600 text-sm">커뮤니케이션 방향성과 전략적 인사이트 제공</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">맥락과 흐름 중심의 인사이트</h4>
                      <p className="text-gray-600 text-sm">단기 유행이 아닌, 지속 가능한 트렌드 분석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 비영리적 미션 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <span className="text-primary-600 font-semibold">Cultural Mission</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  가장 보통의 사람들,<br/>가장 쉽게 사라지는 이야기를 기록합니다
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">보통의 사람들에 주목</h4>
                      <p className="text-gray-600 text-sm">급변하는 트렌드 속에서 일상적인 삶과 이야기 기록</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">디테일한 삶의 결 발견</h4>
                      <p className="text-gray-600 text-sm">거대한 트렌드의 파도에 가려진 가치 있는 순간들</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">문화적 요소 발굴</h4>
                      <p className="text-gray-600 text-sm">보존 가치가 있는 문화와 전통의 재발견</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 order-1 md:order-2">
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" 
                      alt="Cultural Mission" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 핵심 가치 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                title: 'Insight', 
                desc: '데이터 기반 인사이트',
                color: 'from-blue-400 to-blue-600'
              },
              { 
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                title: 'Trust', 
                desc: '신뢰할 수 있는 파트너',
                color: 'from-green-400 to-green-600'
              },
              { 
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                title: 'Innovation', 
                desc: '혁신적인 접근',
                color: 'from-purple-400 to-purple-600'
              },
              { 
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                title: 'Passion', 
                desc: '열정과 진정성',
                color: 'from-pink-400 to-pink-600'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all group"
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
