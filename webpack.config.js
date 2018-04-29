const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: path.resolve(__dirname, 'app/assets/javascripts/components'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
