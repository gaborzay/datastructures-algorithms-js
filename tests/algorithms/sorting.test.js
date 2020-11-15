import {describe, expect, it} from '@jest/globals';
import {
  bubbleSort,
  digitCount,
  getDigit,
  insertionSort,
  merge,
  mergeSort,
  mostDigits,
  pivot,
  quickSort,
  radixSort,
  selectionSort,
} from '../../src/algorithms/sorting';

const tests = {
  'matches empty array': {
    'input': [],
    'expected': [],
  },
  'matches ascending order': {
    'input': [1, 2, 3, 4, 5],
    'expected': [1, 2, 3, 4, 5],
  },
  'matches descending order': {
    'input': [5, 4, 3, 2, 1],
    'expected': [1, 2, 3, 4, 5],
  },
  'matches random order': {
    'input': [5, 1, 4, 3, 2, 0],
    'expected': [0, 1, 2, 3, 4, 5],
  },
};

describe('Bubble Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(bubbleSort(input)).toEqual(expected);
    });
  }
});

describe('Insertion Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(insertionSort(input)).toEqual(expected);
    });
  }
});

describe('Selection Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(selectionSort(input)).toEqual(expected);
    });
  }
});

describe('Merge', () => {
  it('merges two sorted arrays correctly', () => {
    expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('merges empty left array with non-empty right array correctly', () => {
    expect(merge([], [2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it('merges empty right array with non-empty left array correctly', () => {
    expect(merge([1, 3, 5, 7], [])).toEqual([1, 3, 5, 7]);
  });

  it('merges identical values correctly', () => {
    expect(merge([2, 2, 3, 3], [2, 2, 3, 3])).toEqual([2, 2, 2, 2, 3, 3, 3, 3]);
  });
});

describe('Merge Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(mergeSort(input)).toEqual(expected);
    });
  }
});

describe('Pivot', () => {
  it('returns the correct pivot index when random', () => {
    const input = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
    expect(pivot(input, 0, 9)).toEqual(3);
  });

  it('returns the correct pivot index when random', () => {
    const input = [4, 8, 2, 1, 5, 7, 6, 3];
    expect(pivot(input, 0, 9)).toEqual(3);
  });

  it('returns the correct pivot index when ascending', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(pivot(input, 0, 9)).toEqual(0);
  });

  it('returns the correct pivot index when descending', () => {
    const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(pivot(input, 0, 9)).toEqual(8);
  });
});

describe('Quick Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(quickSort(input)).toEqual(expected);
    });
  }
});

describe('Get Digit', () => {
  it('should return the digit in num at the given place value', () => {
    const num = 12345;
    expect(getDigit(num, 0)).toEqual(5);
    expect(getDigit(num, 1)).toEqual(4);
    expect(getDigit(num, 2)).toEqual(3);
    expect(getDigit(num, 3)).toEqual(2);
    expect(getDigit(num, 4)).toEqual(1);
    expect(getDigit(num, 5)).toEqual(0);
  });
});

describe('Digit Count', () => {
  it('should return the number of digits in num', () => {
    expect(digitCount(1)).toEqual(1);
    expect(digitCount(25)).toEqual(2);
    expect(digitCount(314)).toEqual(3);
  });
});

describe('Most Digits', () => {
  it('should return the count of the most digits in the array of numbers',
      () => {
        expect(mostDigits([1, 25, 4783, 51, 3, 569, 1, 1236, 85948])).toBe(5);
      });

  it('should handle an empty array gracefully', function() {
    expect(mostDigits([])).toBe(0);
  });
});

describe('Radix Sort', () => {
  for (const i in tests) {
    it(i, () => {
      const input = [...tests[i]['input']];
      const expected = tests[i]['expected'];
      expect(radixSort(input)).toEqual(expected);
    });
  }
});