describe("world", function(){
  var create_linus = function(){
    var linel = document.createElement('path');
    linel.id = 'linel';
    document.body.appendChild(linel);
  };

  it("can be created", function(){
    create_linus();
    var world = new linel.World();
    expect(world).toBeDefined();
  });
});
