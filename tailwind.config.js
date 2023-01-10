/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "90%": { transform: "scale(1.05)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        buzz: {
          "10%, 30%": {
            transform: "translateX(7px) rotate(2deg)",
          },
          "20%, 40%": {
            transform: "translateX(-7px) rotate(-2deg)",
          },
          "50%, 70%": {
            transform: "translateX(6px) rotate(1deg)",
          },
          "60%, 80%": {
            transform: "translateX(-6px) rotate(-1deg)",
          },
          "90%": {
            transform: "translateX(2px) rotate(0)",
          },
          "100%": {
            transform: "translateX(-2px) rotate(0)",
          },
        },
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
      //warning
      "warning-light": "var(--warning-light)",
      warning: "var(--warning)",
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
