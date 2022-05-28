import {describe, expect, it} from '@jest/globals';
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  merge,
  pivot,
  quickSort,
  getDigit,
  digitCount, mostDigits, radixSort,
} from '../../../src/problems/algos_and_ds/sorting';

describe('Sorting Algorithms with a comparator', () => {
  const tests = [
    {
      arr: [4, 20, 12, 10, 7, 9],
      comparator: null,
      expected: [4, 7, 9, 10, 12, 20],
    },
    {
      arr: [0, -10, 7, 4],
      comparator: null,
      expected: [-10, 0, 4, 7],
    },
    {
      arr: [1, 2, 3],
      comparator: null,
      expected: [1, 2, 3],
    },
    {
      arr: [
        4,
        3,
        5,
        3,
        43,
        232,
        4,
        34,
        323,
        32,
        4,
        35,
        34,
        23,
        2,
        453,
        546,
        75,
        67,
        4342],
      comparator: null,
      expected: [
        2,
        3,
        3,
        4,
        4,
        4,
        5,
        23,
        32,
        34,
        34,
        35,
        43,
        67,
        75,
        232,
        323,
        453,
        546,
        4342],
    },
    {
      arr: ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'],
      comparator: function(a, b) {
        if (a < b) {return -1;} else if (a > b) {return 1;}
        return 0;
      },
      expected: ['Blue', 'Garfield', 'Grumpy', 'Heathcliff', 'LilBub'],
    },
    {
      arr: [
        {name: 'LilBub', age: 7},
        {name: 'Garfield', age: 40},
        {name: 'Heathcliff', age: 45},
        {name: 'Blue', age: 1},
        {name: 'Grump', age: 6},
      ],
      comparator: (a, b) => b.age - a.age,
      expected: [
        {name: 'Heathcliff', age: 45},
        {name: 'Garfield', age: 40},
        {name: 'LilBub', age: 7},
        {name: 'Grump', age: 6},
        {name: 'Blue', age: 1},
      ],
    },
  ];

  it('should selection sort', function() {
    tests.forEach(test => {
      expect(selectionSort([...test.arr], test.comparator)).
          toEqual(test.expected);
    });
  });

  it('should bubble sort', function() {
    tests.forEach(test => {
      expect(bubbleSort([...test.arr], test.comparator)).toEqual(test.expected);
    });
  });

  it('should insertion sort', function() {
    tests.forEach(test => {
      expect(insertionSort([...test.arr], test.comparator)).
          toEqual(test.expected);
    });
  });

  it('should merge sort', function() {
    tests.forEach(test => {
      expect(mergeSort([...test.arr], test.comparator)).toEqual(test.expected);
    });
  });

  it('should quick sort', function() {
    tests.forEach(test => {
      expect(quickSort([...test.arr], test.comparator)).toEqual(test.expected);
    });
  });
});

describe('Merge Helper', () => {
  it('should correctly merge two sorted arrays', function() {
    const tests = [
      {
        arr1: [1, 3, 4, 5],
        arr2: [2, 4, 6, 8],
        comparator: null,
        expected: [1, 2, 3, 4, 4, 5, 6, 8],
      },
      {
        arr1: [-2, -1, 0, 4, 5, 6],
        arr2: [-3, -2, -1, 2, 3, 5, 7, 8],
        comparator: null,
        expected: [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8],
      },
      {
        arr1: [3, 4, 5],
        arr2: [1, 2],
        comparator: null,
        expected: [1, 2, 3, 4, 5],
      },
      {
        arr1: ['Bob', 'Ethel', 'Christine'],
        arr2: ['M', 'Colt', 'Allison', 'SuperLongNameOMG'],
        comparator: (str1, str2) => str1.length - str2.length,
        expected: [
          'M',
          'Bob',
          'Colt',
          'Ethel',
          'Allison',
          'Christine',
          'SuperLongNameOMG'],
      },
    ];

    tests.forEach(test => {
      expect(merge(test.arr1, test.arr2, test.comparator)).
          toEqual(test.expected);
    });
  });
});

describe('Pivot Helper', () => {
  it('should pivot the array correctly', function() {
    const tests = [
      {
        arr: [5, 4, 9, 10, 2, 20, 8, 7, 3],
        comparator: (a, b) => a - b,
        expected: 3,
        expectedLeft: [2, 3, 4],
        expectedRight: [5, 7, 8, 9, 10, 20],
      },
      {
        arr: [8, 4, 2, 5, 0, 10, 11, 12, 13, 16],
        comparator: (a, b) => a - b,
        expected: 4,
        expectedLeft: [0, 2, 4, 5],
        expectedRight: [8, 10, 11, 12, 13, 16],
      },
      {
        arr: ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'],
        comparator: (a, b) => a.length - b.length,
        expected: 1,
        expectedLeft: ['Blue'],
        expectedRight: ['LilBub', 'Grumpy', 'Garfield', 'Heathcliff'],
      },
    ];

    tests.forEach(test => {
      expect(pivot(test.arr, test.comparator)).toBe(test.expected);
      expect(test.arr.slice(0, test.expected).sort(test.comparator)).toEqual(test.expectedLeft);
      expect(test.arr.slice(test.expected).sort(test.comparator)).toEqual(test.expectedRight);
    });
  });
});

describe('Raxix Sort', () => {
  it('should getDigit correctly', function() {
    const tests = [
      {
        num: 12345,
        i: 0,
        expected: 5,
      },
      {
        num: 12345,
        i: 1,
        expected: 4,
      },
      {
        num: 12345,
        i: 2,
        expected: 3,
      },
      {
        num: 12345,
        i: 3,
        expected: 2,
      },
      {
        num: 12345,
        i: 4,
        expected: 1,
      },
      {
        num: 8987,
        i: 0,
        expected: 7,
      },
      {
        num: 8987,
        i: 1,
        expected: 8,
      },
      {
        num: 8987,
        i: 2,
        expected: 9,
      },
      {
        num: 8987,
        i: 3,
        expected: 8,
      },
      {
        num: 8987,
        i: 4,
        expected: 0,
      },
    ];

    tests.forEach(test => {
      expect(getDigit(test.num, test.i)).toBe(test.expected);
    });
  });

  it('should digitCount correctly', function() {
    const tests = [
      {
        num: 1,
        expected: 1,
      },
      {
        num: 9,
        expected: 1,
      },
      {
        num: 25,
        expected: 2,
      },
      {
        num: 314,
        expected: 3,
      },
      {
        num: 1234,
        expected: 4,
      },
      {
        num: 77777,
        expected: 5,
      },
    ];

    tests.forEach(test => {
      expect(digitCount(test.num)).toBe(test.expected);
    });
  });

  it('should mostDigits correctly', function() {
    const tests = [
      {
        nums: [1, 9, 10, 100, 99],
        expected: 3,
      },
      {
        nums: [100, 1010, 1, 500],
        expected: 4,
      },
      {
        nums: [0, 100000, 400, 12, 8],
        expected: 6,
      },
      {
        nums: [],
        expected: 0,
      },
    ];

    tests.forEach(test => {
      expect(mostDigits(test.nums)).toEqual(test.expected);
    });
  });

  it('should radix sort correctly', function() {
    const tests = [
      {
        nums: [8, 6, 1, 12],
        expected: [1, 6, 8, 12],
      },
      {
        nums: [10, 100, 1, 1000, 1000000],
        expected: [1, 10, 100, 1000, 1000000],
      },
      {
        nums: [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593],
        expected: [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637],
      },
    ];

    tests.forEach(test => {
      expect(radixSort(test.nums)).toEqual(test.expected);
    });
  });
});