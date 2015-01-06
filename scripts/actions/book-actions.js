import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';

class Actions {

  receiveBooks(books) {
    Dispatcher.handleServerAction({
      type: Constants.ActionTypes.RECEIVE_BOOKS,
      books: books
    });
  }

  search(query) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.FILTER_BOOKS,
      query: query
    });
  }

}

let a = new Actions();
export default a;
