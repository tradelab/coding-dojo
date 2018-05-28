var assert = require('assert');
var converter = require('../index');

describe('Coding Dojo - TDD', function() {
  describe('arabicToRoman', function() {
    it('should return "I" when the value is 1', function() {
      assert.equal(converter.arabicToRoman(1), "I");
    });
  });
});