/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: colors.green,
        secondary: colors.blue,
        neutral: colors.gray,
        accent: colors.orange,
        success: colors.green,
        warning: colors.yellow,
        info: colors.blue,
        danger: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
