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
        blue: {
          50: '#edf9fa',
          100: '#d3f4ff', // user's light gradient start (#d3f4ff)
          200: '#a7e0e7',
          300: '#72ccd9',
          400: '#58b9cb', // user's soft turquoise gradient end (#58b9cb)
          500: '#0ca0b4',
          600: '#0b8393', // user's primary (#0b8393)
          700: '#096f7c',
          800: '#135661',
          900: '#144851',
          950: '#072a31',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#b157dd', // user's accent (#b157dd)
          600: '#9b42c6',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        orange: {
          50: '#fffdf5',
          100: '#fff9e0',
          200: '#fff0b3',
          300: '#ffe27a',
          400: '#fdd342',
          500: '#fcc20f', // user's secondary (#fcc20f)
          600: '#e0ab00',
          700: '#b88900',
          800: '#946d00',
          900: '#785700',
          950: '#473300',
        },
        brand: {
          orange: '#fcc20f',
          yellow: '#fcc20f',
          teal: '#58b9cb',
          blue: '#0b8393',
          purple: '#b157dd',
          violet: '#b157dd',
          indigo: '#0b8393',
        },
        surface: {
          light: '#F8FAFC',
          lavender: '#F5F3FF',
          mint: '#F0FDFA',
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0b8393, #fcc20f, #d3f4ff, #58b9cb, #b157dd)',
        'gradient-soft': 'linear-gradient(to bottom right, #F5F3FF, #F0FDFA)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}