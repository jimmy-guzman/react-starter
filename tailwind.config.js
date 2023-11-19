import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    // see https://daisyui.com/docs/themes/ for further customization
    themes: ['dark'],
    prefix: 'dsy-',
    logs: false,
  },
  plugins: [typography, daisyui],
}
