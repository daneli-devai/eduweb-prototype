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
        brand: {
          orange: '#FF8A00',
          yellow: '#FFD600',
          teal: '#00D1FF',
          blue: '#2962FF',
          purple: '#7E22CE',
          violet: '#8B5CF6',
          indigo: '#4F46E5',
        },
        surface: {
          light: '#F8FAFC',
          lavender: '#F5F3FF',
          mint: '#F0FDFA',
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #FF8A00, #FFD600, #00D1FF, #2962FF, #7E22CE)',
        'gradient-soft': 'linear-gradient(to bottom right, #F5F3FF, #F0FDFA)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}