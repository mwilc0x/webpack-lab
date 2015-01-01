import React from 'react';
import Utils from './utils/web-api';

const Ruscello = React.createClass({

  componentDidMount() {
    const utils = new Utils();
    utils.initData();
  },

  render() {
    return (
      <h1>webpack lab</h1>
    );
  }

});

export default Ruscello;
