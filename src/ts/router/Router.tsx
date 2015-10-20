/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />

import React = require('react');
import ReactRouter = require('react-router');
import AppDispatcher = require('../dispatchers/AppDispatcher');

let DefaultRoute = ReactRouter.DefaultRoute;
let Route = ReactRouter.Route;

import App = require('../components/App');
import Home = require('../components/Home');
import About = require('../components/About');

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <DefaultRoute handler={Home} />
  </Route>
);

class Router {

  private static _instance: Router;
  private static _router: any;
  private _appToken: string;
  
  constructor(routes: any) {
    if(Router._instance) {
      throw new Error("Error:  Instantiation failed:  Router already instantiated, use Router.instance");
    }
    
    Router._instance = this;
    
    Router._router = ReactRouter.create(routes);
    
    this._appToken = AppDispatcher.register(this._handleDispatch.bind(this));
  }

  public static get instance(): Router {  
    return Router._instance;
  }

  
  public static get router() : any {
    return Router._router;
  }
  
  makePath(to, params, query) {
    AppDispatcher.dispatch({ action: 'router', payload: { type: 'makePath', target: to, params: params, query: query }});
  
    return Router._router.makePath(to, params, query);
  }
  
  makeHref(to, params, query) {
    AppDispatcher.dispatch({ action: 'router', payload: { type: 'makeHref', target: to, params: params, query: query }});
  
    return Router._router.makeHref(to, params, query);
  }
  
  transitionTo(to: string, params, query) {
    AppDispatcher.dispatch({ action: 'router', payload: { type: 'transitionTo', target: to, params: params, query: query }});  
  
    Router._router.transitionTo(to, params, query);
  }

  replaceWith(to, params, query) {
    AppDispatcher.dispatch({ action: 'router', payload: { type: 'replaceWith', target: to, params: params, query: query }});
  
    Router._router.replaceWith(to, params, query);
  }

  goBack() {
    AppDispatcher.dispatch({ action: 'router', payload: { type: 'goBack' }});
    
    Router._router.goBack();
  }

  run(render) {
      Router._router.run(render);
  }
  
  _handleDispatch(payload): void {}
}

export = new Router(routes);