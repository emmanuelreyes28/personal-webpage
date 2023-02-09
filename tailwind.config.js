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
      colors: {
        "dark-blue": "#0081C9",
        "light-blue": "#5BC0F8",
        "sky-blue": "#86E5FF",
        orange: "#FFC93C",
      },
    },
  },
  plugins: [],
};
