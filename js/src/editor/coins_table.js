var React = require('react');
var CoinEditor = require('./coin_editor');
var AddCoin = require('./add_coin');
module.exports = React.createClass({
  displayName: "CoinsTable",
  render: function(){
    var coins = this.props.coins.map(function(coin){
      return(
        React.createElement(CoinEditor, {key: coin.key, coin: coin})
      );
    }, this);
    return(
      React.createElement("div", {className: "table_editor"}, 
        React.createElement("h2", null, "Coins"), 
        React.createElement("table", null, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "location"), 
              React.createElement("th", null), 
              React.createElement("th", null)
            )
          ), 
          React.createElement("tbody", null, 
            coins
          )
        ), 
        React.createElement(AddCoin, {coins: this.props.coins})
      )
    );
  }
});

