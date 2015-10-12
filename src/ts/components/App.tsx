/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="../typings/qajax/qajax.d.ts" />

import React = require('react');
import Qajax = require('qajax');

import Header = require('./Header');
import Footer = require('./Footer');

import Router = require('react-router');

let RouteHandler = Router.RouteHandler;

class App extends React.Component<any, any> {
  constructor() {
    console.log('App.constructor()');

    super();
  }
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