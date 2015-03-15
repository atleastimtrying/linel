describe("Events", function() {

  it("is defined on the namespace", function(){
    expect(window.linel.Events).toBeDefined();
  });

  describe("as an instance", function() {
    beforeEach(function() {
      this.events = new window.linel.Events();
    });

    it("can be instantiated", function(){
      expect(this.events).toBeDefined();
    });

    describe("#open", function(){
      it("is a function", function(){
        expect(typeof this.events.open).toEqual('function');
      });

      it("returns an object", function(){
        expect(typeof this.events.open()).toEqual('object');
      });
    });

    describe("#subscribe", function(){
      it("is a function", function(){
        expect(typeof this.events.subscribe).toEqual('function');
      });

      it("adds an event and callback to the data", function(){
        var callback = function(){};
        this.events.subscribe('foo', callback);
        var bindings = this.events.open();
        expect(bindings.foo).toEqual([callback]);
      });

      it("adds a multiple callbacks to an event", function(){
        var callback = function(){};
        var callback_two = function(){};
        this.events.subscribe('foo', callback);
        this.events.subscribe('foo', callback_two);
        var bindings = this.events.open();
        expect(bindings.foo).toEqual([callback, callback_two]);
      });

      it("should handle callbacks being triggered twice");
    });

    describe("#publish", function(){
      it("is a function", function(){
        expect(typeof this.events.publish).toEqual('function');
      });

      it("should call a bound callback", function(){
        var test_object = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object, 'foo');
        this.events.subscribe('foo', foo_spy);
        this.events.publish('foo');
        expect( foo_spy ).toHaveBeenCalled();
      });

      it("should pass an options object to a callback", function(){
        var test_object = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object, 'foo');
        var options = { bar: 'baz' };
        this.events.subscribe('foo', foo_spy);
        this.events.publish('foo', options);
        expect( foo_spy ).toHaveBeenCalledWith(options);
      });

      it("should call two bound callbacks", function(){
        var test_object_1 = {
          foo: function(){}
        };
        var test_object_2 = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object_1, 'foo');
        var foo2_spy = spyOn(test_object_2, 'foo');
        this.events.subscribe('foo', foo_spy);
        this.events.subscribe('foo', foo2_spy);
        this.events.publish('foo');
        expect( foo_spy ).toHaveBeenCalled();
        expect( foo2_spy ).toHaveBeenCalled();
      });
      it("should pass an options block to two bound callbacks", function(){
        var test_object_1 = {
          foo: function(){}
        };
        var test_object_2 = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object_1, 'foo');
        var foo2_spy = spyOn(test_object_2, 'foo');
        var options = { bar: 'baz' };
        this.events.subscribe('foo', foo_spy);
        this.events.subscribe('foo', foo2_spy);
        this.events.publish('foo', options);
        expect( foo_spy ).toHaveBeenCalledWith(options);
        expect( foo2_spy ).toHaveBeenCalledWith(options);
      });

      it("should not call an unbound callback", function(){
        var test_object = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object, 'foo');
        this.events.subscribe('foo', foo_spy);
        this.events.publish('baz');
        expect( foo_spy ).not.toHaveBeenCalled();
      });

      it("should call a bound callback", function(){
        var test_object = {
          foo: function(){}
        };
        var foo_spy = spyOn(test_object, 'foo');
        this.events.subscribe('foo', foo_spy);
        this.events.publish('foo');
        expect( foo_spy ).toHaveBeenCalled();
      });
    });

    describe("aliases", function(){
      it("has pub equal publish", function(){
        expect(this.events.pub).toEqual(this.events.publish);
      });
      it("has sub equal subscribe", function(){
        expect(this.events.sub).toEqual(this.events.subscribe);
      });
    });
  });
});
