window.linel.Index = function(){
  var App = React.createClass({
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
        return(<LevelMenuItem level={level} />);
      });
      return(
        <div className="index wrapper">
          <div className="view">
            <h1>Linel</h1>
            <p>A one dimensional adventure game!</p>
          </div>
          <div className="aside">
            <a href="/edit.html">Create a new level!</a>
            <div className="level_select">
              {level_menu_items}
            </div>
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};
