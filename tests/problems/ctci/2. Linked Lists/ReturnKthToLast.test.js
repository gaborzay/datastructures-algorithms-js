import {describe, expect, it} from '@jest/globals';
import ReturnKthToLast
  from '../../../../src/problems/ctci/2. Linked Lists/ReturnKthToLast';

describe('Find the kth to last element of a singly linked list', () => {
  it('should correctly return the kth to last element', () => {
    [
      {
        list: ['a', 'b', 'c', 'd', 'e'],
        k: 3,
        expected: 'c',
      },
    ].forEach(test => {
      const list = new ReturnKthToLast(test.list);
      expect(list.printIterative(test.k).data).toEqual(test.expected);
      expect(list.printRecursive(test.k).data).toEqual(test.expected);
    });
  });
});