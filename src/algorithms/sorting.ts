/**
 * Swap the two values in an array.
 *
 * @param arr
 * @param index1
 * @param index2
 */
export const swap = (arr: number[], index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

/**
 * Bubble Sort:
 * Good when almost sorted data
 * Good with small datasets
 *
 * Time Complexity
 *  Best: O(n)
 *  Average: O(n^2)
 *  Worst: O(n^2)
 * Space Complexity: O(1)
 *
 * @param arr
 */
export function bubbleSort(arr: number[]): number[] {
    // Optimization: once array already sorted, we don't need to sort anymore.
    let noSwaps: boolean;
    // Start looping with a variable called i from the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        // Start an inner loop with a variable called j from the beginning until i - 1
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    // return sorted array
    return arr;
}

/**
 * Insertion Sort
 * Great with continuous sort with incoming data
 * Good with small datasets
 *
 * Time Complexity
 *  Best: O(n)
 *  Average: O(n^2)
 *  Worst: O(n^2)
 * Space Complexity: O(1)
 *
 * @param arr
 */
export function insertionSort(arr: number[]): number[] {
    for (let i = 1, n = arr.length; i < n; i++) {
        // Start by picking the second element in the array
        let currentVal = arr[i];
        // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
        let j = i - 1;
        // Now compare the second element with the one before it and swap if necessary.
        for (; j > -1 && arr[j] > currentVal; j--) arr[j + 1] = arr[j];
        // (i.e. the left side) to the place the element in the correct place.
        arr[j + 1] = currentVal;
        // Repeat until the array is sorted.
    }
    // return the sorted array
    return arr;
}

/**
 * Selection Sort
 *
 * Time Complexity
 *  Best: O(n^2)
 *  Average: O(n^2)
 *  Worst: O(n^2)
 * Space Complexity: O(1)
 *
 * @param arr
 */
export function selectionSort(arr: number[]): number[] {
    // Repeat this with the next element until the array is sorted.
    for (let i = 0, n = arr.length; i < n; i++) {
        // Store the first element as the smallest value you've seen so far.
        let lowest = i;
        // Compare this item to the next item in the array until you find a smaller number.
        for (let j = i + 1; j < n; j++) {
            // If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
            if (arr[lowest] > arr[j]) lowest = j;
        }
        // If the "minimum" is not the value (index) you initially began with, swap the two values.
        if (lowest !== i) {
            swap(arr, i, lowest);
        }
    }
    // return the sorted array
    return arr;
}

/**
 * Merge
 *
 * Time Complexity: O(m + n)
 *
 * @param m Sorted array of numbers
 * @param n Sorted array of numbers
 */
export function merge(m: number[], n: number[]): number[] {
    // Create an empty array, take a look at the smallest values in each input array
    const results = [];
    let i = 0;
    let j = 0;
    // While there are still values we haven't looked at...
    while (i < m.length && j < n.length) {
        if (m[i] < n[j]) {
            // If the value in the first array is smaller than the value in the second array,
            // push the value in the first array into our results and move on to the next value in the first array
            results.push(m[i++]);
        } else {
            // If the value in the first array is larger than the value in the second array,
            // push the value in the second array into our results and move on to the next value in the second array
            results.push(n[j++]);
        }
    }
    // Once we exhaust one array, push in all remaining values from the other array
    while (j < n.length) {
        results.push(n[j++]);
    }
    while (i < m.length) {
        results.push(m[i++]);
    }
    // Return merged arrays
    return results;
}

/**
 * Merge Sort
 *
 * Time Complexity
 *  Best: O(n log(n))
 *  Average: O(n log(n))
 *  Worst: O(n log(n))
 * Space Complexity: O(n)
 *
 * @param arr
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    // Break up the array into halves until you have arrays that are empty or have one element
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, arr.length));
    // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    // Once the array has been merged back together, return the merged (and sorted!) array
    return merge(left, right);
}

/**
 * Pivot
 *
 * @param arr
 * @param start
 * @param end
 */
export function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
    // It will help to accept three arguments: an array, a start index, and an end index
    // (these can default to 0 and the array length minus 1, respectively)
    // Grab the pivot from the start of the array
    const pivot = arr[start];
    // Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    let pivotIndex = start;
    // Loop through the array from the start until the end
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            // If the pivot is greater than the current element, increment the pivot index variable
            // and then swap the current element with the element at the pivot index
            swap(arr, ++pivotIndex, i)
        }
    }
    // Swap the starting element (i.e. the pivot) with the pivot index
    swap(arr, start, pivotIndex);
    // Return the pivot index
    return pivotIndex;
}

/**
 * Quick Sort
 * Worst case when array already sorted
 *
 * Time Complexity
 *  Best: O(n log(n))
 *  Average: O(n log(n))
 *  Worst: O(n^2)
 * Space Complexity: O(log n)
 *
 * @param arr
 * @param left
 * @param right
 */
export function quickSort(arr: number[], left: number = 0, right: number = arr.length): number[] {
    // Your base case occurs when you consider a subarray with less than 2 elements
    if (left < right) {
        // Call the pivot helper on the array
        const pivotIndex = pivot(arr, left, right);
        // When the helper returns to you the updated pivot index, recursively call
        // the pivot helper on the subarray to the left of that index,
        // and the subarray to the right of that index
        quickSort(arr, left, pivotIndex - 1); // left
        quickSort(arr, pivotIndex + 1, right); // right
    }
    return arr;
}

/**
 * Get Digit
 * Returns the digit in num at the given place value
 *
 * @param num
 * @param place
 * @param base
 */
export function getDigit(num: number, place: number, base: number = 10) {
    return Math.floor(Math.abs(num) / Math.pow(base, place)) % 10;
}

/**
 * Digit Count
 * Returns the number of digits in num
 *
 * @param num
 */
export function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Most Digits
 * Given an array of numbers, returns the number of digits in the largest
 * numbers in the list
 *
 * @param nums
 */
export function mostDigits(nums: number[]): number {
    if (nums.length === 0) return 0;
    return digitCount(Math.max.apply(null, nums));
}

/**
 * Radix Sort
 *
 * Only works on positive integers
 *
 * n: length of array
 * k: word size
 *
 * Time Complexity
 *  Best: O(nk)
 *  Average: O(nk)
 *  Worst: O(nk)
 * Space Complexity: O(n + k)
 *
 * @param nums
 */
export function radixSort(nums: number[]): number[] {
    // Define a function that accepts a list of numbers
    // Figure out how many digits the largest number has
    // Loop from k = 0 up to this largest number of digits
    for (let k = 0, n = mostDigits(nums); k < n; k++) {
        // For each iteration of the loop:
        // Create buckets for each digit (0 to 9)
        const buckets = Array.from({length: 10}, () => []);
        // Place each number in the corresponding bucket based on its kth digit
        for (let i = 0, m = nums.length; i < m; i++) {
            const digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }
        // Replace our existing array with values in our buckets,
        // starting with 0 and going up to 9
        nums = [].concat(...buckets);
    }
    // return list at the end!
    return nums;
}