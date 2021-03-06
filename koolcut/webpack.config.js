var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './ux/App.js']
  },
  target: 'electron-renderer',
  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test:/\.(png|jpe?g|gif)$/,exclude:/node_modules/,loader: 'url-loader?limit=1024&name=/assets/[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs)$"))
  ]
}
