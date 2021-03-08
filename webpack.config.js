var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'projection-3d-2d.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Projection3d2d',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ],
  }
};