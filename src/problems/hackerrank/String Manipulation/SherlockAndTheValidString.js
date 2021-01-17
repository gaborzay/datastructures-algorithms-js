/**
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param s
 * @returns {string}
 */
export function isValid(s) {
  const DICT_LENGTH = 26;
  const ASCII_CONVERSION = 97;
  // create a dictionary with all the counts being 0 for letters a-z
  const charToAsciiIndex = char => char.charCodeAt(0) - ASCII_CONVERSION;
  const stringToDictionary = s => {
    const dictionary = (new Array(DICT_LENGTH)).fill(0);
    // Count all the values into the dictionary
    for (let char of s) {
      dictionary[charToAsciiIndex(char)]++;
    }
    return dictionary;
  };
  const dictionary = stringToDictionary(s).filter(Number);
  let flipped = false;

  for (let i = 0, j = 1, n = dictionary.length; j < n; j++) {
    if (dictionary[i] !== dictionary[j]) {

      if (flipped) return 'NO';
      if (Math.abs((dictionary[i] - dictionary[j])) > 1) {
        if (dictionary[i] === 1) {
          i++;
        } else if (dictionary[j] !== 1) {
          return 'NO';
        }
      }

      flipped = true;
    }
  }

  return 'YES';
}