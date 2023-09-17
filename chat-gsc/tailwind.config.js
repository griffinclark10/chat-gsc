/** @type {import('tailwindcss').Config} */

function generateButtonAnimations(distance) {
  return {
    [`buttonOpen${distance/42}`]: {
      "0%": { opacity: "0", transform: `translateX(${distance}px)` },
      "100%": { opacity: "1", transform: "translateX(0px)" }
    },
    [`buttonClose${distance/42}`]: {
      "0%": { opacity: "1", transform: "translateX(0px)" },
      "100%": { opacity: "0", transform: `translateX(${distance}px)` }
    },
  };
}
function generateButtonAnimationConfig(distance) {
  return {
    [`buttonOpen${distance/42}`]: `buttonOpen${distance/42} 0.5s ease-in-out forwards`,
    [`buttonClose${distance/42}`]: `buttonClose${distance/42} 0.5s ease-in-out forwards`,
  };
}

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
        ...generateButtonAnimations(42),
        ...generateButtonAnimations(84),
        ...generateButtonAnimations(126),
        ...generateButtonAnimations(168),
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

        ...generateButtonAnimationConfig(42),
        ...generateButtonAnimationConfig(84),
        ...generateButtonAnimationConfig(126),
        ...generateButtonAnimationConfig(168),
      },
    },
  },
  plugins: [],
  
};


