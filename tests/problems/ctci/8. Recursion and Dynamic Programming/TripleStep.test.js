import {describe, expect, it} from '@jest/globals';
import TripleStep
  from '../../../../src/problems/ctci/8. Recursion and Dynamic Programming/TripleStep';

describe('how many possible ways the child can run up the stairs.', () => {
  it('should correctly count the possible ways', () => {
    const tripleStep = new TripleStep();

    [
      {
        input: 1,
        expected: 1,
      },
      {
        input: 2,
        expected: 2,
      },
      {
        input: 3,
        expected: 4,
      },
      {
        input: 4,
        expected: 7,
      },
      {
        input: 10,
        expected: 274,
      },
    ].forEach(test => {
      expect(tripleStep.countWays(test.input)).toEqual(test.expected);
      expect(tripleStep.countWaysMemo(test.input)).toEqual(test.expected);
    });
  });
});