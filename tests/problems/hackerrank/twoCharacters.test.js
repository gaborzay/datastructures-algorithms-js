import {describe, expect, it} from '@jest/globals';
import {alternate} from '../../../src/problems/hackerrank/Two-Characters';

describe('alternate', () => {
  it('Print a single integer denoting the maximum length of  for the given ; if it is not possible to form string , print  instead.', function() {
    const data = [
      {
        s: 'abaacdabd',
        result: 4,
      },
      {
        s: 'beabeefeab',
        result: 5,
      },
    ];

    data.forEach(test => {
      expect(alternate(test.s)).toBe(test.result);
    });
  });
});