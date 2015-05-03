import KeyMirror from 'keymirror';

class Constants {

  constructor() {
    this.ActionTypes = KeyMirror({
      RECEIVE_BOOKS: null,
      FILTER_BOOKS: null,
      USER_LOGGED_IN: null,
      USER_LOGGED_OUT: null
    });

    this.PayloadSources = KeyMirror({
      SERVER_ACTION: null,
      VIEW_ACTION: null
    });
  }

}

let c = new Constants();
export default c;
