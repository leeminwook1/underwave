'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChartLine, FaUsers, FaLightbulb, FaArrowRight } from 'react-icons/fa'

interface HeroProps {
  setActiveTab?: (tab: string) => void
}

import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Hero({ setActiveTab }: HeroProps = {}) {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 })

  const features = [
    {
      icon: FaLightbulb,
      title: '전략 컨설팅',
      description: '브랜드 방향성 및 커뮤니케이션 전략'
    },
    {
      icon: FaUsers,
      title: '마케팅 대행',
      description: 'SNS 콘텐츠 기획 및 캠페인 운영'
    },
    {
      icon: FaChartLine,
      title: '트렌드 분석',
      description: '20대 실제 데이터 기반 트렌드 리서치'
    }
  ]

  const stats = [
    { number: '500+', label: '리서치 데이터' },
    { number: '20+', label: '협업 브랜드' },
    { number: '50+', label: '20대 에디터' },
    { number: '100%', label: '고객 만족도' }
  ]

  return (
    <div className="relative bg-white">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/main.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-white/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4">
                <span className="gradient-text">Underwave</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
                언더웨이브
              </p>
            </motion.div>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-8 md:mb-12"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold mb-4 md:mb-6 leading-tight">
                거대한 트렌드의 파도 아래에 존재하는<br/>
                일상적 삶과 문화의 가치를 추구하는 마케팅 에이전시
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                20대 소비자의 실제 일상과 문화 데이터를 기반으로<br className="hidden md:block"/>
                트렌드를 분석하고 전략적 인사이트를 제공합니다
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass p-5 md:p-6 rounded-xl md:rounded-2xl hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="text-3xl md:text-4xl text-primary-500 mb-3 md:mb-4 mx-auto" />
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-primary-100/40 rounded-full blur-2xl opacity-50"></div>
      </section>

      {/* Section 2: What We Do */}
      <section ref={ref1} className="min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">What We Do</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                우리는 트렌드를 분석하지만, 목적은 사람에 있습니다.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                급변하는 흐름 속에서 사람들이 쉽게 놓치는 일상과 문화를 발견하고, 
                이를 가치 있는 인사이트로 전환합니다. 20대 에디터들과 함께 
                실제 데이터를 수집하고, 이를 기업의 마케팅 전략으로 연결합니다.
              </p>
              <motion.button
                className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                whileHover={{ x: 10 }}
              >
                <span>자세히 보기</span>
                <FaArrowRight />
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: GRAB Project */}
      <section ref={ref2} className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" 
                  alt="GRAB Magazine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            </motion.div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">GRAB Magazine</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                20대 트렌드 매거진
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                GRAB은 언더웨이브가 운영하는 20대 트렌드 매거진입니다. 
                필터버블을 탈피하고 리얼 데이터를 수집하며, 나노트렌드를 조사합니다. 
                서포터즈 개념의 20대 에디터들이 직접 만들어가는 기록입니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">마케팅 에이전시 UNDERWAVE의 &apos;20대 트렌드 매거진&apos;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">필터버블 탈피, 리얼 데이터 수집, 나노트렌드 조사</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">서포터즈 개념의 20대 에디터들이 직접 만들어가는 기록</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Approach */}
      <section ref={ref3} className="min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터와 인사이트를 통해 브랜드의 성공을 이끕니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: '리서치',
                description: '20대 에디터들과 함께 실제 트렌드 데이터를 수집하고 분석합니다.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
              },
              {
                step: '02',
                title: '전략 수립',
                description: '수집된 데이터를 바탕으로 브랜드에 맞는 마케팅 전략을 수립합니다.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
              },
              {
                step: '03',
                title: '실행 & 분석',
                description: '전략을 실행하고 결과를 분석하여 지속적으로 개선합니다.',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold text-primary-200 mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Stats */}
      <section ref={ref4} className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              숫자로 보는 언더웨이브
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView4 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-primary-100 to-primary-200">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80" 
                alt="Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section ref={ref5} className="min-h-screen flex items-center py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="gradient-text">함께 성장할 준비가 되셨나요?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
              언더웨이브와 함께 브랜드의 새로운 가능성을 발견하세요
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.button
                onClick={() => {
                  setActiveTab?.('contact')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-primary-500/90 to-primary-600/90 text-white rounded-full font-semibold text-lg md:text-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                프로젝트 문의하기
              </motion.button>
              <motion.button
                onClick={() => {
                  setActiveTab?.('about')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-8 py-4 md:px-10 md:py-5 glass rounded-full font-semibold text-lg md:text-xl glow-on-hover text-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                더 알아보기
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}
