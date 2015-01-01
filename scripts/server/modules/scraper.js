import request from 'request';
import cheerio from 'cheerio';
import Q from 'q';

class Utils {

  scrapeNYT(url) {
    const defer = Q.defer(),
        self = this;

    request(url, (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html),
        date = {
          prev: new Date($('#bestsellersPreviousList a span').text()).toDateString(),
          curr: new Date($('.element1 p').text()).toDateString(),
          next: new Date($('#bestsellersNextList a span').text()).toDateString()
        },
        lists = [],
        promises = [];

        $('div.bColumn div.columnGroup.first div.story').each(function (i, story) {
          if ($(this).find('h3 a').attr('href')) {
            promises.push(self.scrapeSubPage($(this).find('h3').text(), $(this).find('h3 a').attr('href'), date));
          }
        });

        Q.all(promises).then((data) => {
          defer.resolve(data);
        });
      }
    });

    return defer.promise;
  }

  scrapeSubPage(title, url, date) {
    const data = [],
    defer = Q.defer();

    request(url, (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html);

        $('table.bestSellersList tbody tr.bookDetails').each(function () {
          data.push({
            id: Math.floor(100000 + Math.random() * 900000),
            index: $(this).find('td.index').text(),
            summary: $(this).find('td.summary').text().trim()
          });
        });

        defer.resolve({ date: date, title: title, books: data });
      }
    });

    return defer.promise;
  }
}

export default Utils;
