/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/*.{js,jsx,ts,tsx}',
    './*.{js,jsx,ts,tsx}',
    './pages/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
