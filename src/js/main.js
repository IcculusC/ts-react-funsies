/// <reference path="dependencies/react.d.ts" />
/// <reference path="dependencies/react-router.d.ts" />
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var App = require('./components/App');
var Home = require('./components/Home');
var About = require('./components/About');
var routes = (React.createElement(Route, {"name": "app", "path": "/", "handler": App}, React.createElement(Route, {"name": "home", "handler": Home}), React.createElement(Route, {"name": "about", "handler": About}), React.createElement(DefaultRoute, {"handler": Home})));
Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});
