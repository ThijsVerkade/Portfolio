/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4EC2DF',
        secondary: '#11111F',
        backgroundPrimary: '#4EC2DF',
        backgroundSecondary: '#11111F',
      }
    },
  },
  plugins: [],
}