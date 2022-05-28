/**
 * https://www.hackerrank.com/challenges/special-palindrome-again/problem
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 *
 * @param n: an integer, the length of string s
 * @param s: a string
 */
export function substrCount(n, s) {
  let count = n;

  for (let i = 1; i < n; i++) {
    const char = s.charAt(i);
    let leftIndex = i - 1;

    if (char === s.charAt(leftIndex)) {
      // Count the same letter over
      while (char === s.charAt(leftIndex)) {
        count++;
        leftIndex--;
      }
    } else {
      // Count the special palindromes
      const leftChar = s.charAt(i - 1);
      let rightIndex = i + 1;
      leftIndex = i - 1;

      while (s.charAt(leftIndex) === s.charAt(rightIndex)) {
        if (leftChar !== s.charAt(leftIndex)) break;
        if (leftChar !== s.charAt(rightIndex)) break;
        count++;
        leftIndex--;
        rightIndex++;
      }
    }
  }

  return count;
}