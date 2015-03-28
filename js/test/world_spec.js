describe("world", function(){
  var create_linel = function(){
    var linel = document.createElement('path');
    linel.id = 'linel';
    document.body.appendChild(linel);
    console.log('linel', document.getElementById('linel').getTotalLength);
  };

  xit("can be created", function(){
    create_linel();
    var world = new linel.World();
    expect(world).toBeDefined();
  });
});
