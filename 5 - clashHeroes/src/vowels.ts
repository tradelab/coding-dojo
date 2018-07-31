/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

export default (string: string) => {
    let i = 0;
    const voyelle = ['a', 'e', 'i', 'o', 'u'];
    string.toLowerCase().split("").forEach(element => {
        voyelle.filter(lettre => {
            if(lettre === element){
                i++;
            }
        });
    });
    return i;
}