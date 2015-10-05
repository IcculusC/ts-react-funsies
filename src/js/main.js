var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route
var Link = ReactRouter.Link

var App = React.createClass({

  getInitialState: function() {
    return {
      route: window.location.hash.substr(1)
    }
  },
  componentDidMount: function () {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  },
  render: function() {   
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function() {
    return (
      <h3>Inbox</h3>
    );
  }
});

var Calendar = React.createClass({
  render: function() {
    return (
      <h3>Calendar</h3>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <h3>Dashboard</h3>
    );
  }
});

React.render((
  <Router>
    <Route path="app" path="/" component={App} >
      <Route path="inbox" component={Inbox} />
      <Route path="calendar" component={Calendar} />
      <Route path="*" component={Dashboard} />
    </Route>
  </Router>), document.body);

