'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 md:py-20 relative bg-gradient-to-br from-white via-blue-50/20 to-white min-h-screen pt-24 md:pt-32">
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

        {/* CEO Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 md:mb-32"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">CEO Message</span>
            </h3>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"></div>
          </div>
          
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
              {/* 왼쪽: CEO 메시지 */}
              <div className="flex-1 max-w-2xl">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                  CEO Message
                </h4>
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    지금의 트렌드는 너무 빠르게 바뀝니다. 겉으로 드러난 유행만 따라가다 보면, 우리는 이미 지나간 파도를 붙잡고 있는지도 모릅니다.
                  </p>
                  <p>
                    그러나 진짜 트렌드는 언제나 눈에 잘 보이지 않는 곳에서 시작됩니다. 사람들이 무심코 고른 색, 이유 없이 끌린 문장, 설명하지 못한 채 남겨둔 감정 같은 아주 작은 선택들 속에 다음 흐름의 씨앗이 숨어 있습니다.
                  </p>
                  <p className="font-semibold text-gray-900">
                    언더웨이브는 그 '작은 것들'을 기록하는 회사입니다.
                  </p>
                  <p>
                    설문지보다 거리에서, 보고서보다 대화 속에서, 숫자보다 사람의 표정과 말투에서 트렌드의 시작을 찾습니다.
                  </p>
                  <p>
                    우리는 메가 트렌드를 쫓지 않습니다. 대신 개인의 일상 속에 숨어 있는 미세한 감정과 행동을 수집하고, 그 축적된 데이터를 통해 다가올 큰 흐름을 미리 읽어냅니다.
                  </p>
                  <p>
                    마케팅은 더 이상 '보여주는 기술'이 아닙니다. 사람을 이해하고, 사람의 마음을 대신 말해주는 일이어야 합니다.
                  </p>
                  <p className="font-semibold text-gray-900">
                    언더웨이브는 소비자를 설득하는 마케팅이 아니라, 소비자에게 공감받는 마케팅을 만들고자 합니다.
                  </p>
                  <p>
                    보이는 파도 아래, 진짜 트렌드는 지금도 조용히 만들어지고 있습니다.
                  </p>
                  <p className="font-semibold text-gray-900">
                    언더웨이브는 그 흐름을 가장 먼저 발견하고, 가장 진심 어린 방식으로 세상에 전하겠습니다.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 italic">
                      "Creating Connected Experiences That Matter."
                    </p>
                  </div>
                </div>
              </div>

              {/* 오른쪽: CEO 이미지 및 프로필 */}
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <div className="w-56 md:w-64 lg:w-72 bg-white rounded-lg overflow-hidden">
                      <img 
                        src="/images/CEO.png" 
                        alt="CEO 김승원" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-3 w-full max-w-[288px]">
                    <div>
                      <p className="text-lg md:text-xl font-bold text-gray-900">김승원</p>
                      <p className="text-sm md:text-base text-primary-600 font-semibold">언더웨이브 대표이사</p>
                    </div>
                    <div className="pt-3 border-t border-gray-300 text-left space-y-1.5 text-xs md:text-sm text-gray-600">
                      <p>• 서울대학교 사회학 학사</p>
                      <p>• University of Oxford (영국)<br/>&nbsp;&nbsp;MSc / MPhil Social<br/>&nbsp;&nbsp;Anthropology 석사</p>
                      <p>• Kundle & Co<br/>&nbsp;&nbsp;(덴마크 마케팅 에이전시<br/>&nbsp;&nbsp;컨설팅 코)</p>
                      <p>• IKEA &lt;Life at Home<br/>&nbsp;&nbsp;Report&gt; 프로젝트</p>
                    </div>
                  </div>
                </div>
              </div>
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
                color: 'from-blue-400 to-blue-600'
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
