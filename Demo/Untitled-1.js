import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Sans :['Open Sans','serif'],
      },
      textShadow: {
        'glow': '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)',
      },
      colors:{
        black:{
          DEFAULT : '#000',
          100 : '#000319',
        }
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },

    },
  },
  variants: {
    extend: {
      textShadow: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities } : any) {
      addUtilities({
        '.custom-scrollbar': {
          '::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: '#1a1a1a',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#4b5563',
            borderRadius: '10px',
            border: '2px solid #1a1a1a',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#6b7280',
          },
          '::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#9ca3af',
          },
        },
      }, ['responsive']);
    },
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    function({ addUtilities }:any) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
export default config;
