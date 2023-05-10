/** @type {import('next').NextConfig} */
const { ModuleFederationPlugin } = require("webpack").container;

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    if (!options.isSrver) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "fe1",
          filename: "remoteEntry.js",
          remoteType: "var",
          exposes: {
            "./header": "./src/components/Header",
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
};

module.exports = nextConfig;
