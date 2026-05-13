import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'FLOW — Дневник эмоционального коучинга',
  description: 'Помогаем детям-спортсменам понимать свои эмоции',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
