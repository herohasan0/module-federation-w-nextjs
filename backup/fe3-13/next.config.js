/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "fe3_13",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            hero_components:
              "hero_components@http://localhost:4001/_next/static/chunks/remoteEntry.js",
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
