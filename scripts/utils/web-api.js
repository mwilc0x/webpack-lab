import $ from 'jquery';
import Promise from 'es6-promise';

export default class WebApi {

  constructor() {
    this.promise = Promise.Promise;
  }

  initData() {

    console.log('Initiating data...')

    return this.promise.resolve($.ajax('http://localhost:3001/api/books'));
  }

}
