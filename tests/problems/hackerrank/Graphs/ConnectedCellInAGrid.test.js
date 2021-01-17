import {describe, expect, it} from '@jest/globals';
import {maxRegion} from '../../../../src/problems/hackerrank/Graphs/ConnectedCellInAGrid';

describe('DFS: Connected Cell in a Grid', () => {
  it('should print the number of cells in the largest region in the given matrix.',
      function() {
        const tests = [
          {
            grid: [
              [1, 1, 0, 0],
              [0, 1, 1, 0],
              [0, 0, 1, 0],
              [1, 0, 0, 0],
            ],
            expected: 5,
          },
          {
            grid: [
              [1, 0, 0, 1, 0, 1, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0],
              [1, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 1],
              [0, 1, 0, 0, 0, 1, 0, 0],
            ],
            expected: 1,
          },
        ];

        for (let test of tests) {
          expect(maxRegion(test.grid)).toEqual(test.expected);
        }
      });
});