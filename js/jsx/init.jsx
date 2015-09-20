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
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="play/:level_id" component={Play} />
        <Route path="editor/:level_id" component={Editor} />
        <Route path="new" component={Editor} />
      </Route>
    </Router>
  ), container);
});
