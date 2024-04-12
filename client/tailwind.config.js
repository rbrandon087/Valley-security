/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bar': '#2E4F88',
        'state': '#1127ba',
        'light': '#81d3ef',
        'grey': '#939598',
      },
      spacing: {
        '112': '52rem',
        '1': '4px',
        '2': '12px',
        '40': '160px',
        '72': '288px',
      },
      h: {
       '112': '28rem',
       '144': '36rem',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


