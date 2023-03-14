const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path);
const {
  TsconfigPathsPlugin
} = require('tsconfig-paths-webpack-plugin')

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
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    // typescript 설정
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    // @storybook/addon-docs 의 emotion 10 과의 충돌을 해결
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/core": resolvePath("node_modules/@emotion/react"),
        "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
      },
    };

    // storybook 에 emotion 관련 babel 설정추가
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("@emotion/babel-preset-css-prop")],
      },
    });

    return config;
  }
}
