const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './build'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: 'favicon.ico' },
        { from: 'public/logo192.png', to: 'logo192.png' },
        { from: 'public/logo512.png', to: 'logo512.png' },
        { from: 'public/manifest.json', to: 'manifest.json' },
        { from: 'public/robots.txt', to: 'robots.txt' },
        { from: 'src/cog1.svg', to: 'cog1.svg' },
        { from: 'src/cog2.svg', to: 'cog2.svg' },
        { from: 'src/cog3.svg', to: 'cog3.svg' },
        { from: 'src/cog4.svg', to: 'cog4.svg' }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
