/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors:{
        'lightBG':'#F0E7DB',
        'darkBG':'#202023',
      },
      keyframes:{
        scaleUp:{
          '0%':{scale:'0'},
          '75%':{scale:'1.1'},
          '100%':{scale:'1'}
        },
        pageIn:{
          '0%':{transform:'translate(0,100%)',opacity:'0'},
          '100%':{transform:'translate(0,0)',opacity:'1'}
        },
        pageOut:{
          '0%':{transform:'translate(0,0%)',opacity:'1'},
          '100%':{transform:'translate(0,100%)',opacity:'0'}
        }
      },
      animation:{
        scaleUp:'scaleUp 0.5s ease-in-out 1 forwards',
        pageIn:'pageIn 0.5s ease-in-out 1 forwards'
      }
    },
  },
  darkMode:'class',
  plugins: [],
}
