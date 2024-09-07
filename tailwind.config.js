/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFFF00'
        },
        purple: {
          500: '#FF00F5'
        },
        lightblue: {
          500: '#7DF9FF'
        },
        beige: {
          500: '#F9F5F2'
        },
        green: {
          500: '#2FFF2F'
        },
        red: {
          500: '#FF4911'
        }
      },
      boxShadow: {
        DEFAULT: '2px 2px 0px 0px rgba(0,0,0,1)',
        lg: '4px 4px 0px 0px rgba(0,0,0,1)'
      },
      fontFamily: {
        sans: ['"Public Sans"']
      }
    }
  },
  plugins: []
}
