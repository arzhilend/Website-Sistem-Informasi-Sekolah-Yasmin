/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        light: {
          bg: {
            primary: '#ffffff',
            secondary: '#f8fafc',
            tertiary: '#f1f5f9'
          },
          text: {
            primary: '#0f172a',
            secondary: '#475569',
            muted: '#94a3b8'
          }
        },
        dark: {
          bg: {
            primary: '#0f172a',
            secondary: '#1e293b',
            tertiary: '#334155',
            elevated: '#475569'
          },
          text: {
            primary: '#f1f5f9',
            secondary: '#cbd5e1',
            muted: '#94a3b8'
          },
          border: {
            primary: '#334155',
            secondary: '#475569'
          }
        },
        brand: {
          'primary-light': '#2563eb',
          'primary-dark': '#3b82f6',
          'secondary-light': '#7c3aed',
          'secondary-dark': '#06b6d4'
        }
      }
    }
  },
  plugins: []
}
