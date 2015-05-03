window.linel.Play = function(){
  var App = React.createClass({displayName: "App",
    get_all_levels: function(){
      return JSON.parse(localStorage.getItem('linel_levels')) || [];
    },

    local_get: function(){
      var id = parseInt(window.location.hash.substr(1));
      var levels = this.get_all_levels();
      return levels.filter(function(level){
        return level.id === id;
      })[0];
    },

    getInitialState: function(){
      return this.local_get();
    },

    render: function(){
      return(
        React.createElement("div", {className: "play wrapper"}, 
          React.createElement("div", {className: "view"}, 
            React.createElement("h1", null, this.state.title), 
            React.createElement("h2", null, "Coins: 0 / ", this.state.coins.length), 
            React.createElement(Display, {state: this.state})
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

