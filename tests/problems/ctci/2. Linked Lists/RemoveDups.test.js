import {describe, expect, it} from '@jest/globals';
import RemoveDups
  from '../../../../src/problems/ctci/2. Linked Lists/RemoveDups';

describe('Remove duplicates from an unsorted linked list', () => {
  it('should not remove anything if the list has no duplicates', function() {
    [
      {
        list: ['a', 'b', 'c', 'd', 'e', 'f'],
        expected: ['a', 'b', 'c', 'd', 'e', 'f'],
      },
    ].forEach(test => {
      const linkedList = new RemoveDups(test.list);
      expect(linkedList.removeDuplicatesWithHashTable().toArray()).
          toEqual(test.expected);
      expect(linkedList.removeDuplicatesWithPointers().toArray()).
          toEqual(test.expected);
    });
  });

  it('should remove duplicates if the list has duplicates', function() {
    [
      {
        list: ['h', 'e', 'l', 'l', 'o'],
        expected: ['h', 'e', 'l', 'o'],
      },
      {
        list: ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
        expected: ['r', 'a', 'c', 'e'],
      },
    ].forEach(test => {
      const linkedList = new RemoveDups(test.list);
      expect(linkedList.removeDuplicatesWithHashTable().toArray()).
          toEqual(test.expected);
      expect(linkedList.removeDuplicatesWithPointers().toArray()).
          toEqual(test.expected);
    });
  });
});