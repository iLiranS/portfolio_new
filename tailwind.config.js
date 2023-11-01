/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      screens:{
        asideMax:'1130px'
      },
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
        },
        pageInParagraph:{
          '0%':{transform:'translate(0,100%)'},
          '100%':{transform:'translate(0,0%)'}
        },
        pageOutParagraph:{
          '0%':{transform:'translate(0,0%)'},
          '100%':{transform:'translate(0,100%)'}
        },
        pulse50To20:{
          '0%':{opacity:'50'},
          '100%':{opacity:'20'}
        }
      },
      animation:{
        scaleUp:'scaleUp 0.5s ease-in-out 1 forwards',
        pageIn:'pageIn 0.5s ease-in-out 1 forwards',
        pageInParagraph:'pageInParagraph 0.5s ease-out 1 forwards',
        pageOutParagraph:'pageOutParagraph 0.5s ease-out 1 forwards',
        pulse50To20:'pulse50To20 0.5s ease infinite'
      }
    },
  },
  darkMode:'class',
  plugins: [],
}
