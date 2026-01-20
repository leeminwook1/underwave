'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

interface FooterProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:contact@underwave.kr', label: 'Email' },
    { icon: FaPhone, href: 'tel:+821082940378', label: 'Phone' },
  ]

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Vision', id: 'mission' },
    { name: 'Business', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  const handleLinkClick = (id: string) => {
    setActiveTab(id)
    // 즉시 스크롤
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, 0)
  }

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Underwave
            </motion.h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              20대 트렌드 매거진 GRAB을 운영하는
              <br />
              마케팅 에이전시 언더웨이브입니다.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg md:text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => handleLinkClick(link.id)}
                    className={`transition-colors inline-block text-sm md:text-base ${
                      activeTab === link.id
                        ? 'text-primary-600'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-800">Contact</h4>
            <div className="space-y-1.5 md:space-y-2 text-gray-600 text-xs md:text-sm">
              <p>Email: contact@underwave.kr</p>
              <p>Phone: +82 10-8294-0378</p>
              <p>주소: 서울 강남구 테헤란로 419 삼성금융프라자</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
            © {currentYear} Underwave. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm text-gray-600">
            <motion.a
              href="#"
              className="hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
