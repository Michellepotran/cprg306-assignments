module.exports = {
    // Other webpack configuration options...
    module: {
      rules: [
        // Other rules...
        {
          test: /\.json$/,
          use: 'json-loader',
        },
      ],
    },
  };