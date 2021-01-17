import {describe, expect, it} from '@jest/globals';
import {flippingBits} from '../../../../src/problems/hackerrank/Miscellaneous/FlippingBits';

describe('Flipping bits', () => {
  it('should output one line per element from the list with the decimal value of the resulting unsigned integer.',
      () => {
        const tests = [
          {
            n: 2147483647,
            expected: 2147483648,
          },
          {
            n: 1,
            expected: 4294967294,
          },
          {
            n: 0,
            expected: 4294967295,
          },
          {
            n: 4,
            expected: 4294967291,
          },
          {
            n: 123456,
            expected: 4294843839,
          },
        ];

        for (let test of tests) {
          expect(flippingBits(test.n)).toEqual(test.expected);
        }
      });
});