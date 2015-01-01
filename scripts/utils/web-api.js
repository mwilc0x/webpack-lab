import $ from 'jquery';
import Promise from 'es6-promise';

class WebApi {

  constructor() {
    this.promise = Promise.Promise;
  }

  initData() {

    console.log('Initiating data...')

    return this.promise.resolve($.ajax('http://localhost:3001/api/books'));
  }

}

export default WebApi;
