const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';

const babelLoader = {
  test: /\.jsx$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const cssLoader = {
  test: /\.css$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        url: false
      },
    },
  ],
};

const clientConfig = {
  target: 'web',
  entry: './src/client/index.jsx',
  mode,
  output: {
    path: path.resolve(__dirname, 'build/client/public'),
    filename: 'bundle.js',
  },
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
};

const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
