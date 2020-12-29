import {describe, expect, it} from '@jest/globals';
import IsUnique
  from '../../../../src/problems/ctci/1. Arrays and Strings/IsUnique';

describe('Determine if a string has all unique characters', () => {
  const check = new IsUnique();

  it('should return true if string is unique', () => {
    ['abc', 'abnsdfwe'].forEach(str => {
      expect(check.withDataStructures(str)).toBeTruthy();
      expect(check.withoutDataStructures(str)).toBeTruthy();
    });
  });

  it('should return false if string is not unique', () => {
    ['abbbba', 'abnsdfawe'].forEach(str => {
      expect(check.withDataStructures(str)).toBeFalsy();
      expect(check.withoutDataStructures(str)).toBeFalsy();
    });
  });
});