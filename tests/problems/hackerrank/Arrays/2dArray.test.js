import {describe, expect, it} from '@jest/globals';
import {hourglassSum} from '../../../../src/problems/hackerrank/Arrays/2dArrray';

describe('2d Array', () => {
  it('It should print the largest (maximum) hourglass sum found in .',
      function() {
        const tests = [
          {
            arr: [
              [1, 1, 1, 0, 0, 0],
              [0, 1, 0, 0, 0, 0],
              [1, 1, 1, 0, 0, 0],
              [0, 0, 2, 4, 4, 0],
              [0, 0, 0, 2, 0, 0],
              [0, 0, 1, 2, 4, 0],
            ],
            result: 19,
          },
          {
            arr: [
              [-1, -1, 0, -9, -2, -2],
              [-2, -1, -6, -8, -2, -5],
              [-1, -1, -1, -2, -3, -4],
              [-1, -9, -2, -4, -4, -5],
              [-7, -3, -3, -2, -9, -9],
              [-1, -3, -1, -2, -4, -5],
            ],
            result: -6,
          },
        ];

        tests.forEach(test => {
          expect(hourglassSum(test.arr)).toBe(test.result);
        });
      });
});