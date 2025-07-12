const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        assert: require.resolve('assert/'),
        url: require.resolve('url/'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        os: require.resolve('os-browserify/browser'),
        querystring: require.resolve('querystring-es3'),
        fs: false,
        net: false,
      };
      return webpackConfig;
    },
  },
};
