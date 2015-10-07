/// <reference path="../dependencies/react.d.ts" />
/// <reference path="../dependencies/react-router.d.ts" />

import React = require('react');
import Router = require('react-router');

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
          </ul>
        </div>
      </nav>
    )
  }
}

export = Header;