var Linel = React.createClass({
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
      <path className="linel" style={this.calculateLinelStyle(linel)} d={path} />
    );
  }
});
