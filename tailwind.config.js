/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace'],
        'syne': ['"Syne"', 'sans-serif'],
        'instrument': ['"Instrument Sans"', 'sans-serif']
      },
      colors: {
        'primary': {
          light: '#ffffff',
          dark: '#0a0a0a'
        },
        'secondary': {
          light: '#e5fbf8',
          dark: '#1a1a1a'
        },
        'card': {
          light: '#ffffff',
          dark: '#171717'
        },
        'text': {
          primary: {
            light: '#1f2937',
            dark: '#e5e5e5'
          },
          secondary: {
            light: '#57534e',
            dark: '#a3a3a3'
          }
        },
        'border': {
          DEFAULT: {
            light: '#e5e7eb',
            dark: '#404040'
          },
          focus: {
            light: '#3b82f6',
            dark: '#8feeff'
          }
        },
        'accent': {
          cyan: '#8feeff',
          orange: '#ff630f',
          gold: '#ffd700',
          purple: '#a78bfa'
        }
      }
    },
  },
  plugins: [],
}
