/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F3ECE1',
          300: '#EBE1D1',
          400: '#DDD0BB',
        },
        teagreen: {
          50: '#F4F7F4',
          100: '#E3EAE4',
          200: '#C5D6C7',
          300: '#9CB9A0',
          400: '#688A6F',
          500: '#4A6B53',
          600: '#3A5541',
          700: '#2C4233',
          800: '#1C2E21',
          900: '#132117',
          950: '#0B140D',
        },
        clay: {
          100: '#F7EDE6',
          300: '#D99F7B',
          500: '#B86B35',
          600: '#9C5427',
          700: '#7F411D',
          800: '#5C2D13',
        },
        brown: {
          600: '#7A3E1D',
          700: '#5C2D13',
          800: '#4A2411',
          900: '#33180B',
          950: '#241006',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F3EDE2',
          200: '#E5D9C7',
          300: '#D6C4AA',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          800: '#222422',
          900: '#191C1A',
          950: '#101211',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 46, 33, 0.05), 0 2px 6px -1px rgba(28, 46, 33, 0.03)',
        'card': '0 10px 30px -4px rgba(28, 46, 33, 0.08)',
        'floating': '0 20px 40px -8px rgba(28, 46, 33, 0.15)',
        'glow': '0 0 25px rgba(74, 107, 83, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
