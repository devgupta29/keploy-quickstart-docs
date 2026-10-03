import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keploy Go Quickstart Tutorial | Testing Without Writing Tests',
  description:
    'A beginner-friendly, step-by-step guide to using Keploy with a Go application — record real API calls and replay them as automated tests, no test code required.',
  keywords: ['Keploy', 'Go', 'testing', 'API testing', 'test automation', 'quickstart', 'tutorial'],
  authors: [{ name: 'Keploy DevRel Tutorial' }],
  openGraph: {
    title: 'Keploy Go Quickstart Tutorial',
    description: 'Record API calls. Replay as tests. Zero test code required.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
