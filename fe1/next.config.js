/** @type {import('next').NextConfig} */
const { ModuleFederationPlugin } = require("webpack").container;

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack5: true,
  webpack: (config, options) => {
    if (!options.isSrver) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "fe1",
          filename: "remoteEntry.js",
          remoteType: "var",
          exposes: {
            "./header": "./components/Header",
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
  swcMinify: true,
};

module.exports = nextConfig;
