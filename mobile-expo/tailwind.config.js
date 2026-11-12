/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#031516',
          surface: '#072424',
          accent: '#4ee3a5',
          mint: '#34d399',
          light: '#f3f7f6',
        }
      }
    },
  },
  plugins: [],
};
