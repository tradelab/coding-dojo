var assert = require('assert');
var foobarqix = require('../index');

describe('Coding Dojo - FooBarQix', function() {
  describe('compute string', function() {
    it('should return "1" when the value is "1"', function() {
      assert.equal(foobarqix.compute("1"), "1");
    });

    it('should return "2" when the value is "2"', function() {
      assert.equal(foobarqix.compute("2"), "2");
    });

    it('should return "FooFoo" when the value is "3"', function() {
      assert.equal(foobarqix.compute("3"), "FooFoo");
    });

    it('should return "4" when the value is "4"', function() {
      assert.equal(foobarqix.compute("4"), "4");
    });

    it('should return "BarBar" when the value is "5"', function() {
      assert.equal(foobarqix.compute("5"), "BarBar");
    });

    it('should return "Foo" when the value is "6"', function() {
      assert.equal(foobarqix.compute("6"), "Foo");
    });

    it('should return "QixQix" when the value is "7"', function() {
      assert.equal(foobarqix.compute("7"), "QixQix");
    });

    it('should return "Foo" when the value is "9"', function() {
      assert.equal(foobarqix.compute("9"), "Foo");
    }); 

    it('should return "Bar" when the value is "10"', function() {
      assert.equal(foobarqix.compute("10"), "Bar*");
    });

    it('should return "Foo" when the value is "13"', function() {
      assert.equal(foobarqix.compute("13"), "Foo");
    });

    it('should return "FooBarBar" when the value is "15"', function() {
      assert.equal(foobarqix.compute("15"), "FooBarBar");
    });

    it('should return "BarFoo" when the value is "53"', function() {
      assert.equal(foobarqix.compute("53"), "BarFoo");
    });
  });

  describe('We must keep a trace of 0', function() {
    xit('should return "1*1" when the value is "101"', function() {
      assert.equal(foobarqix.compute("101"), "1*1");
    });

    it('should return "FooFoo*Foo" when the value is "303"', function() {
      assert.equal(foobarqix.compute("303"), "FooFoo*Foo");
    });
  });
});