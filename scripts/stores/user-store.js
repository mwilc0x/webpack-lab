import Dispatcher from '../dispatcher/book-dispatcher';
import Constants from '../constants/constants';
import EventEmitter from 'eventemitter3';
import * as Immutable from 'immutable';

class UserStore extends EventEmitter {

  constructor() {
    super();
    Dispatcher.register(this._dispatchToken.bind(this));
    this.CHANGE_EVENT = 'change';
    this._user = {};
  }

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  getUser() {
    return this._user;
  }

  _emitChange() {
    this.emit(this.CHANGE_EVENT);
  }

  _setUser(user) {
    this._user = user;
  }

  _dispatchToken(action) {

    switch(action.type) {

    case Constants.ActionTypes.USER_LOGGED_IN:
        this._setUser(action.user);
        this._emitChange();
        break;
    case Constants.ActionTypes.USER_LOGGED_OUT:
        this._setUser(action.user);
        this._emitChange();
        break;

      default:
        // no op
    }
  }
}

let us = new UserStore();
export default us;
