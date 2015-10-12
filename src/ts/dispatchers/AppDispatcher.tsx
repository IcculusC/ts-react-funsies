/// <reference path="../typings/flux/flux.d.ts" />

import flux = require('flux');

interface IAppAction {
  action: string;
  payload?: any;
}

let AppDispatcher: flux.Dispatcher<IAppAction> = new flux.Dispatcher();

export = AppDispatcher;