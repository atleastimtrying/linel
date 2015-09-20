var React = require('react');
var CoinEditor = require('./coin_editor');
var AddCoin = require('./add_coin');
module.exports = React.createClass({
  displayName: "CoinsTable",
  render: function(){
    var coins = this.props.coins.map(function(coin){
      return(
        <CoinEditor key={coin.key} coin={coin}/>
      );
    }, this);
    return(
      <div className="table_editor">
        <h2>Coins</h2>
        <table>
          <thead>
            <tr>
              <th>location</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins}
          </tbody>
        </table>
        <AddCoin coins={this.props.coins}/>
      </div>
    );
  }
});

