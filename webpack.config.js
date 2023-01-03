const path = require('path');

module.exports = {
  entry: './src/index.js',
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    clean: {
      keep: 'index.html'
    },
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
    ],
  },
};