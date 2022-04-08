/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
    swcMinify: true,
    images: {
      domains: [process.env.NEXT_PUBLIC_FILES_URL],
    },
  }),
);
