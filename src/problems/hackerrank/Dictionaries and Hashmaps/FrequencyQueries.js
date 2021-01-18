/**
 * https://www.hackerrank.com/challenges/frequency-queries/problem
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * 1 x: Insert x in your data structure.
 * 2 y: Delete one occurrence of y from your data structure, if present.
 * 3 z: Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.
 *
 * @param queries
 */
export function freqQuery(queries) {
  const elementFrequency = {};
  const frequencyCount = {'0': 0};
  const n = queries.length;
  const results = [];
  let i = 0;

  while (i < n) {
    const [operation, element] = queries[i];

    switch (operation) {
      case 1:
        if (!elementFrequency.hasOwnProperty(element)) {
          elementFrequency[element] = 0;
        }

        frequencyCount[elementFrequency[element]]--;
        elementFrequency[element]++;

        if (frequencyCount.hasOwnProperty(elementFrequency[element])) {
          frequencyCount[elementFrequency[element]]++;
        } else {
          frequencyCount[elementFrequency[element]] = 1;
        }

        break;
      case 2:
        if (elementFrequency.hasOwnProperty(element)) {
          frequencyCount[elementFrequency[element]]--;

          if (elementFrequency[element] === 1) {
            delete elementFrequency[element];
          } else {
            elementFrequency[element]--;
            frequencyCount[elementFrequency[element]]++;
          }
        }
        break;
      case 3:
        if (frequencyCount[element] > 0) {
          results.push(1);
        } else {
          results.push(0);
        }
        break;
    }
    i++;
  }

  return results;
}