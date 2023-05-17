/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "hero_components",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./title": "./src/app/title.js",
          },
        })
      );
    }
    return config;
  },
};
module.exports = nextConfig;
