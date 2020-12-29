import {describe, expect, it} from '@jest/globals';
import CheckPermutation
  from '../../../../src/problems/ctci/1. Arrays and Strings/CheckPermutation';

describe('Decide if one string is a permutation of the other.', () => {
  const permutation = new CheckPermutation();

  it('should determine if a string is a permutation', function() {
    [
      {
        str1: 'hello',
        str2: 'olleh',
      },
      {
        str1: 'racecar',
        str2: 'raccear',
      },
    ].forEach(test => {
      expect(permutation.withFrequencies(test.str1, test.str2)).toBeTruthy();
      expect(permutation.withSorting(test.str1, test.str2)).toBeTruthy();
    });
  });

  it('should determine if a string is not a permutation', function() {
    [
      {
        str1: 'hello',
        str2: 'world',
      },
      {
        str1: 'zoom',
        str2: 'boom',
      },
      {
        str1: 'cat',
        str2: 'lion',
      },
    ].forEach(test => {
      expect(permutation.withFrequencies(test.str1, test.str2)).toBeFalsy();
      expect(permutation.withSorting(test.str1, test.str2)).toBeFalsy();
    });
  });
});