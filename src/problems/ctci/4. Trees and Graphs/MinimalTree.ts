import BinarySearchTree from "../../../structures/BinarySearchTree";

/**
 * 4.2 Given a sorted (increasing order) array with unique integer elements,
 * write an algorithm to create a binary search tree with minimal height.
 */
export default class MinimalTree extends BinarySearchTree {
    /**
     * Space complexity:
     * Time complexity:
     * @param arr
     * @param start
     * @param end
     */
    generate(arr: [], start: number = 0, end: number = arr.length) {
        if (start < end) {
            // Find the middle of the array and insert it into the BST
            const middle = Math.floor((start + end) / 2);
            this.insert(arr[middle]);
            // If there is anything in the left array then recursively repeat
            this.generate(arr, start, middle);
            // If there is anything in the right array then recursively repeat
            this.generate(arr, middle + 1, end);
        }
    }
}