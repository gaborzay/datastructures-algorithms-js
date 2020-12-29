/**
 * 8.1 - Triple Step
 * A child is running up a staircase with n steps and can hop either 1 step,
 * 2 steps, or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs.
 */
export default class TripleStep {
    /**
     * Space complexity: O(n)
     * Time complexity: O(3^n)
     * @param n
     */
    countWays(n: number) {
        if (n < 0) {
            return 0;
        } else if (n === 0) {
            return 1;
        }
        return this.countWays(n - 1) + this.countWays(n - 2) + this.countWays(n - 3);
    }

    /**
     * Space complexity: O(n)
     * Time complexity: O(n)
     * @param n
     * @param memo
     */
    countWaysMemo(n: number, memo: Array<number> = [1]) {
        if (n < 0) {
            return 0
        } else if (!memo[n]) {
            memo[n] = this.countWaysMemo(n - 1, memo) +
                this.countWaysMemo(n - 2, memo) +
                this.countWaysMemo(n - 3, memo);
        }
        return memo[n];
    }
}