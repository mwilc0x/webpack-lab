import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';
import Events from 'eventemitter3';
import * as Immutable from 'immutable';

class BookStore extends Events.EventEmitter {

  constructor() {
    super();
    Dispatcher.register(this._dispatchToken.bind(this));
    this.CHANGE_EVENT = 'change';
    this._books = [];
  }

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  getBooks() {
    return this._books;
  }

  _emitChange() {
    this.emit(this.CHANGE_EVENT);
  }

  _setBooks(books) {
    this._books = books;
  }

  _setImmutableBooks(books) {
    this.immutable_books = Immutable.List(books);
  }

  _filterBooks(query) {

    var filtered_lists = this.immutable_books.map((list) => {
      return {
        title: list.title,
        date: list.date,
        books: list.books.filter((book) => {
          return book.summary.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      };
    });

    this._setBooks(filtered_lists.toArray());
    this._emitChange();
  }

  _dispatchToken(payload) {
    let action = payload.action;

    switch(action.type) {

      case Constants.ActionTypes.RECEIVE_BOOKS:
        this._setImmutableBooks(action.books);
        this._setBooks(action.books);
        this._emitChange();
        break;
      case Constants.ActionTypes.FILTER_BOOKS:
        this._filterBooks(action.query);
        break;

      default:
        // do nothing
    }
  }
}

let bs = new BookStore();
export default bs;
