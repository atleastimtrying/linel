window.linel.Play = function(){
  var App = React.createClass({displayName: "App",
    getInitialState: function(){
      return({})
    },
    render: function(){
      return(
        React.createElement("div", {className: "play wrapper"}, 
          React.createElement("div", {className: "view"}, 
            React.createElement("h1", null, "Not ready yet"), 
            React.createElement("p", null, "sorry :(")
          ), 
          React.createElement("div", {className: "aside"}, 
            React.createElement("a", {href: "/index.html"}, "Home")
          )
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};

