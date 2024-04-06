/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
      extend: {
          screens: {
              '2xl': '1552px',
          },
      },
  },
  plugins: [],
}
