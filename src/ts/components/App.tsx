/// <reference path="../dependencies/react.d.ts" />
/// <reference path="../dependencies/react-router.d.ts" />

import React = require('react');
import Header = require('./Header');
import Footer = require('./Footer');

import Router = require('react-router');

let RouteHandler = Router.RouteHandler;

class App extends React.Component<any, any> {
  render() {
    return (
      <section className="application">
        <Header active="false" />
        
        <div className="container">
          <RouteHandler />
        </div>
        
        <Footer />
      </section>
    );
  }
}

export = App;