import * as React from 'react';
import Utils from './utils/web-api';
import BookList from './components/book-list.react';
import BookStore from './stores/book-store';

export default React.createClass({

  getInitialState() {
    return { lists: [] };
  },

  shouldComponentUpdate() {
    return true;
  },

  componentDidMount() {
    let utils = new Utils();
    utils.initData();

    BookStore.addChangeListener(this._onChange);
  },

  _getBooksFromStore() {
      this.setState( { lists: BookStore.getBooks() });
  },

  _onChange() {
    this._getBooksFromStore();
  },

  _renderBookList(list, index) {
    return <BookList
      key={index}
      books={list.books}
      date={list.date} title={list.title}
    />
  },

  render() {
    return (
      <div>
        <h1>webpack lab</h1>
        { !this.state.lists.length ? 'Loading' : this.state.lists.map(this._renderBookList) }
      </div>
    );
  }

});
