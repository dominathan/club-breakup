var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'client/app.js',
  out: 'public',
  clearBeforeBuild: true
})
