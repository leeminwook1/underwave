'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Grab from '@/components/Grab'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 탭 변경 시 페이지 상단으로 스크롤하고 전환 효과 적용
  useEffect(() => {
    if (mounted) {
      setIsTransitioning(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // 전환 효과 후 컨텐츠 렌더링
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [activeTab, mounted])

  if (!mounted) {
    return null
  }

  const renderContent = () => {
    // 전환 중에는 이전 컨텐츠 유지
    if (isTransitioning) {
      return null
    }

    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} />
      case 'about':
        return <About />
      case 'mission':
        return <Mission />
      case 'services':
        return <Services />
      case 'projects':
        return <Projects setActiveTab={setActiveTab} />
      case 'grab':
        return <Grab />
      case 'contact':
        return <Contact />
      default:
        return <Hero setActiveTab={setActiveTab} />
    }
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Cursor />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="min-h-screen">
        {renderContent()}
      </div>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  )
}
