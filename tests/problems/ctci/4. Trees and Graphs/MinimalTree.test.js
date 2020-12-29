import {describe, expect, it} from '@jest/globals';
import MinimalTree
  from '../../../../src/problems/ctci/4. Trees and Graphs/MinimalTree';

describe('Minimal Tree', () => {
  it('should correctly generate a minimal tree', function() {
    const tree = new MinimalTree();
    const arr = [0, 1, 3, 5, 9, 12, 30];
    tree.generate(arr);
    expect(tree.levelOrder()).toEqual([5, 1, 12, 0, 3, 9, 30]);
  });
});