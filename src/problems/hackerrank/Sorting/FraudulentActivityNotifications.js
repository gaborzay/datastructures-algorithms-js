/**
 *
 * @param expenditure
 * @param d
 * @returns {number}
 */
export function activityNotifications(expenditure, d) {
  const calculateMedian = function(counts, days, isEven) {
    if (isEven) {
      const left = Math.floor(days / 2);
      const right = Math.floor(days / 2) + 1;
      let leftValue = 0;
      let counter = 0;

      for (let i = 0; i < MAX_EXPENDITURE; i++) {
        for (let j = 0; j < counts[i]; j++) {
          counter++;

          if (counter === left) {
            leftValue = i;
          } else if (counter === right) {
            return (leftValue + i) / 2;
          }
        }
      }
    } else {
      const middle = Math.floor(days / 2);
      let counter = 0;

      for (let i = 0; i < MAX_EXPENDITURE; i++) {
        counter += counts[i];

        if (counter > middle) {
          return i;
        }
      }
    }
  };
  const MAX_EXPENDITURE = 200;
  const counts = (new Array(MAX_EXPENDITURE)).fill(0);
  const isEven = d % 2 === 0;
  let notifications = 0;

  // Counting Sort
  for (let i = 0; i < d; i++) counts[expenditure[i]]++;

  // For checking the median
  let median = calculateMedian(counts, d, isEven);

  if (expenditure.length > d) {
    // loop over the array starting at the position after the trailing days
    for (let i = 0, j = d, n = expenditure.length; j < n; i++, j++) {
      // increment notifications if should be notified
      if (expenditure[j] >= median * 2) notifications++;
      // Only process if a change has occurred
      if (expenditure[i] !== expenditure[j]) {
        // Update the window for the next iteration
        counts[expenditure[i]]--;
        counts[expenditure[j]]++;
        // perform notification calculation test, and continue
        median = calculateMedian(counts, d, isEven);
      }
    }
  }

  return notifications;
}