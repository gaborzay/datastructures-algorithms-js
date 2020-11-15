import {describe, expect, it} from '@jest/globals';
import BinarySearchTree from '../../src/structures/BinarySearchTree';

describe('BinarySearchTree@insert', () => {
  //       10
  //    5     13
  //  2  7  11  16
  const tree = new BinarySearchTree();

  it('should insert the root correctly', function() {
    tree.insert(10);
    expect(tree.root.data).toEqual(10);
  });

  it('should insert a value greater than root to the right', function() {
    tree.insert(13);
    expect(tree.root.right).toBeTruthy();
    expect(tree.root.right.data).toBe(13);
  });

  it('should insert a value less than the root to the left', function() {
    tree.insert(5);
    expect(tree.root.left).toBeTruthy();
    expect(tree.root.left.data).toBe(5);
  });

  it('should insert correctly for more levels', function() {
    tree.insert(2).insert(7).insert(11).insert(16);
    expect(tree.root.left.left.data).toBe(2);
    expect(tree.root.left.right.data).toBe(7);
    expect(tree.root.right.left.data).toBe(11);
    expect(tree.root.right.right.data).toBe(16);
  });

  it('should return undefined for duplicate', function() {
    expect(tree.insert(10)).toBeUndefined();
    expect(tree.insert(2)).toBeUndefined();
    expect(tree.insert(16)).toBeUndefined();
  });
});

describe('BinarySearchTree@find', () => {
  it('should return null for an empty tree', function() {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.find(10)).toBeNull();
  });

  it('should return node if found', function() {
    const tree = new BinarySearchTree([10, 5, 13, 2, 7, 11, 16]);
    expect(tree.find(10).data).toBe(10);
    expect(tree.find(2).data).toBe(2);
    expect(tree.find(16).data).toBe(16);
  });
});

describe('BinarySearchTree@breadthFirstSearch', () => {
  it('should visit return empty array when tree empty', function() {
    const tree = new BinarySearchTree();
    expect(tree.breadthFirstSearch()).toEqual([]);
  });

  it('should visit all the nodes in the tree in correct order', function() {
    //    10
    //   6  15
    // 3  8   20
    const tree = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
    //           10 (1)
    //     6 (2)        15 (3)
    //3 (4)  8 (5)             20 (6)
    expect(tree.breadthFirstSearch()).toEqual([10, 6, 15, 3, 8, 20]);
  });
});

describe('BinarySearchTree@preOrder', () => {
  it('should visit return empty array when tree empty', function() {
    const tree = new BinarySearchTree();
    expect(tree.preOrder()).toEqual([]);
  });

  it('should visit all the nodes in the tree in correct order', function() {
    //    10
    //   6  15
    // 3  8   20
    const tree = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
    //           10 (1)
    //     6 (2)        15 (5)
    //3 (3)  8 (4)             20 (6)
    expect(tree.preOrder()).toEqual([10, 6, 3, 8, 15, 20]);
  });
});

describe('BinarySearchTree@postOrder', () => {
  it('should visit return empty array when tree empty', function() {
    const tree = new BinarySearchTree();
    expect(tree.postOrder()).toEqual([]);
  });

  it('should visit all the nodes in the tree in correct order', function() {
    //    10
    //   6  15
    // 3  8   20
    const tree = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
    //           10 (6)
    //     6 (3)        15 (5)
    //3 (1)  8 (2)             20 (4)
    expect(tree.postOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });
});

describe('BinarySearchTree@inOrder', () => {
  it('should visit return empty array when tree empty', function() {
    const tree = new BinarySearchTree();
    expect(tree.inOrder()).toEqual([]);
  });

  it('should visit all the nodes in the tree in correct order', function() {
    //    10
    //   6  15
    // 3  8   20
    const tree = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
    //           10 (4)
    //     6 (2)        15 (6)
    //3 (1)  8 (3)             20 (5)
    expect(tree.inOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});