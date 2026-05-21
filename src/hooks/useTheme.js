import { useEffect, useState } from 'react'

/**
 * Custom hook that manages light/dark theme with localStorage persistence.
 * Applies the 'dark' class to <html> for Tailwind's darkMode: 'class' strategy.
 * Falls back to the OS preference on first visit.
 */
function useTheme() {
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') return stored
    } catch (_) {
      // localStorage unavailable (e.g., SSR or private browsing restrictions)
    }
    // Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch (_) {}
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}

export default useTheme
