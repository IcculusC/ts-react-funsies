/// <reference path="../dependencies/react.d.ts" />
/// <reference path="../dependencies/react-router.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement("nav", {"className": "navbar navbar-default"}, React.createElement("div", {"className": "container"}, React.createElement("ul", {"className": "nav navbar-nav"}, React.createElement("li", null, React.createElement(Link, {"to": "home"}, "Home")), React.createElement("li", null, React.createElement(Link, {"to": "about"}, "About"))))));
    };
    return Header;
})(React.Component);
module.exports = Header;
