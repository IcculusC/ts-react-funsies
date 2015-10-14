/// <reference path='../typings/flux/utils.d.ts' />

import AppDispatcher = require('../dispatchers/AppDispatcher');
import fluxUtils = require('flux/utils');

let Store = fluxUtils.Store;

class AppStore extends Store {
  private static _instance: AppStore = new AppStore(AppDispatcher);  

  constructor(dispatcher) {
    if(AppStore._instance) {
      throw new Error("Error:  Instantiation failed:  AppStore already instantiated, use AppStore.instance");
    }    
    
    AppStore._instance = this;
    
    super(dispatcher);
  }

  public static get instance() {
    return this._instance;
  }
  
  addListener(callback: (eventType?: string) => void) {
    super.addListener(callback);
  }
  
  __onDispatch(payload: any): void {
    console.log('AppStore.__onDispatch()');
    this.__emitChange();
  }

}

export = AppStore.instance;