'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram } from 'react-icons/fa'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative bg-gradient-to-br from-pink-50/30 via-white to-pink-50/30 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">GRAB (그랩)</span>
          </h2>
        </motion.div>

        {/* 프로젝트 소개 & 운영 목적 - 좌우 레이아웃 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* 프로젝트 소개 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-primary-100 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">그랩 프로젝트 소개</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">마케팅 에이전시 UNDERWAVE(언더웨이브)의 '20대 트렌드 매거진'</p>
                </div>
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">필터버블 탈피, 리얼 데이터 수집, 나노트렌드 조사</p>
                </div>
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">서포터즈 개념의 20대 에디터들이 직접 만들어가는 기록</p>
                </div>
              </div>
            </div>

            {/* 운영 목적 */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-pink-100 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">그랩 운영 목적</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pink-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">20대 트렌드에 대한 리얼 데이터 수집과 소통을 위한 리서치 채널</p>
                </div>
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pink-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">일상 속 마이크로 트렌드를 관찰·기록</p>
                </div>
                <div className="flex items-start bg-white p-3 md:p-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pink-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">B2B 트렌드 제안 시 실증 기반 미디어 아카이브 역할</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRAB 소개 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 md:mb-20"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-16 rounded-2xl md:rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
            {/* 장식 요소 */}
            <div className="absolute top-5 left-5 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-pink-200 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-8">
                <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-primary-100 to-pink-100 rounded-full text-primary-700 font-semibold text-sm md:text-base mb-4">
                  GRAB 소개
                </span>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed text-center space-y-3 md:space-y-4">
                  <p className="flex items-start justify-center">
                    <span className="text-3xl md:text-5xl text-primary-400 mr-1 md:mr-2">"</span>
                    <span>그랩은 지나가는 사람들의 이야기, 추억, 가치를 붙잡는다는 의미예요!</span>
                  </p>
                  <p>저희는 그랩유, 그랩잡, 그랩월로 나누었는데,</p>
                  <p>혹시 이게 뭔지 알 것 같으세요?</p>
                  <p className="flex items-end justify-center">
                    <span>본인은 어느 그랩인가요?</span>
                    <span className="text-3xl md:text-5xl text-primary-400 ml-1 md:ml-2">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3가지 GRAB 카테고리 - 깔끔한 디자인 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 md:mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* 그랩유 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200">
                {/* 이미지 영역 */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-cyan-50 to-cyan-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" 
                    alt="대학생" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* 컨텐츠 영역 */}
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4 md:mb-6">
                    <p className="text-cyan-600 text-xs md:text-sm font-medium mb-2">Grab University</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">그랩유</h3>
                    <div className="inline-block px-5 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-sm">
                      <span className="text-white font-bold text-base md:text-lg">대학생</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                      학점, 과제, 진로 고민 사이에서<br/>
                      자신만의 길을 찾아가는<br/>
                      대학생의 일상
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 그랩잡 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200">
                {/* 이미지 영역 */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" 
                    alt="취업준비생" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* 컨텐츠 영역 */}
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4 md:mb-6">
                    <p className="text-green-600 text-xs md:text-sm font-medium mb-2">Grab Job</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">그랩잡</h3>
                    <div className="inline-block px-5 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-sm">
                      <span className="text-white font-bold text-base md:text-lg">취업 준비생</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                      실전에서 나만의 색깔을<br/>
                      찾아가는 사람,<br/>
                      불안 속에서도 앞으로 나아가는 용기
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 그랩월 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200">
                {/* 이미지 영역 */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80" 
                    alt="직장인" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* 컨텐츠 영역 */}
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4 md:mb-6">
                    <p className="text-amber-600 text-xs md:text-sm font-medium mb-2">Grab Work</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">그랩월</h3>
                    <div className="inline-block px-5 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-sm">
                      <span className="text-white font-bold text-base md:text-lg">직장인</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                      워라밸과 자아실현 사이,<br/>
                      일상의 소확행을 찾으며<br/>
                      진짜 나를 잃지 않는 사람
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl max-w-2xl mx-auto">
            <FaInstagram className="text-4xl md:text-5xl text-primary-500 mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">GRAB 인스타그램</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">20대의 진짜 이야기를 만나보세요</p>
            <a
              href="https://www.instagram.com/grab_mag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 md:space-x-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-primary-500/90 to-primary-600/90 text-white rounded-full font-semibold text-lg md:text-xl hover:shadow-2xl transition-all"
            >
              <FaInstagram className="text-xl md:text-2xl" />
              <span>@grab_mag 방문하기</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
