const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {

    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      colors: {
        transparent: 'transparent',
        current : 'currentColor',
        'tan': '#BB9981',
        'leather' : '#825f4c',
        'meadows': {
          100: '#FFF5C7',
          125: '#F8F0C1',
          150: '#F2EBBB',
          175: '#ebe5b5',
          200: '#e4e0ae',
          250: '#d7d6a0',
          300: '#c9ca91',
          350: '#b8bd82',
          400: '#a7af72',
          450: '#97a262',
          500: '#859552',
          550: '#748744',
          600: '#637a36',
          650: '#536d2b',
          700: '#446021',
          750: '#365219',
          800: '#294512',
          850: '#1e380d',
          900: '#152a09',
          950: '#0d1d05',
          1000: '#061003',
          1050: '010300'

        }
      }
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
