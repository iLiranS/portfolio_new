/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "(var(--background))",
        foreground: "(var(--foreground))",
        codeBackground:"(var(--codeBackground))",
        codeForeground:"(var(--codeForeground))",

        'lightBG':'#F0E7DB',
        'darkBG':'#202023',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scaleUp:'scaleUp 0.5s ease-in-out 1 forwards',
        pageIn:'pageIn 0.5s ease-in-out 1 forwards',
        pageInParagraph:'pageInParagraph 0.5s ease-out 1 forwards',
        pageOutParagraph:'pageOutParagraph 0.5s ease-out 1 forwards',
        pulse50To20:'pulse50To20 0.5s ease infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}