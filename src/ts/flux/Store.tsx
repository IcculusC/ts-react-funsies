/// <reference path='../typings/eventemitter3/eventemitter3.d.ts' />

import EventEmitter = require('eventemitter3');
import Dispatcher = require('./Dispatcher');

class Store extends EventEmitter {

  private _dispatcher: Dispatcher<any>;
  
  constructor(dispatcher: Dispatcher<any>) {
    this._dispatcher = dispatcher;
    
    super();
  }
  
  get dispatcher() {
    return this._dispatcher;
  }
  
  _handleDispatch(payload: {}) {
    
  }
}