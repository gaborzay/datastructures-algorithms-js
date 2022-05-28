/**
 * https://www.hackerrank.com/challenges/count-triplets-1/problem
 *
 * Time Complexity:
 * Space Complexity:
 *
 * @param arr
 * @param r
 */
export function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let pairWeWant = [rx, r2x];
    if (doubles[pairWeWant] !== undefined) {
      count = count + doubles[pairWeWant]
    }
    let doub = [x, rx];
    if (doubles[doub] == undefined) doubles[doub] = 0;
    doubles[doub] = doubles[doub] + ((map[rx] == undefined) ? 0 : map[rx]);
// Add x to map
    (map[x] == undefined) ? map[x] = 1: map[x]++;
  }
  return count;
}