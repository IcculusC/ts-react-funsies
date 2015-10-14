/// <reference path="../typings/flux/flux.d.ts" />

import flux = require('flux');

interface IAppAction {
  action: string;
  payload?: any;
}

class AppDispatcher extends flux.Dispatcher<IAppAction> {
  private static _instance: AppDispatcher = new AppDispatcher();
  
  constructor() {
    if(AppDispatcher._instance) {
      throw new Error("Error:  Instantiation failed:  AppDispatcher already instantiated, use AppDispatcher.instance");
    }
    
    AppDispatcher._instance = this;
    
    super();
  }
  public static get instance() {
    return this._instance;
  }
   
}

export = AppDispatcher.instance;