var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

var api = express()
  .get('/books', function(req, res) {
    scrapeNYT('http://www.nytimes.com/best-sellers-books/').then(function(data) {
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

/**
 * TODO: move out into module
 */
function scrapeNYT(url) {
  var defer = Q.defer();

  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html),
          date = {
            prev: new Date($('#bestsellersPreviousList a span').text()).toDateString(),
            curr: new Date($('.element1 p').text()).toDateString(),
            next: new Date($('#bestsellersNextList a span').text()).toDateString()
          },
          lists = [],
          promises = [];

      $('div.bColumn div.columnGroup.first div.story').each(function (i, story) {
        if ($(this).find('h3 a').attr('href')) {
          promises.push(scrapeSubPage($(this).find('h3').text(), $(this).find('h3 a').attr('href'), date));
        }
      });

      Q.all(promises).then(function(data) {
        defer.resolve(data);
      });
    }
  });

  return defer.promise;
}

function scrapeSubPage(title, url, date) {
  var data = [],
      defer = Q.defer();

  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
    }
    $('table.bestSellersList tbody tr.bookDetails').each(function () {
      data.push({
        id: Math.floor(100000 + Math.random() * 900000),
        index: $(this).find('td.index').text(),
        summary: $(this).find('td.summary').text().trim()
      });
    });

    defer.resolve({ date: date, title: title, books: data });
  });

  return defer.promise;
}
