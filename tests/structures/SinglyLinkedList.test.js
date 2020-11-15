import {describe, expect, it} from '@jest/globals';
import SinglyLinkedList from '../../src/structures/SinglyLinkedList';

describe('SinglyLinkedList@push', () => {
  it('should add data to the end of the list', function() {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.size).toBe(0);
    linkedList.push(5).push(2).push(3).push(4);
    expect(linkedList.toArray()).toEqual([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);
  });
});
describe('SinglyLinkedList@pop', () => {
  it('should remove data from the end of the list', function() {
    const linkedList = new SinglyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);
    expect(linkedList.pop()).toBe(4);
    expect(linkedList.pop()).toBe(3);
    expect(linkedList.pop()).toBe(2);
    expect(linkedList.pop()).toBe(5);
    expect(linkedList.size).toBe(0);
    expect(linkedList.pop()).toBeUndefined();
    expect(linkedList.size).toBe(0);
  });
});
describe('SinglyLinkedList@shift', () => {
  it('should remove the data from the beginning of the list', function() {
    const linkedList = new SinglyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);

    expect(linkedList.shift()).toBe(5);
    expect(linkedList.size).toBe(3);

    expect(linkedList.shift()).toBe(2);
    expect(linkedList.size).toBe(2);

    expect(linkedList.shift()).toBe(3);
    expect(linkedList.size).toBe(1);

    expect(linkedList.shift()).toBe(4);
    expect(linkedList.size).toBe(0);

    expect(linkedList.shift()).toBeUndefined();
    expect(linkedList.size).toBe(0);
  });
});
describe('SinglyLinkedList@unshift', () => {
  it('should add the data from the beginning of the list', function() {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.size).toBe(0);
    expect(linkedList.unshift('a').toArray()).toEqual(['a']);
    expect(linkedList.unshift('b').toArray()).toEqual(['b', 'a']);
    expect(linkedList.unshift('c').toArray()).toEqual(['c', 'b', 'a']);
    expect(linkedList.size).toBe(3);
  });
});
describe('SinglyLinkedList@get', () => {
  it('should find the node at the given index in the list', function() {
    const linkedList = new SinglyLinkedList([5, 2, 3, 4]);
    expect(linkedList.get(-1)).toBeNull();
    expect(linkedList.get(0).data).toBe(5);
    expect(linkedList.get(1).data).toBe(2);
    expect(linkedList.get(2).data).toBe(3);
    expect(linkedList.get(3).data).toBe(4);
    expect(linkedList.get(4)).toBeNull();
  });
});
describe('SinglyLinkedList@set', () => {
  it('should find the node at the given index in the list and update the value',
      function() {
        const linkedList = new SinglyLinkedList([5, 2, 3, 4]);
        expect(linkedList.get(2).data).toBe(3);
        expect(linkedList.set(2, 'hello world')).toBeTruthy();
        expect(linkedList.get(2).data).toBe('hello world');
        expect(linkedList.set(10, 'hello world')).toBeFalsy();
      });
});
describe('SinglyLinkedList@insert', () => {
  it('should insert a node at a given index in the list', function() {
    const linkedList = new SinglyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);

    linkedList.insert(0, 'hello');
    expect(linkedList.size).toBe(5);
    expect(linkedList.get(0).data).toBe('hello');

    linkedList.insert(3, 'world');
    expect(linkedList.size).toBe(6);
    expect(linkedList.get(3).data).toBe('world');
  });
});
describe('SinglyLinkedList@remove', () => {
  it('should remove the node at a given index in the list', function() {
    const linkedList = new SinglyLinkedList([5, 2, 3, 4]);

    expect(linkedList.remove(100)).toBeUndefined();
    expect(linkedList.remove(0)).toBe(5);
    expect(linkedList.remove(1)).toBe(3);
  });
});
describe('SinglyLinkedList@reverse', () => {
  it('should reverse the list in place', function() {
    const linkedList = new SinglyLinkedList([1, 2, 3, 4, 5]);

    expect(linkedList.reverse().toArray()).toEqual([5, 4, 3, 2, 1]);
  });
});