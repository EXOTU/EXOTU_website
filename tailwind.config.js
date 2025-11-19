/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          'dark': '#0c1169',
          'vibrant': '#5e38dc',
          'muted': '#675ac3',
        },
        'secondary': {
          'dark': '#00003c',
          'royal': '#192ca1',
          'light': '#c8b6f5',
        },
      },
      fontFamily: {
        bruno: ["Bruno Ace", "sans-serif"],
        iceberg: ["Iceberg", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
