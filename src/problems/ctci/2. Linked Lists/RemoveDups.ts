import SinglyLinkedList from "../../../structures/SinglyLinkedList";
import Node from "../../../structures/Node";

/**
 * 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed?
 */
export default class RemoveDups extends SinglyLinkedList {
    /**
     * Space complexity: O(n)
     * Time complexity: O(n)
     */
    removeDuplicatesWithHashTable(): SinglyLinkedList {
        if (this.head && this.head.next) {
            // iterate over the linked list once to count all the frequencies
            // then iterate over it again and remove whenever we see a duplicate
            const hashTable = {};
            let current: Node = this.head;
            let prev: Node = null;

            while (current) {
                // Check if the hash table contains the element,
                if (!hashTable.hasOwnProperty(current.data)) {
                    // if no, then add it
                    hashTable[current.data] = true;
                    prev = current;
                } else {
                    // if yes, then remove the node
                    prev.next = current.next;
                }
                current = current.next;
            }
        }
        return this;
    }

    /**
     * Space complexity: O(1)
     * Time complexity: O(n^2)
     */
    removeDuplicatesWithPointers(): SinglyLinkedList {
        if (this.head && this.head.next) {
            // have 2 pointers, one at the current node then one that runs ahead
            // whenever the head pointer matches the current pointer, remove it
            let current: Node = this.head;
            // Check while the current node we're looking has a next value
            while (current) {
                let prev: Node = current;
                let runner: Node = current.next;
                // We want to check if the runner node is equal to the current node
                // If it is, then we want to remove the current node
                while (runner) {
                    if (current.data === runner.data) {
                        prev.next = runner.next;
                    } else {
                        prev = runner;
                    }
                    runner = runner.next;
                }
                current = current.next;
            }
        }
        return this;
    }
}