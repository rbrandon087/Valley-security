/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'bar': '#2E4F88',
      }
    },
  },
  variants: [],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

