const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    clean: {
      keep: /index.html/,
    },
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './assets/[name][ext][query]',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ttf$/i,
      },
    ],
  },
};