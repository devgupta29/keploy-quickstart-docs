'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X, BookOpen } from 'lucide-react'
import { useTheme } from 'next-themes'

const desktopNavLinks = [
  { href: '#what-we-are-building', label: 'Overview' },
  { href: '#step-1-get-the-go-quickstart', label: 'Quickstart' },
  { href: '#step-5-record-api-traffic-with-keploy', label: 'Record' },
  { href: '#step-7-replay-and-verify-with-keploy', label: 'Replay' },
  { href: 'https://keploy.io/docs', label: 'Official Docs ↗', external: true },
]

const mobileNavLinks = [
  { href: '#what-we-are-building', label: 'Overview' },
  { href: '#prerequisites', label: 'Prerequisites' },
  { href: '#step-1-get-the-go-quickstart', label: 'Step 1: Get Quickstart' },
  { href: '#step-5-record-api-traffic-with-keploy', label: 'Step 5: Record Traffic' },
  { href: '#step-7-replay-and-verify-with-keploy', label: 'Step 7: Replay & Verify' },
  { href: '#troubleshooting-common-issues', label: 'Troubleshooting' },
  { href: 'https://keploy.io/docs', label: 'Official Docs ↗', external: true },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span>Keploy Tutorial</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {desktopNavLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-11 h-11 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {mobileNavLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="block px-3 py-2.5 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
