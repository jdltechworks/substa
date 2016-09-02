var _ = require('lodash');
var debug = !_.eq(process.env.NODE_ENV, 'production');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

if (!debug) {
  console.log('Compiling for production');
} else {
  console.log('You are running in debug mode');
}

function getBabelQuery () {
  var queryString = '';
  var query = {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'react-hot-loader/babel'],
  };
  for (var queryKey in query) {
    var queryList = query[queryKey];
    for (var key in queryList) {
      var item = queryList[key];
      if (queryString) {
        queryString += ','
      }
      queryString += queryKey + '[]=' + item;
    }
  }

  return queryString;
}

module.exports = [
  {
    context: path.join(__dirname, "/"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
      "./src/index.js",
      "./assets/sass/index.scss"
    ],
    // externals: [
    //   /images/
    // ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components|dist)/,
          loaders: ['babel-loader?' + getBabelQuery()]
        },
        {
          test: /\.scss$/,
          loader: debug ? null : ExtractTextPlugin.extract(
            'style',
            'css!sass'
          ),
          loaders: debug ? ['style?sourceMap', 'css', 'sass'] : []
        }
      ]
    },
    output: {
      path: __dirname + "/dist",
      filename: "./js/index.min.js",
    },
    plugins: debug ? [
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("development"),
             API: JSON.stringify('//localhost:8000/api'),
             UPLOAD: JSON.stringify('//localhost:8000/upload')
           }
        })
      ] : [
      new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("production"),
             API: JSON.stringify('//subasta-jdltechworks.rhcloud.com/api'),
             UPLOAD: JSON.stringify('//subasta-jdltechworks.rhcloud/upload')
           }
        }),
      new ExtractTextPlugin('./css/index.min.css'),
      new TransferWebpackPlugin([
        { from: 'fonts', to: 'fonts'},
        { from: 'img', to: 'img'}
      ],
      path.join(__dirname, '/assets')
      ),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false })
    ],
  },
];
