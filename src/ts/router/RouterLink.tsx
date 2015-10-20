/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />

import React = require('react');
import Router = require('./Router');
import ReactRouter = require('react-router');

class RouterLink extends ReactRouter.Link {

  handleClick(event) {
    let allowTransition = true
    
    if (this.props.onClick)
      this.props.onClick(event)

    if (RouterLink.isModifiedEvent(event) || !RouterLink.isLeftClickEvent(event))
      return

    if (event.defaultPrevented === true)
      allowTransition = false

    if (this.props.target) {
      if (!allowTransition)
        event.preventDefault()

      return
    }

    event.preventDefault();
    
    if (allowTransition) {
      let { to, query } = this.props

      console.log(this);
      console.log(Router);
      
      // this.context.history.pushState(state, to, query)
      
      Router.transitionTo(to, {}, query);
    }
  }

  public static isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  public static isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
  }
  
  public static isEmptyObject(object) {
    for (let p in object)
      if (object.hasOwnProperty(p))
        return false
    
    return true
  }
  
}

export = RouterLink;