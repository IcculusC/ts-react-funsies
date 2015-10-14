/// <reference path="../typings/react/react.d.ts" />

import React = require('react');
import AppDispatcher = require('../dispatchers/AppDispatcher');

class Home extends React.Component<any, any> {
  constructor() {
    AppDispatcher.register(function() {
      console.log('Home._handleDispatch()');
      console.log(arguments);
    });
  
    AppDispatcher.dispatch({ action: 'TEST' });
  
    super();
  }
  render() {
    return (
      <h3>HOME</h3>
    )
  }
}

export = Home;