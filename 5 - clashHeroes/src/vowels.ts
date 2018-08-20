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
  const vowels: string[] = ['a', 'e', 'u', 'o', 'i', 'y'];

  return  string.split('').filter(letter => vowels.includes(letter.toLocaleLowerCase())).length;
}