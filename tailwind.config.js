/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Merriweather", "serif"],
        greet: ["'Share Tech Mono'", "monospace"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
