import React from 'react';
import Book from './book.react';

const BookList = React.createClass({

  render() {
    return (
      <div id="book-list">
        <h1>book-list</h1>
        <Book />
      </div>
    );
  }

});

export default BookList;
