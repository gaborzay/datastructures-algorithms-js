import {describe, expect, it} from '@jest/globals';
import {swapNodes} from '../../../../src/problems/hackerrank/Search/SwapNodes';

describe('Max Array Sum', () => {
  it('should return the maximum sum described in the statement.', function() {
    const tests = [
      {
        indexes: [[2, 3], [-1, -1], [-1, -1]],
        queries: [1, 1],
        expected: [
          [3, 1, 2],
          [2, 1, 3],
        ],
      },
      {
        indexes: [
          [2, 3],
          [-1, 4],
          [-1, 5],
          [-1, -1],
          [-1, -1],
        ],
        queries: [2],
        expected: [
          [4, 2, 1, 5, 3],
        ],
      },
      {
        indexes: [
          [2, 3],
          [4, -1],
          [5, -1],
          [6, -1],
          [7, 8],
          [-1, 9],
          [-1, -1],
          [10, 11],
          [-1, -1],
          [-1, -1],
          [-1, -1],
        ],
        queries: [2, 4],
        expected: [
          [2, 9, 6, 4, 1, 3, 7, 5, 11, 8, 10],
          [2, 6, 9, 4, 1, 3, 7, 5, 10, 8, 11],
        ],
      },
    ];

    for (let test of tests) {
      expect(swapNodes(test.indexes, test.queries)).toEqual(test.expected);
    }
  });
});