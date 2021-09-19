/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

module.exports = {
  jit: true,
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        tiny: "15px",
      },
      width: {
        146: "36.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      green: colors.green,
      yellow: colors.amber,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {
      borderWidth: "last",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
