var LevelMenuItem = React.createClass({displayName: "LevelMenuItem",
  render: function(){
    var level = this.props.level;
    debugger;
    return(
      React.createElement("div", {className: "level_menu_item"}, 
        React.createElement("h2", null, level.title, " by ", level.author), 
        React.createElement("ul", null, 
          React.createElement("li", null, "difficulty: ", level.difficulty), 
          React.createElement("li", null, "coins: ", level.coins.length || "0")
        ), 
        React.createElement("a", {href:  "edit.html#" + level.id}, "Edit"), 
        React.createElement("a", {href:  "play.html#" + level.id}, "Play")
      )
    );
  }
});
