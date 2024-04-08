/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#11111F',
        backgroundPrimary: '#2563EB',
        backgroundSecondary: '#11111F',
      }
    },
  },
  plugins: [],
}