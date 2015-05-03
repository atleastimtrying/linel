window.linel.Play = function(){
  window.events = new window.linel.Events();

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

    start_linel: function(){
      return({
        position: 0,
        length: 10,
        coins: 0
      });
    },

    componentDidMount: function(){
      events.sub('increment_position', this.incrementPosition);
    },

    getInitialState: function(){
      var level = this.local_get();
      level.linel = this.start_linel();
      return level;
    },

    incrementPosition: function(position_modifier){
      this.state.linel.position += (position_modifier * 2);
      this.setState(this.state);
    },

    render: function(){
      return(
        React.createElement("div", {className: "play wrapper"}, 
          React.createElement("div", {className: "view"}, 
            React.createElement("h1", null, this.state.title), 
            React.createElement("h2", null, "Coins: ", this.state.linel.coins, " / ", this.state.coins.length), 
            React.createElement(GameDisplay, {state: this.state}), 
            React.createElement(Controls, null)
          ), 
          React.createElement("div", {className: "aside"}, 
            React.createElement("a", {href: "/index.html"}, "Home"), 
            React.createElement(JSONDisplay, {state: this.state.linel})
          )
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};

