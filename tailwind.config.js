/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'slide-right-slow': 'slide-right 2s ease-out forwards',
        'slide-down-slow': 'slide-down 2s ease-out forwards',
        'wiggle-rotate': 'wiggleRotate 3s ease-in-out infinite'
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        },
        wiggleRotate: {
          '0%, 100%': { transform: 'rotate(-1.75deg)' },
          '50%': { transform: 'rotate(1.75deg)' },
        }
      },
      colors: {
        primary: '#FEF3E2',
        brand: {
          light: '#F3C623',
          normal: '#FFB22C',
          warm: '#FFB22C'
        },
      },
    },
  },
  plugins: [],
}
