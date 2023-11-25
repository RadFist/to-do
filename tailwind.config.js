/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'uncheked': "url('/src/unchecked.png')",
        'checked': "url('/src/centang.png')"
      }
    },
  }, 
  plugins: [],
}

