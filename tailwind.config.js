/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        'link': 'url("/img/arrowdown.svg")',
      },
      fontFamily: {
        "dana": "Dana Regular",
        "dana-medium": "Dana Medium",
        "dana-demiBold": "Dana DemiBold",
        "moraba": "moraba regular",
        "moraba-medium": "moraba medium",
        "moraba-demiBold": "moraba demibold",
      },
      screens: {
        'xs': '400px',
        'sm': '680px'
      },
    },

  },
  plugins: [
  function ({ addVariant }) {
    addVariant('child', '&>*');
    addVariant('child-hover', '&>*:hover');  
  },
  // require('flowbite/plugin'),
  require("@xpd/tailwind-3dtransforms"),
  require('tailwind-scrollbar'),
],
  darkMode: 'class',
}


