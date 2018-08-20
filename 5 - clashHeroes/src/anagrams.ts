/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

export default (stringA, stringB) => {

  let occurencesA = {};
  stringA.split('').forEach(letterA => {
    const letter = letterA.toLowerCase();

    if (letter.match('[a-z]')) {
      if (occurencesA[letter]) {
        occurencesA[letter]++;
      } else {
        occurencesA[letter] = 1;
      }
    }
  });

  let occurencesB = {};
  stringB.split('').forEach(letterB => {
    const letter = letterB.toLowerCase();

    if (letter.match('[a-z]')) {
      if (occurencesB[letter]) {
        occurencesB[letter]++;
      } else {
        occurencesB[letter] = 1;
      }
    }
  });

  let isEqual = false;

  isEqual = Object.keys(occurencesA).length === Object.keys(occurencesB).length;

  Object.keys(occurencesA).forEach(letterA => {
    if (occurencesB[letterA] !== occurencesA[letterA]) {
      isEqual = false;
    }
  });

  return isEqual;
}