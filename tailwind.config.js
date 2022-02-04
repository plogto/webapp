/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
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
      minWidth: {
        6: "1.5rem",
      },
      spacing: {
        4.5: "1.125rem",
      },
      strokeWidth: {
        1.5: "1.5",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.rose,
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
