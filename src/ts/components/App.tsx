/// <reference path="../dependencies/react.d.ts" />
/// <reference path="../dependencies/react-router.d.ts" />

import React = require('react');
import flux = require('flux');

let Store = flux.FluxStore;

import AppDispatcher = require('../dispatchers/AppDispatcher');

import Header = require('./Header');
import Footer = require('./Footer');

import Router = require('react-router');

let RouteHandler = Router.RouteHandler;

class App extends React.Component<any, any> {
  _appToken: string;
  constructor() {
    console.log('App.constructor()');
    
    this._appToken = AppDispatcher.register(function() {
      console.log(arguments);
    });
    
    AppDispatcher.dispatch({ action: 'TEST', payload: 'ACTION' });
    
    console.log(this._appToken);
    console.log(this.appToken);
    
    super();
  }
  get appToken() {
    return this._appToken;
  }
  componentDidMount() {}
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