import {describe, expect, it} from '@jest/globals';
import DoublyLinkedList from '../../src/structures/DoublyLinkedList';

describe('DoublyLinkedList@push', () => {
  it('should add data to the end of the list', function() {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.length).toBe(0);
    linkedList.push(5);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.toArray()).toEqual([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);
  });
});
describe('DoublyLinkedList@pop', () => {
  it('should remove data from the end of the list', function() {
    const linkedList = new DoublyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);
    expect(linkedList.pop().data).toBe(4);
    expect(linkedList.pop().data).toBe(3);
    expect(linkedList.pop().data).toBe(2);
    expect(linkedList.pop().data).toBe(5);
    expect(linkedList.size).toBe(0);
    expect(linkedList.pop()).toBeUndefined();
    expect(linkedList.size).toBe(0);
  });
});
describe('DoublyLinkedList@shift', () => {
  it('should remove the data from the beginning of the list', function() {
    const linkedList = new DoublyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);

    expect(linkedList.shift().data).toBe(5);
    expect(linkedList.size).toBe(3);

    expect(linkedList.shift().data).toBe(2);
    expect(linkedList.size).toBe(2);

    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.size).toBe(1);

    expect(linkedList.shift().data).toBe(4);
    expect(linkedList.size).toBe(0);

    expect(linkedList.shift()).toBeUndefined();
    expect(linkedList.size).toBe(0);
  });
});
describe('DoublyLinkedList@unshift', () => {
  it('should add the data from the beginning of the list', function() {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.size).toBe(0);
    expect(linkedList.unshift('a').toArray()).toEqual(['a']);
    expect(linkedList.unshift('b').toArray()).toEqual(['b', 'a']);
    expect(linkedList.unshift('c').toArray()).toEqual(['c', 'b', 'a']);
    expect(linkedList.size).toBe(3);
  });
});
describe('DoublyLinkedList@get', () => {
  it('should find the node at the given index in the list', function() {
    const linkedList = new DoublyLinkedList([5, 2, 3, 4, 6]);
    expect(linkedList.get(-1)).toBeNull();
    expect(linkedList.get(0).data).toBe(5);
    expect(linkedList.get(1).data).toBe(2);
    expect(linkedList.get(2).data).toBe(3);
    expect(linkedList.get(3).data).toBe(4);
    expect(linkedList.get(4).data).toBe(6);
    expect(linkedList.get(5)).toBeNull();
  });
});
describe('DoublyLinkedList@set', () => {
  it('should find the node at the given index in the list and update the value',
      function() {
        const linkedList = new DoublyLinkedList([5, 2, 3, 4]);
        expect(linkedList.get(2).data).toBe(3);
        expect(linkedList.set(2, 'hello world')).toBeTruthy();
        expect(linkedList.get(2).data).toBe('hello world');
        expect(linkedList.set(10, 'hello world')).toBeFalsy();
      });
});
describe('DoublyLinkedList@insert', () => {
  it('should insert a node at a given index in the list', function() {
    const linkedList = new DoublyLinkedList([5, 2, 3, 4]);
    expect(linkedList.size).toBe(4);

    linkedList.insert(0, 'hello');
    expect(linkedList.size).toBe(5);
    expect(linkedList.get(0).data).toBe('hello');

    linkedList.insert(3, 'world');
    expect(linkedList.size).toBe(6);
    expect(linkedList.get(3).data).toBe('world');
  });
});
describe('DoublyLinkedList@remove', () => {
  it('should remove the node at a given index in the list', function() {
    const linkedList = new DoublyLinkedList([5, 2, 3, 4]);

    expect(linkedList.size).toBe(4);
    expect(linkedList.remove(100)).toBeUndefined();
    expect(linkedList.remove(0).data).toBe(5);
    expect(linkedList.size).toBe(3);
    expect(linkedList.remove(1).data).toBe(3);
    expect(linkedList.size).toBe(2);
  });
});
describe('DoublyLinkedList@reverse', () => {
  it('should reverse the list in place', function() {});
});