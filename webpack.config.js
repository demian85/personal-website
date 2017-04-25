const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clientRules = {
  babel: {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            'env',
            {
              modules: false,
              targets: { browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11'] }
            }
          ],
          ['react']
        ]
      }
    }
  },
  css: {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    })
  }
};

const clientConfig = {
  target: 'web',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [clientRules.babel, clientRules.css]
  },
};

const serverConfig = {
  target: 'node',
  entry: './client/components/App.jsx',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'ServerApp.js',
    library: 'App',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader/locals',
          options: {
            modules: true
          }
        }
      }
    ]
  },
};

module.exports = [clientConfig, serverConfig];
