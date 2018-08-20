import { expect } from 'chai';
import pyramid from '../src/pyramid';
import palindrome from '../src/palindrome';
import matrix from '../src/matrixSpiral';
import vowels from '../src/vowels';
import anagrams from '../src/anagrams';

/** PYRAMIDE */
// describe('pyramid', () => {
//     it('return pyramid to the right when input is 2', () =>{
//         const stars = '* \n* * \n* \n';
//         expect(pyramid(2)).to.be.equals(stars);
//     });
// });

// describe('pyramid', () => {
//     it('return pyramid to the right when input is 3', () =>{
//         const stars = '* \n* * \n* * * \n* * \n* \n';
//         expect(pyramid(3)).to.be.equals(stars);
//     });
// });

/** PALINDROME */
// describe('Palindrome function', () => {
//     it('should return true if passed string is a palindrome', () => {
//       expect(palindrome('aba')).to.be.true;
//       expect(palindrome('1000000001')).to.be.true;
//       expect(palindrome('pennep')).to.be.true;
//     });

//     it('should return false if passed string is not a palindrome', () => {
//       expect(palindrome(' aba')).to.be.false; //.toBeFalsy();
//       expect(palindrome('aba ')).to.be.false;
//       expect(palindrome('Fish hsif')).to.be.false;
//       expect(palindrome('greetings')).to.be.false;
//     });
// });

/** MATRIX SPIRAL */
describe('Matrix function', () => {

    it('should produce a 2x2 array', () => {
      const m = matrix(2);
      expect(m.length).to.equal(2);
      expect(m[0]).to.deep.equal([1, 2]);
      expect(m[1]).to.deep.equal([4, 3]);
    });

    it('should produce a 3x3 array', () => {
      const m = matrix(3);
      expect(m.length).to.equal(3);
      expect(m[0]).to.deep.equal([1, 2, 3]);
      expect(m[1]).to.deep.equal([8, 9, 4]);
      expect(m[2]).to.deep.equal([7, 6, 5]);
    });

    it('should produce a 4x4 array', () => {
      const m = matrix(4);
      expect(m.length).to.equal(4);
      expect(m[0]).to.deep.equal([1, 2, 3, 4]);
      expect(m[1]).to.deep.equal([12, 13, 14, 5]);
      expect(m[2]).to.deep.equal([11, 16, 15, 6]);
      expect(m[3]).to.deep.equal([10, 9, 8, 7]);
    });
  });

/** VOWELS */
// describe('Vowels function', () => {
//     it('should return correct number of vowels in given string', () => {
//         expect(vowels('aeiou')).to.equal(5);
//         expect(vowels('Adam')).to.equal(2);
//         expect(vowels('Hello there!')).to.equal(4);
//     });
// });

/** ANAGRAMS */
// describe('Anagrams function', () => {
//     it('should return true if passed string is an anagram', () => {
//       expect(anagrams('hello', 'llohe')).to.be.true
//       expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).to.be.true
//       expect(anagrams('RAIL! SAFETY!', 'fairy tales')).to.be.true
//     });

//     it('should return false if passed string is not an anagram', () => {
//       expect(anagrams('One One', 'Two two two')).to.be.false;
//       expect(anagrams('One one', 'One one c')).to.be.false;
//       expect(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')).to.be.false;
//     });
//   });