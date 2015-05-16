var Coin = React.createClass({displayName: "Coin",
  calculateCoinStyle: function(coin){
    return {
      strokeDashoffset: -coin.location + "px"
    };
  },

  render: function(){
    return(
      React.createElement("path", {key: this.props.coin.key, className: "coin", style: this.calculateCoinStyle(this.props.coin), d: this.props.path})
    );
  }
});
