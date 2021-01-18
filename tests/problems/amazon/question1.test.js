import {describe, expect, it} from '@jest/globals';
import {processLogs} from '../../../src/problems/amazon/processLogs';

describe('Question 1', () => {
  it('should do something', function() {
    const tests = [
      {
        logs: ["1 2 50", "1 7 70", "1 3 20", "2 2 17"],
        threshold: 2,
        expected: ["1", "2"],
      },
      {
        logs: ["9 7 50", "22 7 20", "33 7 50", "22 7 30"],
        threshold: 3,
        expected: ["7"],
      },
    ];

    for (let test of tests) {
      expect(processLogs(test.logs, test.threshold)).toEqual(test.expected);
    }
  });
});