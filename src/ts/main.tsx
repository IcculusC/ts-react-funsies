/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react-router/react-router.d.ts" />

import React = require('react');
import ReactRouter = require('react-router');

import Router = require('./router/Router');

Router.run((Handler) => {
  React.render(<Handler />, document.body);
});