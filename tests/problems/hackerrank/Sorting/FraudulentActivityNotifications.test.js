import {describe, expect, it} from '@jest/globals';
import {activityNotifications}
  from '../../../../src/problems/hackerrank/Sorting/FraudulentActivityNotifications';

describe('Fraudulent Activity Notifications', () => {
  it('should print an integer denoting the total number of times the client receives a notification over a period of  days.',
      function() {
        const tests = [
          {
            expenditure: [2, 3, 4, 2, 3, 6, 8, 4, 5],
            d: 5,
            expected: 2,
          },
          {
            expenditure: [1, 2, 3, 4, 4],
            d: 4,
            expected: 0,
          },
          {
            expenditure: [10, 20, 30, 40, 50],
            d: 3,
            expected: 1,
          },
          {
            expenditure: [10, 20, 30, 40, 50],
            d: 2,
            expected: 1,
          },
        ];

        tests.forEach(test => {
          expect(activityNotifications(test.expenditure, test.d)).
              toEqual(test.expected);
        });
      });
});