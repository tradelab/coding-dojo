import { expect } from 'chai';
import Mastermind from '../src/index';


describe('Mastermind', () => {
  const mastermind = new Mastermind();

  it ('One color well placed', () => {
    expect(mastermind.evaluate(['blue'],['blue'])).to.deep.equal([1,0])
  });

  it ('One color not present', () => {
    expect(mastermind.evaluate(['blue'],['black'])).to.deep.equal([0,0])
  });

  it ('Two colors misplaced', () => {
    expect(mastermind.evaluate(['blue','black'],['black','blue'])).to.deep.equal([0,2])
  });

  it ('One color well placed and two colors miss placed', () => {
    expect(mastermind.evaluate(['blue','white','blue'], ['white','blue','blue'])).to.deep.equal([1,2])
  });
  it ('same color several time miss placed', () => {
    expect(mastermind.evaluate(['blue','white','blue'], ['white','white','blue'])).to.deep.equal([2,0])
  });
});