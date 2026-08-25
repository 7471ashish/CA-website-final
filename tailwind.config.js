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
          950: '#0a192f', // Premium Night Obsidian Base
          900: '#112240', // Night Surface Cards
          850: '#172d50', // Night Hover State
          800: '#1c5f94', // Official ICAI Emblem Blue (Primary Brand)
          700: '#2474b3', // Vibrant ICAI Blue
          600: '#348dd1', // Light Vibrant Blue
          500: '#4ea5ec',
          400: '#75bdf7',
          100: '#e4f1fc',
          50: '#f0f7fe',
        },
        icai: {
          900: '#112240',
          800: '#1c5f94', // Main ICAI Logo Blue
          700: '#2474b3',
          600: '#348dd1',
          500: '#4ea5ec',
          100: '#e4f1fc',
          50: '#f0f7fe',
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
        'premium': '0 20px 45px -15px rgba(28, 95, 148, 0.15)',
        'card-hover': '0 20px 40px -10px rgba(28, 95, 148, 0.18)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
