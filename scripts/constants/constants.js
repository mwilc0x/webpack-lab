import KeyMirror from 'keymirror';

class Constants {

  constructor() {
    this.ActionTypes = KeyMirror({
      RECEIVE_BOOKS: null
    });

    this.PayloadSources = KeyMirror({
      SERVER_ACTION: null,
      VIEW_ACTION: null
    });
  }

}

let c = new Constants();
export default c;
