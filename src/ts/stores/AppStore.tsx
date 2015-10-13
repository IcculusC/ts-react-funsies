/// <reference path='../typings/flux/utils.d.ts' />

import AppDispatcher = require('../dispatchers/AppDispatcher');
import fluxUtils = require('flux/utils');

let Store = fluxUtils.Store;

class AppStore extends Store {

  __onDispatch(payload: any): void {
    console.log('AppStore.__onDispatch()');
    console.log(payload);
  }

}

let store: AppStore = new AppStore(AppDispatcher);

export = store;