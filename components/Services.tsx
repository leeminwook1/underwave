'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 md:py-20 relative bg-white min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Business Model</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 수익 모델로 지속 가능한 성장을 추구합니다
          </p>
        </motion.div>

        {/* 비즈니스 플로우 다이어그램 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="glass p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Business Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* 기업 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1"
              >
                <div className="relative">
                  <div className="w-40 h-40 mx-auto border-4 border-primary-300 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-xl font-bold text-gray-800">기업</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary-500/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>

              {/* 화살표 */}
              <div className="flex-1 text-center hidden md:block">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">트렌드 리서치 제공</p>
                  <svg className="w-full h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <p className="text-sm text-gray-600">마케팅 대행 서비스</p>
                </div>
              </div>

              {/* Underwave */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1"
              >
                <div className="relative">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-500/90 to-primary-600/90 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">Underwave</div>
                      <div className="text-sm text-white/90">언더웨이브</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/30 rounded-full blur-2xl"></div>
                </div>
              </motion.div>

              {/* 화살표 */}
              <div className="flex-1 text-center hidden md:block">
                <div className="space-y-2">
                  <svg className="w-full h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <p className="text-sm text-gray-600">마이크로 트렌드</p>
                </div>
              </div>

              {/* 소비자 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex-1"
              >
                <div className="relative">
                  <div className="w-40 h-40 mx-auto border-4 border-primary-300 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-xl font-bold text-gray-800">소비자</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary-500/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>

            {/* 하단 설명 */}
            <div className="mt-12 text-center">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary-50 to-pink-50 rounded-2xl border-2 border-primary-200">
                <p className="text-gray-700 font-semibold">맞춤형 공감 마케팅 제공</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4가지 수익 모델 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Revenue Streams</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: '컨설팅 기반 수익',
                subtitle: 'Consulting',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                items: [
                  '마케팅 · 광고 · 홍보 전단 컨설팅',
                  '브랜드 커뮤니케이션 방향성 제안',
                  '프로젝트 단위 / 기업 맞춤형 계약'
                ],
                highlight: '전략적 의사결정을 돕는 고부가가치 서비스',
                color: 'from-blue-500 to-blue-600'
              },
              {
                number: '02',
                title: '마케팅 대행 수익',
                subtitle: 'Agency',
                icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
                items: [
                  'SNS 콘텐츠 기획 및 운영',
                  '캠페인 전략 수립 및 실행',
                  '브랜드 론칭 및 메시지 관리'
                ],
                highlight: '인사이트에서 실행까지 연결되는 실무형 수익원',
                color: 'from-green-500 to-green-600'
              },
              {
                number: '03',
                title: '트렌드 리서치 리포트',
                subtitle: 'Research',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                items: [
                  '20대 트렌드 분석 리포트',
                  '산업·주제별 리서치 자료 제공',
                  '연말 판매 또는 기업 구독형 모델'
                ],
                highlight: '현장감 있는 트렌드 데이터 자산화',
                color: 'from-purple-500 to-purple-600'
              },
              {
                number: '04',
                title: '브랜디드 콘텐츠',
                subtitle: 'Branded Contents',
                icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
                items: [
                  '인스타그램 매거진 기반 콘텐츠',
                  '자연스러운 PPL 및 협업 캠페인',
                  '브랜드 스토리텔링'
                ],
                highlight: '높은 신뢰도의 스토리 중심 콘텐츠',
                color: 'from-pink-500 to-pink-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-5xl font-bold text-gray-200 mb-2">{item.number}</div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-primary-600 font-semibold">{item.subtitle}</p>
                    </div>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What we do 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="glass p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How We Create Value</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Who we are</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                20대 소비자의 실제 일상과 문화 데이터를 기반으로 트렌드를 분석하고 전략적 인사이트를 제공하는 마케팅 회사
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">What we do</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                마케팅·광고·홍보 컨설팅, 마케팅 대행 및 커뮤니케이션 전략 수립, 트렌드 리서치 리포트 제공
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">How we work</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                자체 인스타그램 매거진 운영, 20대 자문단 서포터즈 운영, 실제 20대가 콘텐츠를 기획·제작
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
