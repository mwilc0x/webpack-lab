import React from 'react';
import Utils from './utils/web-api';
import BookList from './components/book-list.react';

let App = module.exports = React.createClass({

  getInitialState() {
    return { lists: [] };
  },

  componentDidMount() {
    let utils = new Utils();
    utils.initData().then((response) => {
      this.setState({ lists: response });
    });
  },

  renderBookList(list, index) {
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
        { !this.state.lists.length ? 'Loading' : this.state.lists.map(this.renderBookList) }
      </div>
    );
  }

});
