/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="../typings/qajax/qajax.d.ts" />

import React = require('react');
import flux = require('flux');

import AppDispatcher = require('../dispatchers/AppDispatcher');
import AppStore = require('../stores/AppStore');

import Header = require('./Header');
import Footer = require('./Footer');

import Router = require('react-router');

let RouteHandler = Router.RouteHandler;

class App extends React.Component<any, any> {
  _appToken: string;
  constructor() {
    console.log('App.constructor()');
    
    this._appToken = AppDispatcher.register(this._handleDispatch.bind(this));
        
    AppStore.addListener(this._changeListener.bind(this));
        
    super();
  }
  get appToken() {
    return this._appToken;
  }
  _changeListener() {
    console.log('App._changeListener()');
  }
  _handleDispatch(payload) {
    console.log('App._handleDispatch()');
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