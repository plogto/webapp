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
        128: "32rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      green: colors.green,
      yellow: colors.amber,
      indigo: colors.indigo,
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
