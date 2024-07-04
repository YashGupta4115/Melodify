// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    querystring: require.resolve('querystring-es3'),
  };
  return config;
};

// webpack.config.js
const path = require('path');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      querystring: require.resolve('querystring-es3'),
    },
  },
};

