/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1440px'
    }, 
    extend: {
      colors: {
        primary: '#6C5DD3', 
        secondary: '#0E0932', 
        input: '#26215A', 
        success: "#0E0932", 
        warning: "#2A2A92", 
        plus: "#19F67F", 
        minus: "#F13535", 
        info: "#6C5DD3", 
        error: "#6C5DD3", 
        textDarkPrimary: "#FFFFFFCC", 
        textDarkSecondary: "#141414", 
        textLightPrimary: "#CFCFCF", 
        textLightSecondary: "#A7A7A7", 
      }, 
      backgroundImage: {
        pageGradient: 'linear-gradient(174.4deg, #050652 2.1%, #000000 25.12%, #020231 56.45%, #000132 99.63%)', 
        homeMix: 'linear-gradient(264.78deg, rgba(67, 49, 194, 0.21) 0%, rgba(67, 49, 194, 0) 0.01%, #0A0625 99.68%)', 
        quality: "url('../../assets/images/homepage5.png')", 
        privacy: "url('../../assets/images/homepage8.png')", 
        qualityGradient: "linear-gradient(180deg, #01022A 0%, rgba(9, 12, 28, 0.75) 100%)", 
        privacyGradient: "linear-gradient(180deg, #010231 33.51%, rgba(9, 12, 28, 0) 100%)", 
      }, 
    },
  },
  plugins: [
    require("flowbite/plugin"), 
    require('tailwind-scrollbar')({ nocompatible: true })],
}
