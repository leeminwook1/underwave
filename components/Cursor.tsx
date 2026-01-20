'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const outerCursorRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const rafRef = useRef<number>()

  useEffect(() => {
    // 모바일 기기 체크
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      )
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const updateMousePosition = (e: MouseEvent) => {
      // requestAnimationFrame으로 렌더링 최적화
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current && outerCursorRef.current) {
          // transform 사용으로 리플로우 방지
          cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px) scale(${isPointer ? 0.8 : 1})`
          outerCursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px) scale(${isPointer ? 1.5 : 1})`
        }
      })

      // 포인터 체크 최적화 - 자주 호출되지 않도록
      const target = e.target as HTMLElement
      const newIsPointer = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.hasAttribute('data-cursor-pointer')
      
      if (newIsPointer !== isPointer) {
        setIsPointer(newIsPointer)
      }
    }

    window.addEventListener('mousemove', updateMousePosition, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', checkMobile)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isPointer])

  // 모바일에서는 커서를 렌더링하지 않음
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* Main cursor - 작은 원 */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          backgroundColor: '#3b82f6',
          willChange: 'transform',
        }}
      />
      
      {/* Outer cursor - 큰 원 */}
      <div
        ref={outerCursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out"
        style={{
          border: '2px solid #60a5fa',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
