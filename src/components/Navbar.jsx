import React from 'react'

/**
 * Navbar with branding and an accessible theme toggle button.
 * Receives `theme` and `toggleTheme` from the parent (App).
 */
function Navbar({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 h-14
        flex items-center justify-between px-4 sm:px-8
        bg-white/80 dark:bg-dark-surface/90
        backdrop-blur-md
        border-b border-border-light dark:border-dark-border
        shadow-sm
      "
      role="banner"
    >
      {/* Brand */}
      <div className="flex items-center gap-2 select-none">
        <span
          aria-hidden="true"
          className="text-xl font-bold text-brand"
        >
          ₿
        </span>
        <span className="text-base font-semibold tracking-wide text-txt-primary dark:text-dark-txt">
          CurrencyConverter
        </span>
      </div>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="
          relative w-12 h-6 rounded-full
          bg-border-light dark:bg-brand
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
          focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-surface
          cursor-pointer
        "
      >
        {/* Thumb */}
        <span
          className={`
            absolute top-0.5 left-0.5
            w-5 h-5 rounded-full
            bg-white dark:bg-dark-bg
            shadow-md
            flex items-center justify-center text-xs
            transform transition-transform duration-300
            ${isDark ? 'translate-x-6' : 'translate-x-0'}
          `}
          aria-hidden="true"
        >
          {isDark ? '🌙' : '☀️'}
        </span>
      </button>
    </header>
  )
}

export default Navbar
