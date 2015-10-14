/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react-router/react-router.d.ts" />

import React = require('react');
import ReactRouter = require('react-router');

let DefaultRoute = ReactRouter.DefaultRoute;
let Route = ReactRouter.Route;

import Router = require('./router/Router');

import App = require('./components/App');
import Home = require('./components/Home');
import About = require('./components/About');

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <DefaultRoute handler={Home} />
  </Route>
);

let router = new Router(routes);

router.run((Handler) => {
  React.render(<Handler />, document.body);
});