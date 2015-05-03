window.linel.Index = function(){
  var App = React.createClass({displayName: "App",

    getInitialState: function(){
      return {levels: this.local_get() || []};
    },

    componentDidMount: function(){
      if(this.state.levels.length === 0){
        this.seed();
      }
    },

    local_get: function(){
      return JSON.parse(localStorage.getItem('linel_levels'));
    },

    local_set: function(levels){
      localStorage.setItem('linel_levels', JSON.stringify(levels));
    },

    remote_get: function(complete){
      var url = '/seed.json';
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = request.responseText;
          complete(data);
        }
      };
      request.send();
    },

    seed: function(){
      this.remote_get(function(levels){
        levels = JSON.parse(levels);
        this.local_set(levels);
        this.setState({levels:levels});
      }.bind(this));
    },

    render: function(){
      var level_menu_items = this.state.levels.map(function(level){
        return(React.createElement(LevelMenuItem, {key: level.id, level: level}));
      });

      return(
        React.createElement("div", {className: "index wrapper"}, 
          React.createElement("div", {className: "view"}, 
            React.createElement("h1", null, "Linel"), 
             React.createElement("p", null, "A one dimensional adventure game!")
          ), 
          React.createElement("div", {className: "aside"}, 
            React.createElement("a", {href: "/edit.html", className: "btn positive"}, "Create a new level!"), 
            React.createElement("div", {className: "level_select"}, 
              level_menu_items
            )
          )
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};
