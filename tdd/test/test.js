var assert = require('assert');
var converter = require('../index');

describe('Coding Dojo - TDD', function() {
  describe('arabicToRoman', function() {
    it('should return "I" when the value is 1', function() {
      assert.equal(converter.arabicToRoman(1), "I");
    });

    it('should return "II" when the value is 2', function() {
      assert.equal(converter.arabicToRoman(2), "II");
    });

    it('should return "III" when the value is 3', function() {
      assert.equal(converter.arabicToRoman(3), "III");
    });

    it('should return "IV" when the value is 4', function() {
      assert.equal(converter.arabicToRoman(4), "IV");
    });

    it('should return "V" when the value is 5', function() {
      assert.equal(converter.arabicToRoman(5), "V");
    });

    it('should return "VI" when the value is 6', function() {
      assert.equal(converter.arabicToRoman(6), "VI");
    });

    it('should return "IX" when the value is 9', function() {
      assert.equal(converter.arabicToRoman(9), "IX");
    });

    it('should return "X" when the value is 10', function() {
      assert.equal(converter.arabicToRoman(10), "X");
    });

    it('should return "XIV" when the value is 14', function() {
      assert.equal(converter.arabicToRoman(14), "XIV");
    });

    it('should return "XIX" when the value is 19', function() {
      assert.equal(converter.arabicToRoman(19), "XIX");
    });

    it('should return "LIV" when the value is 54', function() {
      assert.equal(converter.arabicToRoman(54), "LIV");
    });
  });

  describe('Roman to Arabic', function(){
    it('should return "1" when the value is I', function() {
      assert.equal(converter.romanToArabic('I'), 1);
    });

    it('should return "2" when the value is II', function() {
      assert.equal(converter.romanToArabic('II'), 2);
    });

    it('should return "3" when the value is III', function() {
      assert.equal(converter.romanToArabic('III'), 3);
    });

    it('should return "54" when the value is LIV', function() {
      assert.equal(converter.romanToArabic('LIV'), 54);
    });
  });
});