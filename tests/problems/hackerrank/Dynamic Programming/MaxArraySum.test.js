import {describe, expect, it} from '@jest/globals';
import {maxSubsetSum} from '../../../../src/problems/hackerrank/Dynamic Programming/MaxArraySum';

describe('Max Array Sum', () => {
  it('should return the maximum sum described in the statement.', function() {
    const tests = [
      {
        arr: [-2, 1, 3, -4, 5],
        expected: 8,
      },
      {
        arr: [-2, -3, -1],
        expected: 0,
      },
      {
        arr: [3, 7, 4, 6, 5],
        expected: 13,
      },
      {
        arr: [2, 1, 5, 8, 4],
        expected: 11,
      },
      {
        arr: [3, 5, -7, 8, 10],
        expected: 15,
      },
    ];

    for (let test of tests) {
      expect(maxSubsetSum(test.arr)).toEqual(test.expected);
    }
  });
});