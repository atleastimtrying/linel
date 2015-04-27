window.linel.LevelSelect = function(){
  var App = React.createClass({displayName: "App",
    getInitialState: function(){
      //return JSON.parse(localStorage.getItem('linel_levels'));
      return({levels:[
        {
          id: 1,
          name: 'straight linel',
          difficulty: 1,
          author: 'Anders',
          points:[],
          segments:[],
          coins: []
        }
      ]});
    },
    render: function(){
      var level_menu_items = this.state.levels.map(function(level){
        return(React.createElement(LevelMenuItem, {level: level}));
      });
      return(
        React.createElement("div", {className: "level_select"}, 
          level_menu_items
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};
