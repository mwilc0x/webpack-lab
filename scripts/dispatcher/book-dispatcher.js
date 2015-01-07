import * as Flux from 'flux';
import Constants from '../constants/constants';

class Dispatcher extends Flux.Dispatcher {

  constructor() {
    super();
  }

  handleServerAction(action) {
    this.dispatch(action);
  }

  handleViewAction(action) {
    this.dispatch(action);
  }

}

let d = new Dispatcher();
export default d;
