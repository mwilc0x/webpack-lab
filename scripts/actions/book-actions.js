import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';

class Actions {

  receiveBooks(books) {
    Dispatcher.handleServerAction({
      type: Constants.ActionTypes.RECEIVE_BOOKS,
      books: books
    });
  }

}

let a = new Actions();
export default a;
