import Node from './Node';
import LinkedList from "./LinkedList";

/**
 * Insertion - O(1)
 * Removal - O(1) or O(n)
 * Searching - O(n)
 * Access - O(n)
 *
 * Singly Linked Lists are an excellent alternative to arrays when insertion and
 * deletion at the beginning are frequently required
 *
 * Arrays contain a built in index whereas Linked Lists do not
 *
 * The idea of a list data structure that consists of nodes is the foundation
 * for other data structures like Stacks and Queues
 */
export default class SinglyLinkedList extends LinkedList {
    protected head: Node;
    protected tail: Node;
    protected length: number;

    constructor(arr: [] = []) {
        super(arr);
    }

    getHead(): any {
        return this.head.data;
    }

    getTail(): any {
        return this.tail.data;
    }

    push(data: any): this {
        // Create a new node using the value passed to the function
        const newNode: Node = new Node(data);
        // If there is no head property on the list, set the head and tail to be
        // the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise set the next property on the tail to be the new node
            // and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode
        }
        // Increment the length by one
        this.length++;
        // return the list
        return this;
    }

    pop(): any {
        // If there are no nodes in the list, return undefined
        if (!this.head) return undefined;

        let current: Node = this.head;
        let previous: Node = current;

        // Loop through the list until you get the tail
        while (current.next) {
            previous = current;
            current = current.next;
        }

        // Set the next property of the 2nd to last node to be null
        previous.next = null;
        // Set the tail to be the 2nd to last node
        this.tail = previous;
        // Decrement the length of the list by 1
        this.length--;
        // Edge case where only one item left
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // Return the value of the node removed
        return current.data
    }

    shift(): any {
        // If there are no nodes, return undefined
        if (!this.head) return undefined;
        // Store the current head property in a variable
        let head = this.head
        // Set the head property to be the current head's next property
        this.head = this.head.next;
        // Decrement the length by 1
        this.length--;
        // Return the value of the node removed
        return head.data;
    }

    unshift(data): this {
        // Create a new node using the value passed to the function
        const newNode: Node = new Node(data);
        // If there is no head property on the list, set the head and the tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            // Set the head property on the list to be that newly created node
            this.head = newNode;
        }
        // Increment the length of the list by 1
        this.length++;
        // return the linked list
        return this;
    }

    get(index: number): Node {
        // If the index is less than zero or greater than or equal to the length
        // of the list, return null
        if (index < 0 || index >= this.length) return null;
        // Loop through the list until you reach the index and return the node
        // at that specific index
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    insert(index: number, data: any): boolean {
        // If the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false;
        // If the index is the same as the length, push a new node to the end of the list
        if (index === this.length) return !!this.push(data);
        // If the index is 0, unshift a new node to the start of the list
        if (index === 0) return !!this.unshift(data);
        // Otherwise, using the get method, access the node at the (index - 1)
        const newNode: Node = new Node(data);
        const previous: Node = this.get(index - 1);
        // Set the next property on the new node to be the previous next
        newNode.next = previous.next;
        // Set the next property on that node to be the new node
        previous.next = newNode;
        // Increment the length
        this.length++;
        // Return true
        return true;
    }

    remove(index: number): any {
        // If the index is less than zero or greater than the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        // If the index is 0, shift
        if (index === 0) return this.shift();
        // If the index is the same as the length - 1, pop
        if (index === this.length) return this.pop();
        // Otherwise, using the get method, access the node at the index - 1
        const previousNode: Node = this.get(index - 1);
        // Set the next property on the node to be the next of the next node
        const removedNode: Node = previousNode.next;
        previousNode.next = removedNode.next;
        // Decrement the length
        this.length--;
        // Return the value of the node removed
        return removedNode.data;
    }

    reverse(): this {
        // Swap the head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        // Loop through the list
        for (let i = 0; i < this.length; i++) {
            // Set next to be the next property on whatever node is
            next = node.next;
            // Set the next property on the node to be whatever prev is
            node.next = prev;
            // Set prev to be the value of the node variable
            prev = node;
            // Set the node variable to be the value of the next variable
            node = next;
        }
        return this;
    }
}