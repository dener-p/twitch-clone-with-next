/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleTwitch: '#9147ff',
        blackTwitch: '#0c0e10'
      }
    },
  },
  plugins: [],
}
