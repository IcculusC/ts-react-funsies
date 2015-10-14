/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />

import React = require('react');
import ReactRouter = require('react-router');

class Router {

  private static _instance: Router;
  private static _router: any;
  
  constructor(routes: any) {
    if(Router._instance) {
      return Router._instance;
    }
    
    Router._instance = this;
    
    Router._router = ReactRouter.create(routes);
  }
  
  static get instance(): Router {
    return Router._instance;
  }
  
  static get router() : any {
    return Router._router;
  }
  
  makePath(to, params, query) {
    return Router._router.makePath(to, params, query);
  }
  
  makeHref(to, params, query) {
    return Router._router.makeHref(to, params, query);
  }
  
  transitionTo(to, params, query) {
      Router._router.transitionTo(to, params, query);
  }

  replaceWith(to, params, query) {
      Router._router.replaceWith(to, params, query);
  }

  goBack() {
      Router._router.goBack();
  }

  run(render) {
      Router._router.run(render);
  }
}

export = Router;