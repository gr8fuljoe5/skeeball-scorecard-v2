const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
const validate = require('webpack-validator')
const cssnext = require('postcss-cssnext')
const atImport = require("postcss-import")
const pkg = require('./package.json')

const nodeEnv = process.env.NODE_ENV
const src = path.join(__dirname, 'src')
const dist = path.join(__dirname, 'dist')
const build = path.join(__dirname, 'build')
const LIBS = Object.keys(pkg.dependencies)

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const config = {
  // entry: [ 'whatwg-fetch', src ],
  entry: {
    src: src,
    vendor: LIBS
  },
  output: {
    filename: '[name].[hash].js',
    path: build,
    chunkFilename: '[name].[chunkhash].js'
      //publicPath: '/'
  },
  externals: [{
    'forever': 'this forever',
    'firebase': 'this firebase',
    'firebase-admin': 'this firebase-admin',
    'firebase-token-generator': 'this firebase-token-generator',
    'express': 'this express',
    'md5': 'this md5',
    'morgan': 'this morgan',
    'rc': 'this rc',
    'body-parser': 'this body-parser',
    'body-cookie-parser': 'this body-cookie-parser'
  }],
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    //contentBase: build,
    hot: true,
    inline: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },
  node: {
    'fs': "empty",
    'net': "empty",
    'child_process': "empty",
    'tls': "empty",
    'dns': "empty",
    'it-is': "empty",
    'aws-sdk': "empty",
    'cluster': "empty"
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [src]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      )
    }, {
      test: /\.(png|gif|jpg|svg|eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }, ]
  },

  postcss: function(webpack) {
    return [atImport({
      addDependencyTo: webpack
    }), cssnext];
  },

  plugins: [
    new FaviconsWebpackPlugin('./src/static/images/favicon.png'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('[name].[chunkhash].css', {
      allChunks: true
    }),
    new CleanWebpackPlugin(build, { //cleans the /build folder at ewvery build
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new webpack.optimize.CommonsChunkPlugin({ //bundles common libraries/dependencies only once if shared
      names: ['vendor', 'manifest']
    })
    // new ChunkManifestPlugin({
    //   filename: "chunk-manifest.json",
    //   manifestVariable: "webpackManifest"
    // })
  ]
}

// if (nodeEnv === 'production') {
//   config.plugins.push(new OfflinePlugin())
// }

if (nodeEnv === 'development') {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
    // config.entry.push('webpack-dev-server/client?http://localhost:8080')
    // config.entry.push('webpack/hot/only-dev-server')
  config.devtool = 'eval-source-map' //generates the maps to be able to see source files
  config.output.devtoolModuleFilenameTemplate = 'sources:///[resource-path]?[loaders]'
}

module.exports = validate(config, {
  quiet: true
});
