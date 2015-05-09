var Fullscreen = React.createClass({displayName: "Fullscreen",
  enter_fullscreen: function(){
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  },
  render: function(){
    return(
      React.createElement("button", {className: "positive", onClick: this.enter_fullscreen}, "Fullscreen")
    );
  }
});
