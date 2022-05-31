/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        brand: ["Fredoka One"],
      },
      fontSize: {
        tiny: "15px",
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
      ...colors,
      // primary
      "primary-light": "var(--primary-light)",
      primary: "var(--primary)",
      // danger
      "danger-light": "var(--danger-light)",
      danger: "var(--danger)",
      // background
      "background-pure": "var(--background-pure)",
      background: "var(--background)",
      "background-light": "var(--background-light)",
      "background-medium": "var(--background-medium)",
      "background-dark": "var(--background-dark)",
      // foreground
      "foreground-light": "var(--foreground-light)",
      "foreground-medium": "var(--foreground-medium)",
      "foreground-dark": "var(--foreground-dark)",
      foreground: "var(--foreground)",
      "foreground-pure": "var(--foreground-pure)",
    },
  },
  variants: {
    extend: {
      borderWidth: "last",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
};
