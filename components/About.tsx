'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">About Underwave</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"></div>
        </motion.div>

        {/* 회사 소개 메인 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass p-8 md:p-12 rounded-2xl md:rounded-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary-600">Underwave (언더웨이브)</h3>
                <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  거대한 트렌드의 파도 아래에 존재하는<br/>
                  일상적 삶과 문화의 가치를 추구하는 마케팅 에이전시
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Underwave는 20대 소비자의 실제 일상과 문화 데이터를 기반으로 트렌드를 분석하고 
                  전략적 인사이트를 제공하는 마케팅 회사입니다. SNS 매거진과 현장 리서치를 통해 
                  수집한 리얼 데이터를 바탕으로 기업의 마케팅 전략과 브랜드 방향성을 제안합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                  alt="Underwave Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-5 md:p-6 rounded-xl border-2 border-primary-200">
              <h4 className="text-lg md:text-xl font-bold text-primary-600 mb-3 md:mb-4">Who we are</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Underwave는 20대 소비자의 실제 일상과 문화 데이터를 기반으로 트렌드를 분석하고 
                전략적 인사이트를 제공하는 마케팅 회사입니다. SNS 매거진과 현장 리서치를 통해 
                수집한 리얼 데이터를 바탕으로 기업의 마케팅 전략과 브랜드 방향성을 제안합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-5 md:p-6 rounded-xl border-2 border-primary-200">
              <h4 className="text-lg md:text-xl font-bold text-primary-600 mb-3 md:mb-4">What we do</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>마케팅 · 광고 · 홍보 전단 컨설팅</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>마케팅 대행 및 커뮤니케이션 전략 수립</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>트렌드 리서치 리포트 제공</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-5 md:p-6 rounded-xl border-2 border-primary-200">
              <h4 className="text-lg md:text-xl font-bold text-primary-600 mb-3 md:mb-4">How we work</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>자체 인스타그램 매거진 운영</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>20대 자문단(에디터)을 서포터즈 형태로 운영</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>실제 20대가 콘텐츠를 기획·제작하여 현장감 있는 리서치데이터 축적</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 조직도 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-primary-600">전체 조직도</h3>
          
          {/* 조직도 이미지 추가 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 relative rounded-3xl overflow-hidden"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80" 
                alt="Organization" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-gray-800 mb-2">Our Organization</h4>
                <p className="text-gray-700">체계적인 조직 구조로 최고의 서비스를 제공합니다</p>
              </div>
            </div>
          </motion.div>

          <div className="glass p-8 rounded-3xl">
            <div className="flex flex-col items-center">
              {/* CEO */}
              <div className="bg-gradient-to-r from-primary-500/90 to-primary-600/90 text-white px-8 py-4 rounded-xl mb-8 font-bold">
                CEO / Founder
              </div>
              
              {/* 4개 부서 */}
              <div className="grid md:grid-cols-4 gap-6 w-full mb-8">
                <div className="glass p-6 rounded-xl border-2 border-primary-200 relative">
                  <h4 className="font-bold text-primary-600 mb-4 text-center">Strategy & Research Division</h4>
                  <p className="text-sm text-gray-600 text-center mb-4">트렌드 전략 분석</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Trend Strategist</li>
                    <li>• Market Research Analyst</li>
                    <li>• Industry Insight Planner</li>
                  </ul>
                  {/* 연결선 */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-primary-300 hidden md:block"></div>
                </div>
                
                <div className="glass p-6 rounded-xl border-2 border-primary-200 relative">
                  <h4 className="font-bold text-primary-600 mb-4 text-center">Content & Media Division</h4>
                  <p className="text-sm text-gray-600 text-center mb-4">콘텐츠 미디어 분석</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Content Director</li>
                    <li>• Editorial Team</li>
                    <li>• Visual Designer / Video Editor</li>
                    <li>• SNS Channel Manager</li>
                  </ul>
                  {/* 연결선 */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-primary-300 hidden md:block"></div>
                </div>
                
                <div className="glass p-6 rounded-xl border-2 border-primary-200">
                  <h4 className="font-bold text-primary-600 mb-4 text-center">Business & Client Division</h4>
                  <p className="text-sm text-gray-600 text-center mb-4">비즈니스 분석</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Business Development Manager</li>
                    <li>• Account Manager</li>
                    <li>• Strategy Consultant</li>
                  </ul>
                </div>
                
                <div className="glass p-6 rounded-xl border-2 border-primary-200">
                  <h4 className="font-bold text-primary-600 mb-4 text-center">Operations & Growth Division</h4>
                  <p className="text-sm text-gray-600 text-center mb-4">운영·성장 분석</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Operations Manager</li>
                    <li>• Data & Knowledge Manager</li>
                    <li>• Partnership Manager</li>
                  </ul>
                </div>
              </div>

              {/* 하위 팀 - 첫 번째와 두 번째 부서 아래에 배치 */}
              <div className="grid md:grid-cols-4 gap-6 w-full">
                <div className="bg-primary-100 px-6 py-3 rounded-xl text-center font-semibold text-primary-700">
                  Mega Trend Research<br/>메가 트렌드 팀
                </div>
                <div className="bg-primary-100 px-6 py-3 rounded-xl text-center font-semibold text-primary-700">
                  Micro Trend Research<br/>마이크로 트렌드 팀
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 수익구조 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-primary-600">수익구조</h3>
          
          {/* 수익구조 배너 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12 relative rounded-3xl overflow-hidden"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-primary-100 to-primary-200">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" 
                alt="Business Model" 
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-gray-800 mb-2">Revenue Model</h4>
                <p className="text-gray-700">다양한 수익 모델로 지속 가능한 성장을 추구합니다</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '01 컨설팅 기반 수익',
                subtitle: 'Consulting',
                items: [
                  '마케팅 · 광고 · 홍보 전단 컨설팅',
                  '브랜드 커뮤니케이션 방향성 제안',
                  '프로젝트 단위 / 기업 맞춤형 계약'
                ],
                note: '기업의 현재 마케팅 상태를 진단 → 전략적 의사결정을 돕는 고부가가치 서비스'
              },
              {
                title: '02 마케팅 대행 수익',
                subtitle: 'Agency',
                items: [
                  'SNS 콘텐츠 기획 및 운영',
                  '캠페인 전략 수립 및 실행',
                  '브랜드 론칭이나 및 메시지 관리'
                ],
                note: '인사이트 → 실행까지 연결되는 실무형 수익원'
              },
              {
                title: '03 트렌드 리서치 리포트 수익',
                subtitle: 'Research',
                items: [
                  '20대 트렌드 분석 리포트',
                  '산업·주제별 리서치 자료 제공',
                  '연말 판매 또는 기업 구독형 모델'
                ],
                note: '인스타 매거진 + 20대 에디터 기반 → 현장감 있는 트렌드 데이터 자산화'
              },
              {
                title: '04 브랜디드 콘텐츠 & 광고 협업',
                subtitle: 'Branded Contents',
                items: [
                  '인스타그램 매거진 기반 브랜디드 콘텐츠',
                  '자연스러운 PPL 및 협업 캠페인'
                ],
                note: '평범한 일상 기반 콘텐츠 → 높은 신뢰도 → 광고보다 \'이야기\'에 가까운 포맷'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-400/70 to-primary-600/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg text-center">{item.subtitle}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h4>
                <ul className="space-y-2 mb-4">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    {item.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
