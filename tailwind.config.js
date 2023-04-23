/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Iranyekan":["Iranyekan","sans-serif"],
        "IranyekanBold":["IranyekanBold","sans-serif"],
        "IranyekanThin":["IranyekanThin","sans-serif"],
        "IranyekanRegular":["yekanRegular","sans-serif"],
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0)' },
          '50%':{ transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        move: 'move 5s ease-in-out  infinite ',
      },
      boxShadow: {
        'inset': '0 0 15px',
      }
    },
  },
  plugins: [],
}

