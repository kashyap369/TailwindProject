/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'MPrimary-color':'#CB6A2E',
        'MSecondary-color':'#F2F4F7',
        'MFooter-color':'#272727',
      },
      fontFamily:{
        'poppins':['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

