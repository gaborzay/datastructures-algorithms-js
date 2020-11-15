import {describe, expect, it} from '@jest/globals';
import PriorityQueue from '../../src/structures/PriorityQueue';

describe('PriorityQueue@enqueue', () => {
  it('should insert the values correctly into the max heap', function() {
    const priorityQueue = new PriorityQueue([
      [41, 1],
      ['world', 2],
      [33, 1],
      ['hello', 1],
      [27, 5],
      ['blue', 5],
      [55, 4],
      ['cat', 3],
      ['dog', 3],
    ]);

    priorityQueue.values.forEach((item, index) => {
      const parent = priorityQueue.values[index];
      const left = priorityQueue.values[priorityQueue.leftChild(index)];
      const right = priorityQueue.values[priorityQueue.rightChild(index)];

      if (left) expect(parent.priority).toBeLessThanOrEqual(left.priority);
      if (right)expect(parent.priority).toBeLessThanOrEqual(right.priority);
    });
  });
});

describe('MaxBinaryHeap@sink', () => {
  it('should extract the max value correctly', function() {
    const priorityQueue = new PriorityQueue([
      [41, 1],
      ['world', 2],
      [33, 1],
      ['hello', 1],
      [27, 5],
      ['blue', 5],
      [55, 4],
      ['cat', 3],
      ['dog', 3],
    ]);

    expect(priorityQueue.dequeue().priority).toBe(1);
    expect(priorityQueue.dequeue().priority).toBe(1);
    expect(priorityQueue.dequeue().priority).toBe(1);
    expect(priorityQueue.dequeue().priority).toBe(2);
    expect(priorityQueue.dequeue().priority).toBe(3);
    expect(priorityQueue.dequeue().priority).toBe(3);
    expect(priorityQueue.dequeue().priority).toBe(4);
    expect(priorityQueue.dequeue().priority).toBe(5);
    expect(priorityQueue.dequeue().priority).toBe(5);
    expect(priorityQueue.dequeue()).toBeNull();
  });
});