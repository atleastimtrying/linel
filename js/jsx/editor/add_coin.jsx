var AddCoin = React.createClass({
  findCoins: function(){
    if(this.props.coins.length){
      return this.props.coins[this.props.coins.length - 1];
    }else{
      return {location: 20};
    }
  },
  emitCoin: function(){
    var last_coin = this.findCoins();
    events.pub('create', {
      key: Date.now(),
      collection: 'coins',
      location: last_coin.location + 20,
      editing: false
    });
  },
  render: function(){
    return(<button className="positive" onClick={this.emitCoin}>Add Coin</button>);
  }
});
