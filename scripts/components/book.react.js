import React from 'react';

export default React.createClass({

  propTypes: {
    index: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired
  },

  render() {
    return (<h3>{this.props.index}: {this.props.summary}</h3>);
  }

});
