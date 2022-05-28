/*
 * Referencing: https://www.geeksforgeeks.org/when-to-use-each-sorting-algorithms/
 */

/**
 * Selection Sort
 *
 * Time Complexity: O(N^2)
 *
 * This sorting algorithm sorts an array by repeatedly finding the minimum
 * element (considering ascending order) from the unsorted part and putting it
 * at the beginning. The algorithm maintains two subarrays in a given array, the
 * subarray which is already sorted and remaining subarray which is unsorted.
 * In every iteration of selection sort, the minimum element (considering
 * ascending order) from the unsorted subarray is picked and moved to the
 * sorted subarray.
 *
 * We can use Selection Sort as per below constraints :
 *
 * When the list is small.
 * When memory space is limited because it makes the minimum possible number
 * of swaps during sorting.
 *
 * @param {Array<any>} arr
 * @param {function} comparator
 * @return {Array<any>}
 */
export function selectionSort(arr, comparator) {
  const n = arr.length;
  let minIndex = 0;
  comparator = getComparator(comparator);

  for (let i = 0; i < n; i++) {
    minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (comparator(arr[minIndex], arr[j]) > 0) minIndex = j;
    }

    if (i !== minIndex) swap(arr, i, minIndex);
  }

  return arr;
}

/**
 * Bubble Sort
 *
 * Time Complexity: O(N^2)
 *
 * This sorting algorithm is the simplest sorting algorithm that works by
 * repeatedly swapping the adjacent elements if they are in the wrong order. If
 * we have total N elements, then we need to repeat the above process for N-1 times.
 *
 * We can use Bubble Sort as per below constraints :
 *
 * It works well with large datasets where the items are almost sorted because
 * it takes only one iteration to detect whether the list is sorted or not. But
 * if the list is unsorted to a large extend then this algorithm holds good for
 * small datasets or lists.
 *
 * This algorithm is fastest on an extremely small or nearly sorted set of data.
 *
 * @param {Array<any>} arr
 * @param {function} comparator
 * @return {Array<any>}
 */
export function bubbleSort(arr, comparator) {
  comparator = getComparator(comparator);

  for (let i = 0, n = arr.length, m = arr.length; i < n; i++, m--) {
    for (let j = 0; j < m - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
    }
  }

  return arr;
}

export function insertionSort(arr, comparator) {
  comparator = getComparator(comparator);

  for (let i = 1, n = arr.length; i < n; i++) {
    let currIndex = i,
        prevIndex = i - 1;

    while (prevIndex > -1 && comparator(arr[prevIndex], arr[currIndex]) > 0) {
      swap(arr, prevIndex--, currIndex--);
    }
  }

  return arr;
}

export function merge(arr1, arr2, comparator) {
  let n = arr1.length,
      m = arr2.length,
      i = 0,
      j = 0,
      result = [];
  comparator = getComparator(comparator);

  while (i < n || j < m) {
    if (i < n && j < m) {
      if (comparator(arr1[i], arr2[j]) > 0) {
        result.push(arr2[j++]);
      } else {
        result.push(arr1[i++]);
      }
    } else if (i < n) {
      result.push(arr1[i++]);
    } else if (j < m) {
      result.push(arr2[j++]);
    }
  }

  return result;
}

export function mergeSort(arr, comparator) {
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle),
      right = arr.slice(middle);

  if (left.length > 1) left = mergeSort(left, comparator);
  if (right.length > 1) right = mergeSort(right, comparator);

  return merge(left, right, comparator);
}

export function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let index = start;
  comparator = getComparator(comparator);

  // Find the number less than the pivot
  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) swap(arr, ++index, i);
  }

  // Move the pivot to correct index
  swap(arr, start, index);

  return index;
}

export function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    // Call the pivot helper on the array
    const pivotIndex = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }
  return arr;
}

/**
 * Mutate an array by swapping array values at the given indexes.
 *
 * @param {array} arr
 * @param {number} idx1
 * @param {number} idx2
 * @return void
 */
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 *
 * @param {function} comparator
 * @return {(function(*, *))|*}
 */
const getComparator = (comparator) => (
    typeof comparator !== 'function' ? (a, b) => a - b : comparator
);

/**
 *
 * @param {number}  num
 * @param {number}  i
 * @return {number}
 */
export function getDigit(num, i) {
  const base = 10;
  return Math.floor(num % Math.pow(base, i + 1) / Math.pow(base, i));
}

/**
 *
 * @param {number}  num
 * @return {number}
 */
export function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 *
 * @param {Array<number>}  nums
 * @return {number}
 */
export function mostDigits(nums) {
  if (!nums.length) return 0;
  return digitCount(Math.max.apply(null, nums));
}

/**
 *
 * @param {Array<number>}  nums
 * @return {Array<number>}
 */
export function radixSort(nums) {
  for (let k = 0, n = mostDigits(nums); k < n; k++) {
    const buckets = Array.from({length: 10}, () => []);

    for (let i = 0, m = nums.length; i < m; i++) {
      const digit = getDigit(nums[i], k);

      buckets[digit].push(nums[i]);
    }

    nums = [].concat(...buckets);
  }
  return nums;
}