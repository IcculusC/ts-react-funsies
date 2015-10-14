/// <reference path="../typings/react/react.d.ts" />

import React = require('react');
import AppDispatcher = require('../dispatchers/AppDispatcher');

class Home extends React.Component<any, any> {
  constructor() {
    AppDispatcher.register(this._handleDispatch.bind(this));
    
    super();
  }
  _handleDispatch(payload) {
    console.log('Home._handleDispatch()');
  }
  render() {
    return (
      <h3>HOME</h3>
    )
  }
}

export = Home;