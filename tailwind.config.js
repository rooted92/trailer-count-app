/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Include all EJS templates
    "./public/js/**/*.js", // Include any custom JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
