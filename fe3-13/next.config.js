/** @type {import('next').NextConfig} */
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "fe3",
        filename: "static/consumerFile.js",
        remoteType: "var",
        remotes: {
          // "fe1/header": "fe1/header@http://localhost:3000/remoteEntry.js",
          // hasan: options.isServer
          //   ? path.resolve("../fe2/remotedemo.js")
          //   : "fe2",
          fe1: options.isServer ? path.resolve("../fe1/remoteEntry.js") : "fe1",
          fe2: options.isServer ? path.resolve("/remoteEntry_2.js") : "fe2",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
