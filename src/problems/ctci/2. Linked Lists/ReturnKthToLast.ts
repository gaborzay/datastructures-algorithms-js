import SinglyLinkedList from "../../../structures/SinglyLinkedList";
import Node from "../../../structures/Node";

/**
 * 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element
 * of a singly linked list.
 */
export default class ReturnKthToLast extends SinglyLinkedList {
    /**
     * Recursively go to last node, then count backwards
     *
     * Space complexity: O(n)
     * Time complexity: O(n)
     */
    printRecursive(k: number, current: Node = this.head, stack: Array<Node> = []): Node {
        if (!current.next) {
            while (--k > 1) {
                stack.pop();
            }
            return stack.pop();
        }
        stack.push(current);
        return this.printRecursive(k, current.next, stack);
    }

    /**
     * Two pointers, move the first one k steps ahead
     * then move the pointers at the same time until the first pointer hits the
     * end then the second pointer should be on the correct node
     *
     * Space complexity: O(1)
     * Time complexity: O(n)
     */
    printIterative(k: number): Node {
        let head = this.head;
        let tail = this.head;

        for (let i = 1; i < k; i++) {
            tail = tail.next;
        }

        while (tail.next) {
            head = head.next;
            tail = tail.next;
        }

        return head;
    }
}