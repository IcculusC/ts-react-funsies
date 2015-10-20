/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />

import React = require('react');
import Router = require('react-router');
import RouterLink = require('../Router/RouterLink');

let Link = Router.Link;

interface IHeaderProps { active: string }

class Header extends React.Component<IHeaderProps, any> {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><RouterLink to="home">Home</RouterLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export = Header;