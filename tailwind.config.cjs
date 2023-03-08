/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#222'
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        num: ['96px', '96px']
      }
    }
  },
  plugins: []
}
