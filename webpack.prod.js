const path = require('path');
const { merge } = require('webpack-merge');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'app.webmanifest',
      name: 'ByIsmir - Katalog Restoran',
      short_name: 'ByIsmir',
      description: 'ByIsmir - Mengulas Berbagai Restoran Indonesia',
      crossorigin: null,
      publicPath: './',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any',
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw/sw.js'),
      swDest: './sw.bundle.js',
    }),
  ],
});
