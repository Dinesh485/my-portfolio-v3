const { screens } = require('tailwindcss/defaultTheme')
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    screens:{
      'xs': '380px',
       ...screens,
    },
    extend: {
       
       fontFamily:{
         'Roboto': ['Roboto', 'sans-serif'],
         'courgette': ['Courgette', 'cursive'],
       },
     
    },
  },
  variants: {
    extend: {
      transform: ['group-hover']
    },
  },
  plugins: [],
}
