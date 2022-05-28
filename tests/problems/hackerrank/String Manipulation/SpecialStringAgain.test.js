import {describe, expect, it} from '@jest/globals';
import {substrCount} from '../../../../src/problems/hackerrank/String Manipulation/SpecialStringAgain';

describe('Special String Again', () => {
  it('should print a single line containing the count of total special substrings.',
      function() {
        const tests = [
          {
            n: 5,
            s: 'asasd',
            expected: 7,
          },
          {
            n: 7,
            s: 'abcbaba',
            expected: 10,
          },
          {
            n: 4,
            s: 'aaaaa',
            expected: 10,
          },
        ];

        tests.forEach(test => expect(substrCount(test.n, test.s)).toEqual(test.expected));
      });
});