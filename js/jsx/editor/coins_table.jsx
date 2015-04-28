var CoinsTable = React.createClass({
  render: function(){
    var coins = this.props.coins.map(function(coin){
      return(
        <CoinEditor key={coin.key} coin={coin}/>
      );
    }, this);
    return(
      <div>
        <table>
          <tr>
            <th>location</th>
            <th></th>
            <th></th>
          </tr>
          {coins}
        </table>
        <AddCoin coins={this.props.coins}/>
      </div>
    );
  }
});

