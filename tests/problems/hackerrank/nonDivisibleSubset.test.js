import {describe, expect, it} from '@jest/globals';
import {nonDivisibleSubset} from '../../../src/problems/hackerrank/Non-Divisible Subset';

describe('nonDivisibleSubset', () => {
  it('Print the size of the largest possible subset', function() {
    const data = [
      {
        k: 3,
        s: [1, 7, 2, 4],
        result: 3,
      },
      {
        k: 4,
        s: [19, 10, 12, 24, 25, 22],
        result: 3,
      },
    ];

    data.forEach(test => {
      expect(nonDivisibleSubset(test.k, test.s)).toBe(test.result);
    });
  });
});