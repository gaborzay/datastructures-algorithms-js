/**
 * https://www.hackerrank.com/challenges/greedy-florist/problem
 *
 * Time Complexity: O(n*log(n)) + O(n*k)
 * Space Complexity: O(n+k)
 *
 * @param k the number of friends
 * @param c original price of each flower
 */
export function getMinimumCost(k, c) {
  // O(k)
  const getPurchases = k => {
    const purchases = [];
    for (let i = 0; i < k; i++) {
      purchases.push({
        flowers: 0,
        total: 0,
      });
    }
    return purchases;
  };
  // O(1)
  const calculatePrice = (flowers, price) => (flowers + 1) * price;
  // initialize the purchases array for each customer
  const purchases = getPurchases(k);
  // iterate over the sorted list decreasing and keep a window
  const bound = Math.ceil(c.length / k) + 1;
  // sort the array for iterating purposes
  // O(n*log(n))
  // todo if going to sort, might as well sort desc to make this logic easier
  c.sort((a, b) => a - b);
  // O(n*k)
  for (let j = 1; j < bound; j++) {
    const index = c.length - k * j;
    const start = index > 0 ? index : 0;
    const end = k + index;
    for (let l = start; l < end; l++) {
      const person = l % k;
      purchases[person].total += calculatePrice(
          purchases[person].flowers,
          c[l],
      );
      purchases[person].flowers++;
    }
  }
  // O(k)
  return purchases.reduce((total, purchase) => total + purchase.total, 0);
}