/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      container: {
        padding: {
          sm: '20px',
          lg: '20px',
          xl: '20px',
          '2xl': '20px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1210px',
          '2xl': '1210px'
        },
        colors: {
          "bg-color": '#010510'
        },
      },
    },
  },
  plugins: [],
}
