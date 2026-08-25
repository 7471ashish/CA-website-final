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
        navy: {
          950: '#0a1e35', // Deep Luxury Navy
          900: '#102c4c', // User's Exact Deep Royal Navy Color
          850: '#13345a',
          800: '#163b65',
          700: '#1e4c80',
          600: '#2a63a3',
          500: '#3e7ec7',
          400: '#649ee8',
          100: '#e5effa',
          50: '#f0f6fd',
        },
        icai: {
          950: '#0a1e35',
          900: '#102c4c', // Exact Color Swatch
          850: '#13345a',
          800: '#163b65',
          700: '#1e4c80',
          100: '#e5effa',
          50: '#f0f6fd',
        },
        gold: {
          700: '#87671d',
          600: '#a37e25',
          500: '#c59b27', // Rich CA Gold
          400: '#dbb13b', // Bright Gold Accent
          300: '#eccb69',
          200: '#f5e1a2',
          100: '#faedd0',
          50: '#fdf9f0',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 10px 30px -5px rgba(197, 155, 39, 0.35)',
        'gold-sm': '0 4px 15px -2px rgba(197, 155, 39, 0.25)',
        'premium': '0 20px 45px -15px rgba(16, 44, 76, 0.18)',
        'card-hover': '0 20px 40px -10px rgba(16, 44, 76, 0.22)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
