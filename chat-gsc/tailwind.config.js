/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1) rotate(-5deg)" },
          "50%": {transform: "scale(1.1) rotate(-5deg)"},
          "25%, 75%": { transform: "scale(1.1) rotate(5deg)" }
        },
        longWiggle: {
          "0%, 100%": { transform: "scale(1) rotate(-5deg)" },
          "50%": {transform: "scale(1.2) rotate(-5deg)"},
          "25%, 75%": { transform: "scale(1.1) rotate(5deg)" }
        },
        //for sidebar open/close animation:
        hideAfterDelay :{
          "0%": {opacity: "1", visibility: "visible"},
          "99%" :{opacity: "0",visibility: "visible"},
          "100%": {opacity: "0", display:"none", visibility: "hidden"}
        },
        openMain :{
          "0%": {opacity: "0", display:"none", visibility: "hidden"},
          "50%" :{opacity: "0", display: "none", visibility: "visible"},
          "100%": {opacity: "1", visibility: "visible"}
        }
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
        longWiggle: "longWiggle 500ms ease-in-out",
        hideAfterDelay: "hideAfterDelay 0.3s ease-in-out forwards",
        openMainSlowly: "openMain 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
  
}


