import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReduxProvider } from '@/store/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Страница отчётов',
  description: 'Страница для отчётов по предмету: "Проектирование и дизайн информационных систем"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
