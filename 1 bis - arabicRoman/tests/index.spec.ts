import { expect } from 'chai';
import Converter from '../src/index';

describe('arabicToRoman', () => {
  const converter = new Converter();

  it('should return "I" when the value is 1', () => {
    expect(converter.arabicToRoman(1)).to.equal("I");
  });

  it('should return "II" when the value is 2', () => {
    expect(converter.arabicToRoman(2)).to.equal("II");
  });

  it('should return "IV" when the value is 4', () => {
    expect(converter.arabicToRoman(4)).to.equal("IV");
  });

  it('should return "V" when the value is 5', () => {
    expect(converter.arabicToRoman(5)).to.equal("V");
  });

  it('should return "VI" when the value is 6', () => {
    expect(converter.arabicToRoman(6)).to.equal("VI");
  });
});
