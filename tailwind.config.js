/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme
        'surface':       '#ffffff',
        'surface-muted': '#f4f6f9',
        'border-light':  '#d1d5db',
        'txt-primary':   '#111827',
        'txt-secondary': '#6b7280',
        // Dark theme
        'dark-bg':       '#0f1117',
        'dark-surface':  '#1a1d27',
        'dark-card':     '#22263a',
        'dark-border':   '#2e3347',
        'dark-txt':      '#e2e8f0',
        'dark-muted':    '#8892a4',
        // Brand
        'brand':         '#3b82f6',
        'brand-hover':   '#2563eb',
      },
    },
  },
  plugins: [],
}

