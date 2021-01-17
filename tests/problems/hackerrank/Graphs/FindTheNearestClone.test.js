import {describe, expect, it} from '@jest/globals';
import {findShortest} from '../../../../src/problems/hackerrank/Graphs/FindTheNearestClone';

describe('Find the nearest clone', () => {
  it('should print the single integer representing the smallest path length or -1.',
      function() {
        const tests = [
          {
            graphNodes: 4,
            graphFrom: [1, 1, 4],
            graphTo: [2, 3, 2],
            ids: [1, 2, 1, 1],
            val: 1,
            expected: 1,
          },
          {
            graphNodes: 4,
            graphFrom: [1, 1, 4],
            graphTo: [2, 3, 2],
            ids: [1, 2, 3, 4],
            val: 2,
            expected: -1,
          },
          {
            graphNodes: 5,
            graphFrom: [1, 1, 2, 3],
            graphTo: [2, 3, 4, 5],
            ids: [1, 2, 3, 3, 2],
            val: 2,
            expected: 3,
          },
        ];

        for (let test of tests) {
          const result = findShortest(
              test.graphNodes,
              test.graphFrom,
              test.graphTo,
              test.ids,
              test.val,
          );
          expect(result).toEqual(test.expected);
        }
      });
});