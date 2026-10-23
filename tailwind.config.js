/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#172554',
          'navy-dark': '#0f172a',
          'navy-light': '#1e3a8a',
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          ice: '#F3F7FF',
          'ice-alt': '#EBF2FF',
          text: '#1E293B',
          muted: '#64748B',
        },
        primaryGrade: {
          DEFAULT: '#F5A623',
          light: '#FFF8EC',
          border: '#FDE68A',
          dark: '#D97706',
        },
        secondaryGrade: {
          DEFAULT: '#10B981',
          light: '#ECFDF5',
          border: '#A7F3D0',
          dark: '#059669',
        },
        highGrade: {
          DEFAULT: '#8B5CF6',
          light: '#F5F3FF',
          border: '#DDD6FE',
          dark: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(23, 37, 84, 0.05), 0 1px 4px -1px rgba(23, 37, 84, 0.03)',
        'soft': '0 8px 24px -4px rgba(23, 37, 84, 0.08), 0 4px 12px -2px rgba(23, 37, 84, 0.04)',
        'soft-lg': '0 16px 40px -8px rgba(23, 37, 84, 0.12), 0 8px 20px -4px rgba(23, 37, 84, 0.06)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-primary': '0 0 25px -5px rgba(245, 166, 35, 0.4)',
        'glow-secondary': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-high': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '24px',
      }
    },
  },
  plugins: [],
};
