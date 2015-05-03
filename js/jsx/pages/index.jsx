window.linel.Index = function(){
  var App = React.createClass({

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
        return(<LevelMenuItem key={level.id} level={level} />);
      });

      return(
        <div className="index wrapper">
          <div className="view">
            <h1>Linel</h1>
             <p>A one dimensional adventure game!</p>
          </div>
          <div className="aside">
            <a href="/edit.html" className="btn positive">Create a new level!</a>
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
