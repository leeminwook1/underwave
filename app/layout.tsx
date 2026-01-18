import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Underwave | 언더웨이브 - 20대 트렌드 마케팅 에이전시',
  description: '20대 트렌드 매거진',
  keywords: ['Underwave', '언더웨이브', 'GRAB', '그랩', '20대 트렌드', '마케팅 에이전시', '트렌드 매거진', '마케팅 컨설팅', 'SNS 마케팅', '브랜디드 콘텐츠'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

