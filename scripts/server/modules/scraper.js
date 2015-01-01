'use strict';

var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

var Utils = {

  scrapeNYT: function(url) {
    var defer = Q.defer(),
        _this = this;

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
            promises.push(_this.scrapeSubPage($(this).find('h3').text(), $(this).find('h3 a').attr('href'), date));
          }
        });

        Q.all(promises).then(function(data) {
          defer.resolve(data);
        });
      }
    });

    return defer.promise;
  },

  scrapeSubPage: function(title, url, date) {
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
}

module.exports = Utils;
