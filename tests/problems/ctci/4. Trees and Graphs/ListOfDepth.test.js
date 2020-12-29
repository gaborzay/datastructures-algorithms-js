import {describe, expect, it} from '@jest/globals';
import ListOfDepths
  from '../../../../src/problems/ctci/4. Trees and Graphs/ListOfDepths';
import Node from '../../../../src/structures/Node';

describe('List of Depths', () => {
  //     a
  //   /   \
  //  b     c
  // /     / \
  //d     e   f
  //         / \
  //        g   h
  const root = new Node('a');
  root.left = new Node('b');
  root.right = new Node('c');
  root.left.left = new Node('d');
  root.right.left = new Node('e');
  root.right.right = new Node('f');
  root.right.right.left = new Node('g');
  root.right.right.right = new Node('h');

  it('Should return a linked list of nodes at each depth', function() {
    const tree = new ListOfDepths();
    const depths = tree.depths(root);
    expect(depths[0].size).toEqual(1);
    expect(depths[1].size).toEqual(2);
    expect(depths[2].size).toEqual(3);
    expect(depths[3].size).toEqual(2);
  });
});