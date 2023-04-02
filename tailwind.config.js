/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    // see https://daisyui.com/docs/themes/ for further customization
    themes: ['dark'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
