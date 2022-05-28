import {describe, expect, it} from '@jest/globals';
import {commonChild} from '../../../../src/problems/hackerrank/String Manipulation/CommonChild';

describe('Common Child', () => {
  it('should print the length of the longest string s, such that s is a child of both s1 and s2.',
      function() {
        const tests = [
          {
            s1: 'OUDFRMYMAW',
            s2: 'AWHYFCCMQX',
            expected: 2,
          },
          {
            s1: 'HARRY',
            s2: 'SALLY',
            expected: 2,
          },
          {
            s1: 'AA',
            s2: 'BB',
            expected: 0,
          },
          {
            s1: 'SHINCHAN',
            s2: 'NOHARAAA',
            expected: 3,
          },
          {
            s1: 'ABCDEF',
            s2: 'FBDAMN',
            expected: 2,
          },
        ];

        tests.forEach(test => expect(commonChild(test.s1, test.s2)).toEqual(test.expected));
      });
});