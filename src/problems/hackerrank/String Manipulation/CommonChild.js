/**
 * https://www.hackerrank.com/challenges/common-child/problem
 *
 * Time Complexity:
 * Space Complexity:
 *
 * @param s1
 * @param s2
 */
export function commonChild(s1, s2) {
  let count = 0;

  for (let i = 0, n = s1.length; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (s1.charAt(i) === s2.charAt(j)) count++;
    }
  }

  return count;
}

