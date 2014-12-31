'use strict';

const $ = require('jquery');

class WebApi {
  
  constructor() {

  }

  initData() {

    console.log('Initiating data...')

    $.ajax({
      url: 'http://localhost:3001/api/books',

      dataType: 'json',

      success: function(data) {
        console.log(data)
      },

      error: function(xhr, status, err) {
        console.log('Error fetching books!')
        console.error(err);
      }
    });
  }

}

module.exports = WebApi;
