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
      level.gameover = false;
      level.coins = level.coins.map(function(coin){ 
        coin.found = false;
        return coin; 
      });
      level.linel = this.start_linel();
      return level;
    },

    checkCoins: function(){
      this.state.coins = this.state.coins.map(function(coin){
        if(this.state.linel.position === coin.location){
          coin.found = true;
        }
        return coin;
      }, this);
    },

    checkGameEnd: function(){
      if(this.state.length <= this.state.linel.position){
        this.state.gameover = true;
      }
    },

    incrementPosition: function(position_modifier){
      this.state.linel.position += position_modifier;
      this.checkCoins();
      this.checkGameEnd();
      this.setState(this.state);
    },

    render: function(){
      var found_coins = this.state.coins.filter(function(coin){ return coin.found; }).length;
      var title = (this.state.gameover) ? <h2>{'Game over!'}</h2> : <h2>Coins: {found_coins} / {this.state.coins.length}</h2>;
      return(
        <div className="play wrapper">
          <div className="view">
            <h1>{this.state.title}</h1>
            {title}
            <GameDisplay state={this.state} />
            <Controls />
          </div>
          <div className="aside">
            <a href="/index.html">Home</a>
            <Fullscreen />
            <JSONDisplay state={this.state.coins} />
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};

