/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./views/**/*.ejs", // Include all EJS templates
    "./public/js/**/*.js", // Include any custom JavaScript files
  ],
  theme: {
    extend: {
      screens: {
        xs: "470px",
        tiny: "320px",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
