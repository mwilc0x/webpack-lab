import * as Flux from 'flux';
import Constants from '../constants/constants';

class Dispatcher extends Flux.Dispatcher {

  constructor() {
    super();
  }

  handleServerAction(action) {
    let payload = {
      source: Constants.PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  handleViewAction(action) {
    let payload = {
      source: Constants.PayloadSources.VIEW_ACTION,
      action: action
    }
    this.dispatch(payload);
  }

}

let d = new Dispatcher();
export default d;
