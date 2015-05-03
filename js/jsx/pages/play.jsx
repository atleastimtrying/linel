window.linel.Play = function(){
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

    getInitialState: function(){
      return this.local_get();
    },

    render: function(){
      return(
        <div className="play wrapper">
          <div className="view">
            <h1>{this.state.title}</h1>
            <h2>Coins: 0 / {this.state.coins.length}</h2>
            <Display state={this.state} />
          </div>
          <div className="aside">
            <a href="/index.html">Home</a>
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};

