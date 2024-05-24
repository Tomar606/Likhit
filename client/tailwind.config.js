/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg1': "#fff1e6",
        'bg2': "#f8d1a6",
        'palgreen': '#14483e',
        'palgreen2': '#3c6e71',
        'butbg': '#353535',
        'textc': "#353535"
      },
    },
  },
  plugins: [],
}