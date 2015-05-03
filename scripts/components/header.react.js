import * as React from 'react';
import Actions from '../actions/book-actions';
import { Link } from 'react-router';
import Login from '../components/login.react';
import Search from '../components/search.react';
import Style from '../utils/styles';

export default React.createClass({

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Webpack Lab</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">

            <Search />

            <Login />

          </div>
        </div>
      </nav>
    );
  }

});
