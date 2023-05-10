/** @type {import('next').NextConfig} */
const { ModuleFederationPlugin } = require("webpack").container;

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  distDir: "build",
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "fe2",
          filename: "remoteEntry_2.js",
          remoteType: "var",
          exposes: {
            "./squareRoot": "./src/utils/getSquareRoot",
          },
          shared: [
            {
              react: {},
            },
            {
              "react-dom": {
                eager: true,
                singleton: true,
                requiredVersion: false,
              },
            },
          ],
        })
      );
    }
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
