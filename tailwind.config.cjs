/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif']
      },
      colors: {
        'brand-blue': 'hsl(225, 100%, 98%)',
        'brand-bright-blue': 'hsl(225, 100%, 94%)',
        'button-blue': 'hsl(245, 75%, 52%)',
        'hover-color': 'hsl(245, 83%, 68%)'
      },
      backgroundImage: {
        'hero-pattern': "url('/pattern-background-desktop.svg')",
        'mobile-pattern': "url('/pattern-background-mobile.svg.')",
      },
      screens: {
        'lg': '376px',
      },
    },
  },
  plugins: [],
}