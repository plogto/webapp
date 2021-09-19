/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
});
