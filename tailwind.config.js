/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        bgColor : ["#4F48EC", "#0057FF"],
      },
      colors : {
        color : ["#4F48EC", "#0057FF"],
      },
      fontFamily : {
        poppins : "Poppins",
      }
    },
  },
  plugins: [],
}