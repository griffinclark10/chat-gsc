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
        fadeIn: {
          "0%": { opacity: "0", display: "none", visibility: "hidden" },
          "100%": { opacity: "1", display: "visible", visibility: "visible" }
        },
        fadeOut: {
          "0%": { opacity: "1", display: "visible", visibility: "visible" },
          "100%": { opacity: "0", display: "none", visibility: "hidden" }
        },
        wiggle: {
          "0%, 100%": { transform: "scale(1) rotate(-5deg)" },
          "50%": { transform: "scale(1.1) rotate(-5deg)" },
          "25%, 75%": { transform: "scale(1.1) rotate(5deg)" }
        },
        longWiggle: {
          "0%, 100%": { transform: "scale(1) rotate(-5deg)" },
          "50%": { transform: "scale(1.2) rotate(-5deg)" },
          "25%, 75%": { transform: "scale(1.1) rotate(5deg)" }
        },

        //for sidebar open/close animation:
        hideSidebarAfterDelay: {
          "0%": { opacity: "1", visibility: "visible" },
          "99%": { opacity: "0", visibility: "visible" },
          "100%": { opacity: "0", display: "none", visibility: "hidden" }
        },
        openMain: {
          "0%": { opacity: "0", display: "none", visibility: "hidden" },
          "50%": { opacity: "0", display: "none", visibility: "visible" },
          "100%": { opacity: "1", visibility: "visible" }
        },

        //for the header animations:
        tableOpen: {
          "0%": { opacity: "1", transform: "rotateX(0deg)" },
          "25%": { opacity: "0.75", transform: "rotateX(45deg)" },
          "50%": { opacity: "0.5", transform: "rotateX(90deg)" },
          "75%": { opacity: "0.25", transform: "rotateX(135deg)" },
          "100%": { opacity: "0", transform: "rotateX(180deg)" }
        },
        tableClose: {
          "0%": { opacity: "0", transform: "rotateX(180deg)" },
          "25%": { opacity: "0.25", transform: "rotateX(135deg)" },
          "50%": { opacity: "0.5", transform: "rotateX(90deg)" },
          "75%": { opacity: "0.75", transform: "rotateX(45deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" }
        },
        buttonOpen1: {
          "0%": { opacity: "0", display: "none", transform: "translateX(42px)" },
          "100%": { opacity: "1", display: "block", transform: "translateX(0px)" }
        },
        buttonClose1: {
          "0%": { opacity: "1", display: "block", transform: "translateX(0px)" },
          "100%": { opacity: "0", display: "none", transform: "translateX(42px)" }
        },
        buttonOpen2: {
          "0%": { opacity: "0", display: "none", transform: "translateX(84px)" },
          "100%": { opacity: "1", display: "block", transform: "translateX(0px)" }
        },
        buttonClose2: {
          "0%": { opacity: "1", display: "block", transform: "translateX(0px)" },
          "100%": { opacity: "0", display: "none", transform: "translateX(84px)" }
        },
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
        longWiggle: "longWiggle 500ms ease-in-out",
        hideSidebar: "hideSidebarAfterDelay 0.4s ease-in-out forwards",
        openMainSlowly: "openMain 0.7s ease-in-out",
        tableOpen: "tableOpen 0.5s ease-in-out forwards",
        tableClose: "tableClose 0.5s ease-in-out forwards",
        titleFadeIn: "fadeIn 0.25s ease-in-out forwards",
        titleFadeOut: "fadeOut 0.25s ease-in-out forwards",

        buttonOpen1: "buttonOpen1 1s ease-in-out forwards",
        buttonClose1: "buttonClose1 1s ease-in-out forwards",
        buttonOpen2: "buttonOpen2 0.5s ease-in-out forwards",
        buttonClose2: "buttonClose2 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  
};


