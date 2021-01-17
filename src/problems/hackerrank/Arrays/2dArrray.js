/**
 *
 * @param arr
 * @returns {number}
 */
export function hourglassSum(arr) {
  let maximum = -Infinity;

  for (let i = 1, rows = arr.length; i < (rows - 1); i++) {
    for (let j = 1, cols = arr[i].length; j < (cols - 1); j++) {
      const top = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1];
      const middle = arr[i][j];
      const bottom = arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
      const total = top + middle + bottom;

      if (maximum < total) {
        maximum = total;
      }
    }
  }

  return maximum;
}