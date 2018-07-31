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
    let firstWord = stringA.toLowerCase().split(''); // abcda => { a: 2, b:1 }
    let secondWord = stringB.toLowerCase().split(''); //{abcdaa => {a : 2

    if(firstWord.length === secondWord.length){
        
        let objA = {};
        let objB = {};
        firstWord.forEach(letter => {
            objA[letter] ? objA[letter] += 1 : objA[letter] = 1;
        });
        secondWord.forEach(letter => {
            objB[letter] ? objB[letter] += 1 : objB[letter] = 1;
        });
        console.log(objA);
        console.log(objB);

    } else {
        return false;
    }
}