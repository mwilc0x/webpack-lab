import $ from 'jquery';
import { Promise } from 'es6-promise';

export default class WebApi {

  initData() {
    return Promise.resolve($.ajax('http://localhost:3001/api/books'));
  }

}
