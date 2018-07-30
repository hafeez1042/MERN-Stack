/* eslint-env commonjs */

const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'client.js',
  },
  resolve: {
    alias: {
      Root: path.resolve(__dirname),
      Client: path.resolve(__dirname, 'client/'),
      Components: path.resolve(__dirname, 'client/components/'),
      Actions: path.resolve(__dirname, 'client/actions/'),
      Const: path.resolve(__dirname, 'client/const/'),
      Helpers: path.resolve(__dirname, 'client/helpers/'),
      Reducers: path.resolve(__dirname, 'client/reducers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
          'postcss-loader',
        ],
      },

    ],
  },
  plugins: [],
};
