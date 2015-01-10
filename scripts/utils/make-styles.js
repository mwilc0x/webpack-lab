import React from 'react';

function makeStyle(defaults, tagName) {
  tagName = tagName || 'div';
  var Style = React.createClass({
    getDefaultProps: function() {
      return assign({}, defaults);
    },

    render: function() {
      var style = assign({}, this.props);
      delete style.children;

      return React.createElement(
        tagName,
        {style: style, children: this.props.children}
      );
    }
  });
  return Style;
}
