'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
    const shouldDark = stored === 'dark' || (!stored && prefersDark) // use system preference if no stored value
    setIsDark(shouldDark)
    if (shouldDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Set initial value based on system preference if not stored
    if (!stored) {
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-slate-800/70 text-gray-700 dark:text-gray-200 shadow hover:shadow-md transition-all"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
