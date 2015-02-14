import * as React from 'react';
import BookStore from '../stores/book-store';
import UserStore from '../stores/user-store';

export default React.createClass({

  getInitialState() {
    return { listCount: 0, user: undefined };
  },

  componentDidMount() {
    BookStore.addChangeListener(this._onBooksChange);
    UserStore.addChangeListener(this._onUserChange);
  },

  _getBooksFromStore() {
    this.setState( { listCount: BookStore.getBooks().length });
  },

  _getUserFromStore() {
    this.setState( { user: UserStore.getUser() });
  },

  _onUserChange() {
    this._getUserFromStore();
  },

  _onBooksChange() {
    this._getBooksFromStore();
  },

  render() {
    return (
      <div>
        { !this.state.user ? <h5>Welcome back, Guest!</h5> : <h5>Welcome back, {this.state.user}!</h5>  }
        <h5>We have {this.state.listCount} new Best Seller lists for you</h5>
      </div>
    );
  }

});
