import React from 'react';
import Utils from './utils/web-api';
import BookList from './components/book-list.react';

const Ruscello = React.createClass({

  getInitialState() {
    return { lists: {} };
  },

  componentDidMount() {
    const utils = new Utils();
    utils.initData().then((response) => {
      console.log(response);
    });
  },

  render() {
    return (
      <div>
        <h1>webpack lab</h1>
        <BookList />
      </div>
    );
  }

});

export default Ruscello;
