var React = require('react');
module.exports = React.createClass({
  displayName: 'Linel',
  calculateLinelStyle: function(linel){
    return {
      strokeDasharray: linel.length + "px 100000000px",
      strokeDashoffset: -linel.position + 'px'
    };
  },

  render: function(){
    var linel = this.props.linel;
    var path = this.props.path;
    return(
      React.createElement("path", {className: "linel", style: this.calculateLinelStyle(linel), d: path})
    );
  }
});
