var webpack = require('webpack');
var getConfig = require('hjs-webpack');

var webpackConfig = getConfig({
	in: 'client/app.js',
  out: 'dist',
  clearBeforeBuild: true,
})

webpackConfig.module.loaders.push({
  test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url'
})

webpackConfig.plugins.push(
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery':'jquery'
  })
);

module.exports = webpackConfig;
