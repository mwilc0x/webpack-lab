import $ from 'jquery';
import { Promise } from 'es6-promise';
import Actions from '../actions/book-actions';

export default class WebApi {

  initData() {
    let actions = new Actions();

    Promise.resolve($.ajax('http://localhost:3001/api/books'))
      .then((books) => {
        actions.receiveBooks(books);
      });
  }

}
