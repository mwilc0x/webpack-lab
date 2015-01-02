import React from 'react';
import Book from './book.react';

const BookList = React.createClass({

  propTypes: {
    books: React.PropTypes.array.isRequired,
    date: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  render() {

    const books = this.props.books.map((book) => {
      return <Book key={book.id} index={book.index} summary={book.summary} />
    });

    return (
      <div id="book-list">
        <h1>{this.props.title}</h1>
        {books}
      </div>
    );
  }

});

export default BookList;
