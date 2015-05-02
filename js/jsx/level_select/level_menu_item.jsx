var LevelMenuItem = React.createClass({
  render: function(){
    var level = this.props.level;
    return(
      <div className="level_menu_item">
        <h2>{level.title} by {level.author}</h2>
        <ul>
          <li>difficulty: {level.difficulty}</li>
          <li>coins: {level.coins.length || "0"}</li>
        </ul>
        <a href={ "edit.html#" + level.id } className="btn">Edit</a>
        <a href={ "play.html#" + level.id } className="btn">Play</a>
      </div>
    );
  }
});
