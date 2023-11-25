/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'uncheked': "url('/src/IMG/unchecked.png')",
        'checked': "url('/src/IMG/checked.png')",
      }
    },
  }, 
  plugins: [],
}

