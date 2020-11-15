import {describe, expect, it} from '@jest/globals';
import MaxBinaryHeap from '../../src/structures/MaxBinaryHeap';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

describe('MaxBinaryHeap@insert', () => {
  it('should insert the values correctly into the max heap', function() {
    //       55
    //   39       41
    // 18  27  12    33
    const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12, 55]);

    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);

    for (let i = 0, max = 99; i < max; i++) {
      heap.insert(getRandomInt(max));
    }

    heap.values.forEach((item, index) => {
      const parent = heap.values[index];
      const left = heap.values[heap.leftChild(index)];
      const right = heap.values[heap.rightChild(index)];

      if (left) expect(parent).toBeGreaterThanOrEqual(left);
      if (right) expect(parent).toBeGreaterThanOrEqual(right);
    });
  });
});

describe('MaxBinaryHeap@sink', () => {
  it('should extract the max value correctly', function() {
    //       55
    //   39       41
    // 18  27  12    33
    const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12, 55]);

    expect(heap.extract()).toBe(55);
    expect(heap.extract()).toBe(41);
    expect(heap.extract()).toBe(39);
    expect(heap.extract()).toBe(33);
    expect(heap.extract()).toBe(27);
    expect(heap.extract()).toBe(18);
    expect(heap.extract()).toBe(12);
    expect(heap.extract()).toBeNull();

    const values = [];

    for (let i = 0, max = 99; i < max; i++) {
      values.push(getRandomInt(max));
    }

    const newHeap = new MaxBinaryHeap(values);

    for (let j = 0; j < 99; j++) {
      const max = Math.max(...newHeap.values);
      let value = newHeap.extract();
      expect(value).toEqual(max);
    }
  });
});