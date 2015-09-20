var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  displayName: "App",

  render: function(){
    return(
      React.createElement("div", {style: {height: '100vh'}}, 
        this.props.children
      )
    );
  }
});
