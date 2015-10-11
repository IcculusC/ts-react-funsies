/// <reference path="dependencies/react.d.ts" />
/// <reference path="dependencies/react-router.d.ts" />
/// <reference path="dependencies/qajax.d.ts" />

import React = require('react');
import Router = require('react-router');
import Qajax = require('qajax');

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

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

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.body);
});