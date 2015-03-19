window.addEventListener('load', function(){
  var start = document.getElementById('start');
  if(start){
    start.addEventListener('click', function(){
      var world = new window.linel.World();
      start.remove();
    }, false);
  }
});

