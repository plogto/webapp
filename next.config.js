/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
const withPlugins = require("next-compose-plugins");

const plugins = [withBundleAnalyzer, withPWA];

const nextConfiguration = {
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
    domains: process.env.NEXT_PUBLIC_IMAGES_DOMAINS.split(", "),
  },
  env: {
    PLOG_ACCOUNT: process.env.NEXT_PUBLIC_PLOG_ACCOUNT,
  },
};

/** @type {import('next').NextConfig} */
module.exports = withPlugins([...plugins], nextConfiguration);
