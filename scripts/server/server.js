var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../../webpack.config');
var scraper = require('./modules/scraper');

var express = require('express');

var api = express()
  .get('/books', function(req, res) {
    scraper.scrapeNYT('http://www.nytimes.com/best-sellers-books/').then(function(data) {
      res.send(data);
    });
  });

var app = express()
  .all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  });

app.use('/api', api)
  .listen(3001)

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000');
});
