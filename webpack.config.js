var _ = require('lodash');
var debug = !_.eq(process.env.NODE_ENV, 'production');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

if (!debug) {
  console.log('Compiling for production');
}

function getBabelQuery () {
  var queryString = '';
  var query = {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
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
          loaders: ['react-hot', 'babel-loader?' + getBabelQuery()]
        },
        {
          test: /(img|fonts|\.(png|jpg|eot|woff2|woff|ttf|svg))/,
          loaders: ["react-hot", "file?name=" + (debug ? "css/" : "../") + "[path][name].[ext]&context=assets/"],
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
      path: __dirname + "/dist/css",
      filename: "../js/index.min.js"
    },
    plugins: debug ? [
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("development")
           }
        })
      ] : [
      new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production")
           }
        }),
      new ExtractTextPlugin('../css/index.css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: true })
    ],
  },
];