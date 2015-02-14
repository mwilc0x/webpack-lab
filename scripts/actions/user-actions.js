import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';

class UserActions {

  login(user) {

    /* Make a call to server to authenticate */

    Dispatcher.handleAction({
      type: Constants.ActionTypes.USER_LOGGED_IN,
      user: user
    });
  }

  logout() {

    /* Make a call to server */

    Dispatcher.handleAction({
      type: Constants.ActionTypes.USER_LOGGED_OUT,
      user: undefined
    });
  }

}

let ua = new UserActions();
export default ua;
