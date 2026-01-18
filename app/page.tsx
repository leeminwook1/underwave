'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />
      case 'about':
        return <About />
      case 'mission':
        return <Mission />
      case 'services':
        return <Services />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Cursor />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="min-h-screen">
        {activeTab === 'home' ? (
          <Hero setActiveTab={setActiveTab} />
        ) : (
          renderContent()
        )}
      </div>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  )
}
