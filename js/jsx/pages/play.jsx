window.linel.Play = function(){
  window.events = new window.linel.Events();

  var App = React.createClass({
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

    empty_level: function(){
      return({
        coins: [],
        segments: [],
        points: [],
        title: ""
      });
    },

    getInitialState: function(){
      var level = this.local_get() || this.empty_level();
      level.linel = this.start_linel();
      return level;
    },

    incrementPosition: function(position_modifier){
      this.state.linel.position += (position_modifier * 2);
      this.setState(this.state);
    },

    render: function(){
      return(
        <div className="play wrapper">
          <div className="view">
            <h1>{this.state.title}</h1>
            <h2>Coins: {this.state.linel.coins} / {this.state.coins.length}</h2>
            <GameDisplay state={this.state} />
            <Controls />
          </div>
          <div className="aside">
            <a href="/index.html">Home</a>
            <Fullscreen />
            <JSONDisplay state={this.state.linel} />
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};

