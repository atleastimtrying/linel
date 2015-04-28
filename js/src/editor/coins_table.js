var CoinsTable = React.createClass({displayName: "CoinsTable",
  render: function(){
    var coins = this.props.coins.map(function(coin){
      return(
        React.createElement(CoinEditor, {key: coin.key, coin: coin})
      );
    }, this);
    return(
      React.createElement("div", null, 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "location"), 
            React.createElement("th", null), 
            React.createElement("th", null)
          ), 
          coins
        ), 
        React.createElement(AddCoin, {coins: this.props.coins})
      )
    );
  }
});

