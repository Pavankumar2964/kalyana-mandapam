import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './app/sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf5ee',
          200: '#f5ecdb',
          300: '#ede0c0',
          400: '#dfc099',
          500: '#c9a961',
          600: '#b8934d',
          700: '#8b6f3f',
          800: '#6b5635',
          900: '#4a3c26',
        },
        maroon: {
          50: '#faf7f5',
          100: '#f0e8e3',
          200: '#e3d0c8',
          300: '#d98d6e',
          400: '#c45a3a',
          500: '#a52a2a',
          600: '#942222',
          700: '#7d1f1f',
          800: '#661818',
          900: '#4d1212',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a961 0%, #b8934d 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1f1f1f 0%, #2d2d2d 100%)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

export default config
