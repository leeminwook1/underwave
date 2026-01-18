'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 여기에 실제 폼 제출 로직을 구현하세요
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    alert('메시지가 전송되었습니다!')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+82 10-1234-5678',
      href: 'tel:+821012345678',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Seoul, South Korea',
      href: '#',
    },
  ]

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
            <span className="gradient-text">Contact Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-3 md:mb-4"></div>
          <p className="text-gray-700 text-base md:text-lg">
            프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">연락처 정보</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              새로운 기회와 도전을 항상 환영합니다. 
              아래 연락처로 편하게 연락주세요!
            </p>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 md:space-x-4 glass p-3 md:p-4 rounded-xl hover:bg-primary-500/10 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-2.5 md:p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <info.icon className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600">{info.title}</p>
                    <p className="font-semibold text-sm md:text-base text-gray-800">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map or Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 md:mt-8 glass p-4 md:p-6 rounded-xl md:rounded-2xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-700 text-center text-sm md:text-base">
                  📍 Location Map
                  <br />
                  <span className="text-xs md:text-sm">Seoul, South Korea</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-800 text-sm md:text-base"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-800 text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-800 text-sm md:text-base"
                  placeholder="프로젝트 문의"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none text-gray-800 text-sm md:text-base"
                  placeholder="메시지를 입력하세요..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-500/90 to-primary-600/90 text-white rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>메시지 보내기</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

