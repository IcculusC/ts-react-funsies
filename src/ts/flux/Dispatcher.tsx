/// <reference path='../typings/Q/Q.d.ts' />

import Q = require('q');

class Dispatcher<T> {
  private _callbacks = [];
  private _promises = [];

  register(callback: () => void): number {
    this._callbacks.push(callback);
    return this._callbacks.length - 1;
  }
  
  dispatch(payload: T) {
    let resolves = [];
    let rejects = [];
    
    this._promises = this._callbacks.map(function(_, i) {
      return Q.Promise(function(resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = rejects;
      });
    });
    
    this._callbacks.forEach(function(callback, i) {
      Q.resolve(callback(payload)).then(function() {
        resolves[i](payload);
      }, function() {
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });
    
    this._promises = [];
  }
}

export = Dispatcher;