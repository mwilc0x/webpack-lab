import * as React from 'react';
import UserActions from '../actions/user-actions';
import UserStore from '../stores/user-store';
import Style from '../utils/styles';

export default React.createClass({

  getInitialState() {
    return { loggedIn: false, user: undefined }
  },

  componentDidMount() {
    UserStore.addChangeListener(this._onUserChange);
  },

  _getUserFromStore() {

    var loggedIn = UserStore.getUser() ? true : false;

    this.setState( { loggedIn: loggedIn, user: UserStore.getUser() });
  },

  _onUserChange() {
    this._getUserFromStore();
  },

  _handleSubmit(e) {

    /* Trivial example with only username and no password */

    e.preventDefault();

    UserActions.login(this.refs.username.getDOMNode().value.trim());

    this.refs.username.getDOMNode().value = '';

  },

  _handleLogout() {
    UserActions.logout(this.state.user);
  },

  render() {
    return (
      <div>
        { !this.state.loggedIn ?
          <ul className="nav navbar-nav navbar-right">
            <form className="navbar-form navbar-right" onSubmit={this._handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" ref="username" />
                <button type="submit" style={Style.app.loginBtn}>Login</button>
              </div>
            </form>
          </ul>
          :
          <ul className="nav navbar-nav navbar-right">
            <form className="navbar-form navbar-right" onSubmit={this._handleLogout}>
              <div className="form-group">
                <label>{this.state.user}</label>
                <button type="submit" style={Style.app.loginBtn}>Logout</button>
              </div>
            </form>
          </ul>
        }
      </div>
    );
  }

});
