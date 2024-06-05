/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "#5457b6",
        "soft-red": "#ed6468",
        "light-greyish-blue": "	#c3c4ef",
        "pale-red": "	#ffb8bb",
      }
    },
  },
  plugins: [],
}

