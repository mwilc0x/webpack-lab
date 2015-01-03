import React from 'react';
import Book from './book.react';

export default React.createClass({

  propTypes: {
    books: React.PropTypes.array.isRequired,
    date: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  renderBook(book) {
    return <Book
      key={book.id}
      index={book.index}
      summary={book.summary}
    />
  },

  render() {
    return (
      <div id="book-list">
        <h1>{this.props.title}</h1>
        { this.props.books.map(this.renderBook) }
      </div>
    );
  }

});
