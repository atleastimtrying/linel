var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = require('./pages/index');
var Editor = require('./pages/editor');
var Play = require('./pages/play');
var App = require('./pages/app');

window.addEventListener('load', function(){
  var container = document.body;
  React.render((
    React.createElement(Router, null, 
      React.createElement(Route, {path: "/", component: App}, 
        React.createElement(IndexRoute, {component: Index}), 
        React.createElement(Route, {path: "play/:level_id", component: Play}), 
        React.createElement(Route, {path: "editor/:level_id", component: Editor}), 
        React.createElement(Route, {path: "new", component: Editor})
      )
    )
  ), container);
});
