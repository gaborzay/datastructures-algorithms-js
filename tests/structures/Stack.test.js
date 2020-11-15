import {describe, expect, it} from '@jest/globals';
import Stack from '../../src/structures/Stack';

describe('Stack@push', () => {
  it('should push data to the end of stack', function() {
    const stack = new Stack();
    expect(stack.size).toBe(0);
    expect(stack.push(1)).toBe(1);
    expect(stack.push(2)).toBe(2);
    expect(stack.push(3)).toBe(3);
    expect(stack.push(4)).toBe(4);
    expect(stack.push(5)).toBe(5);
    expect(stack.first).toBe(5);
    expect(stack.last).toBe(1);
  });
});

describe('Stack@pop', () => {
  it('should pop data from the end of stack', function() {
    const stack = new Stack([5, 4, 3, 2, 1]);
    expect(stack.first).toBe(1);
    expect(stack.last).toBe(5);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(4);
    expect(stack.size).toBe(1);
  });
});