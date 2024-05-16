/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#9dbc98"
      },
      fontFamily: {
        poppins: "poppins, sans-serif",
        open: "'Open Sans', sans-serif",
        berlin: "Berlin sans FB",
      }
    },
  },
  plugins: [],
}
