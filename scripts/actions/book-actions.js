import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';

export default class Actions {

  receiveBooks(books) {
    Dispatcher.handleServerAction({
      type: Constants.ActionTypes.RECEIVE_BOOKS,
      books: books
    });
  }

}
