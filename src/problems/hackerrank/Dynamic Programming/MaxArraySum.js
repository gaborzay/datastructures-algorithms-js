/**
 * https://www.hackerrank.com/challenges/max-array-sum/problem
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param arr[number]
 * @returns number
 */
export function maxSubsetSum(arr) {
  if (arr.length === 0) return 0;
  arr[0] = Math.max(0, arr[0]);
  if (arr.length === 1) return arr[0];
  arr[1] = Math.max(arr[0], arr[1]);
  for (let i = 2, n = arr.length; i < n; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
  }
  return arr[arr.length - 1];
}