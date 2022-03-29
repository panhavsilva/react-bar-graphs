const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: [path.resolve(__dirname, '../'), /node_modules/],
      type: "javascript/auto",
    })
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@panhasilva/react-bar-graphs": path.resolve(__dirname, "../lib"),
    }

    return config
  },
}
