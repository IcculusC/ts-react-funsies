/// <reference path="../dependencies/react.d.ts" />
/// <reference path="../dependencies/react-router.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("section", {"className": "application"}, React.createElement(Header, {"active": "false"}), React.createElement("div", {"className": "container"}, React.createElement(RouteHandler, null)), React.createElement(Footer, null)));
    };
    return App;
})(React.Component);
module.exports = App;
