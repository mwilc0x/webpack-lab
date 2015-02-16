import * as React from 'react/addons';
import Book from './book.react';
import Style from '../utils/styles';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({

  getInitialState() {
    return { show: true };
  },

  propTypes: {
    books: React.PropTypes.array.isRequired,
    date: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  renderBook(book) {
    return (
      <div className="col-md-12">
        <Book
          key={book.id}
          index={book.index}
          summary={book.summary}
        />
      </div>
    )
  },

  _toggleList() {
    this.setState({show: !this.state.show })
  },

  render() {

    let bookList = null;

    if(this.state.show)
      bookList = <div key={this.props.title} className="row">{this.props.books.map(this.renderBook)}</div>;

    return (
      <div id="book-list">
        <div className="row">
          <div className="col-md-12">
            <h3 style={Style.app.inlineBlock}>{this.props.title}</h3>
            <h6 style={Style.app.inlineBlock} onClick={ this._toggleList }>
              { this.state.show ? 'collapse' : 'expand'  }
            </h6>
          </div>
        </div>
        <ReactCSSTransitionGroup transitionName="example">
          {bookList}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

});
