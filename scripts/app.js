'use strict';

const React = require('react');
const Utils = require('./utils/web-api')

const Ruscello = React.createClass({

  componentDidMount() {
    var utils = new Utils();
    utils.initData();
  },

  render() {
    return (
      <h1>webpack lab</h1>
    );
  }

});

module.exports = Ruscello;
