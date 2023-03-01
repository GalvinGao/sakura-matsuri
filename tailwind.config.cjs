/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fbf3f8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  important: '#root',
}
