/// <reference path='./flux.d.ts' />

import flux = require('flux');

class Store<T> {
  _dispatcher: flux.Dispatcher<any>;
  _token: any;
  _listeners: any[];
  constructor(dispatcher: flux.Dispatcher<any>) {
    this._dispatcher = dispatcher;
    
    this._token = this._dispatcher.register(this._handleDispatch);
  }
  get dispatcher(): flux.Dispatcher<any> {
    return this._dispatcher;
  }
  get token(): any {
    return this._token;
  }
  _handleDispatch(payload): void {}
  addListener(listener): boolean {
    if(this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener);
      
      return true;
    }
    
    return false;
  }
  removeListener(listener): boolean {
    let i = this._listeners.indexOf(listener);
    
    if(listener !== -1) {
      this._listeners.splice(i, 1);
      return true;
    }
    
    return false;
  }
}

export = Store;
