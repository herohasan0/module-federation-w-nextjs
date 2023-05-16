/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack5: true,
  webpack: (config, options) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    new options.webpack.container.ModuleFederationPlugin({
      name: "fe1",
      filename: "remoteEntry.js",
      remoteType: "var",
      remotes: {
        fe1: options.isServer
          ? path.resolve("../fe1/build/remoteEntry.js")
          : "fe1",
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
    });
    return config;
  },
  swcMinify: true,
};

module.exports = nextConfig;
