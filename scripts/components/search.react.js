import * as React from 'react';
import Actions from '../actions/book-actions';
import Style from '../utils/styles';

export default React.createClass({

  _search(event) {
    Actions.search(event.target.value.toLowerCase());
  },

  render() {
    return (
      <ul className="nav navbar-nav">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" style={Style.app.search} placeholder="Search" onChange={this._search} />
          </div>
        </form>
      </ul>
    );
  }

});
