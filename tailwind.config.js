/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'backgroundmap': "url('./public/image/snapedit_background.jpg')" 
      }
    },
  },
  plugins: [],
}
