function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function getComparator(comparator) {
  return typeof comparator !== 'function' ? (a, b) => a - b : comparator;
}

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