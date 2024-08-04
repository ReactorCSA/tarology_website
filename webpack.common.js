const path = require('path');
const { pageList } = require('./pages/model');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|lottie|png|jpe?g|gif|ico)$/,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    ...pageList,
  ]
};
