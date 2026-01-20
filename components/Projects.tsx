'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight, FaTag } from 'react-icons/fa'
import { useState } from 'react'

interface ProjectsProps {
  setActiveTab?: (tab: string) => void
}

export default function Projects({ setActiveTab }: ProjectsProps = {}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'branding', name: '브랜딩' },
    { id: 'campaign', name: '캠페인' },
    { id: 'content', name: '콘텐츠' },
    { id: 'research', name: '리서치' },
  ]

  const projects = [
    {
      id: 0,
      title: 'GRAB (그랩)',
      category: 'content',
      client: '20대 에디터 서포터즈',
      description: '20대 트렌드 매거진 - 필터버블 탈피, 리얼 데이터 수집, 나노트렌드 조사',
      image: '/images/grab.png',
      tags: ['트렌드 매거진', '20대', 'SNS'],
      isGrab: true,
    },
    {
      id: 1,
      title: '20대 뷰티 트렌드 리서치',
      category: 'research',
      client: '글로벌 화장품 브랜드',
      description: '20대 소비자의 뷰티 트렌드 분석 및 인사이트 도출',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      tags: ['트렌드 분석', '소비자 조사', '인사이트'],
    },
    {
      id: 2,
      title: 'SNS 마케팅 캠페인',
      category: 'campaign',
      client: '패션 브랜드',
      description: '인스타그램 기반 브랜드 인지도 향상 캠페인',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tags: ['SNS 마케팅', '인플루언서', '콘텐츠 제작'],
    },
    {
      id: 3,
      title: '브랜드 리포지셔닝',
      category: 'branding',
      client: 'F&B 스타트업',
      description: 'MZ세대 타겟 브랜드 아이덴티티 재정립',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
      tags: ['브랜드 전략', 'BI 개발', '포지셔닝'],
    },
    {
      id: 4,
      title: '브랜디드 콘텐츠 제작',
      category: 'content',
      client: '테크 기업',
      description: '브랜드 스토리를 담은 영상 콘텐츠 기획 및 제작',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      tags: ['콘텐츠 기획', '영상 제작', '스토리텔링'],
    },
    {
      id: 5,
      title: '대학생 라이프스타일 조사',
      category: 'research',
      client: '교육 플랫폼',
      description: '대학생 일상 및 소비 패턴 심층 분석',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
      tags: ['정성 조사', '데이터 분석', '리포트'],
    },
    {
      id: 6,
      title: '신제품 론칭 캠페인',
      category: 'campaign',
      client: '뷰티 브랜드',
      description: '신제품 론칭을 위한 통합 마케팅 캠페인',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
      tags: ['론칭', '통합 마케팅', 'PR'],
    },
    {
      id: 7,
      title: '브랜드 아이덴티티 구축',
      category: 'branding',
      client: '라이프스타일 브랜드',
      description: '브랜드 철학을 담은 BI 및 가이드라인 개발',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      tags: ['BI 디자인', '브랜드 가이드', '아이덴티티'],
    },
    {
      id: 8,
      title: '인플루언서 마케팅',
      category: 'campaign',
      client: '헬스케어 브랜드',
      description: '마이크로 인플루언서 활용 제품 홍보 캠페인',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      tags: ['인플루언서', '협업', '바이럴'],
    },
    {
      id: 9,
      title: '소셜 미디어 콘텐츠 전략',
      category: 'content',
      client: '음료 브랜드',
      description: '월간 소셜 미디어 콘텐츠 기획 및 운영',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80',
      tags: ['콘텐츠 전략', 'SNS 운영', '커뮤니티'],
    },
    {
      id: 10,
      title: 'Z세대 소비 트렌드 분석',
      category: 'research',
      client: '유통 기업',
      description: 'Z세대의 소비 패턴 및 선호도 조사',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Z세대', '소비 트렌드', '시장 조사'],
    },
    {
      id: 11,
      title: '팝업스토어 기획',
      category: 'campaign',
      client: '패션 브랜드',
      description: '브랜드 경험을 극대화한 팝업스토어 기획 및 운영',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
      tags: ['팝업스토어', '오프라인', '체험 마케팅'],
    },
    {
      id: 12,
      title: '브랜드 네이밍 개발',
      category: 'branding',
      client: '스타트업',
      description: '브랜드 철학을 담은 네이밍 및 슬로건 개발',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
      tags: ['네이밍', '슬로건', '브랜드 전략'],
    },
    {
      id: 13,
      title: '유튜브 채널 운영',
      category: 'content',
      client: '교육 기업',
      description: '브랜드 유튜브 채널 콘텐츠 기획 및 제작',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
      tags: ['유튜브', '영상 콘텐츠', '채널 운영'],
    },
    {
      id: 14,
      title: '직장인 트렌드 리포트',
      category: 'research',
      client: '금융 기업',
      description: '2030 직장인의 라이프스타일 및 금융 니즈 분석',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['직장인', '라이프스타일', '트렌드 리포트'],
    },
    {
      id: 15,
      title: '시즌 프로모션 캠페인',
      category: 'campaign',
      client: '이커머스 플랫폼',
      description: '시즌별 프로모션 기획 및 크리에이티브 제작',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
      tags: ['프로모션', '이벤트', '크리에이티브'],
    },
    {
      id: 16,
      title: '패키지 디자인 리뉴얼',
      category: 'branding',
      client: '식품 브랜드',
      description: 'MZ세대 감성을 담은 패키지 디자인 리뉴얼',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['패키지 디자인', '리뉴얼', '제품 디자인'],
    },
    {
      id: 17,
      title: '인스타그램 릴스 콘텐츠',
      category: 'content',
      client: '뷰티 브랜드',
      description: '숏폼 콘텐츠 기획 및 제작으로 브랜드 인지도 향상',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      tags: ['숏폼', '릴스', 'SNS 콘텐츠'],
    },
    {
      id: 18,
      title: '대학생 소비 행동 연구',
      category: 'research',
      client: '유통 기업',
      description: '대학생의 온·오프라인 소비 행동 패턴 분석',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      tags: ['대학생', '소비 행동', '시장 조사'],
    },
    {
      id: 19,
      title: '협업 캠페인 기획',
      category: 'campaign',
      client: '라이프스타일 브랜드',
      description: '브랜드 간 협업을 통한 시너지 캠페인',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80',
      tags: ['협업', '콜라보', '캠페인'],
    },
    {
      id: 20,
      title: '브랜드 경험 디자인',
      category: 'branding',
      client: '호텔 브랜드',
      description: '고객 여정 기반 브랜드 경험 설계',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      tags: ['경험 디자인', '고객 여정', 'UX'],
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9)

  return (
    <section className="py-20 relative bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            언더웨이브가 함께한 프로젝트를 소개합니다
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setShowAll(false)
              }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              onClick={() => {
                if (project.isGrab) {
                  setActiveTab?.('grab')
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'auto' })
                  }, 0)
                }
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white rounded-full p-4 shadow-xl"
                    >
                      <FaArrowRight className="text-2xl text-primary-600" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-end mb-3">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <FaTag className="text-xs" />
                      <span>{categories.find(c => c.id === project.category)?.name}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-sm text-primary-600 font-medium mb-3">
                    {project.client}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 9 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-white border-2 border-primary-500 text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>더보기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 md:p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              함께 프로젝트를 시작하고 싶으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              언더웨이브와 함께 브랜드의 새로운 가능성을 발견하세요
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>프로젝트 문의하기</span>
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Client Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            함께한 브랜드
          </h3>
          
          {/* Slider Container */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 px-8">
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/1.png" alt="Client 1" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/2.png" alt="Client 2" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/3.png" alt="Client 3" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/4.png" alt="Client 4" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/5.png" alt="Client 5" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/6.png" alt="Client 6" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/7.png" alt="Client 7" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/8.png" alt="Client 8" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/9.png" alt="Client 9" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/10.png" alt="Client 10" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/11.png" alt="Client 11" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 px-8">
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/1.png" alt="Client 1" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/2.png" alt="Client 2" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/3.png" alt="Client 3" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/4.png" alt="Client 4" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/5.png" alt="Client 5" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/6.png" alt="Client 6" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/7.png" alt="Client 7" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/8.png" alt="Client 8" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/9.png" alt="Client 9" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/10.png" alt="Client 10" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/images/projects/11.png" alt="Client 11" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
