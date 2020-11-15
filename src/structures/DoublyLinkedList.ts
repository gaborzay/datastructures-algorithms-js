import Node from "./Node";
import LinkedList from "./LinkedList";

export default class DoublyLinkedList extends LinkedList {
    protected head: Node;
    protected tail: Node;
    protected length: number;

    constructor(arr: [] = []) {
        super(arr);
    }

    push(data: any): this {
        // Create a new node with the value passed to the function
        const newNode: Node = new Node(data);
        // If the head property is null set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If not, set the next property on the tail to be that node
            this.tail.next = newNode;
            // Set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            // Set the tail to be the newly created node
            this.tail = newNode
        }
        // Increment the length
        this.length++;
        // Return the Doubly Linked List
        return this;
    }

    pop(): Node {
        // If there is no head, return undefined
        if (!this.head) return undefined;
        // Store the current tail in a variable to return later
        const poppedNode: Node = this.tail;
        // If the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update the tail to be the previous Node
            this.tail = poppedNode.prev;
            // Set the new Tail's next to be null
            this.tail.next = null;
            // Remove current tail link to previous node
            poppedNode.prev = null;
        }
        // Decrement the length
        this.length--;
        // Return the value removed
        return poppedNode;
    }

    shift(): Node {
        // If length is 0, return undefined
        if (this.length === 0) return undefined;
        // Store the current head property in a variable
        const oldHead: Node = this.head;
        // If the length is one set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update the head to be the next of the old head
            this.head = oldHead.next;
            // Set the head's prev property to null
            this.head.prev = null;
            // Set the old head's next to null
            oldHead.next = null;
        }
        // Decrement the length
        this.length--;
        // Return old head
        return oldHead;
    }

    unshift(data: any): this {
        // Create a new node with the value passed to the function
        const newNode: Node = new Node(data);
        // If the length is 0
        if (this.length === 0) {
            // Set the head to be the new node
            this.head = newNode;
            // Set the tail to be the new node
            this.tail = newNode;
        } else {
            // Set the prev property on the head of the list to be the new node
            this.head.prev = newNode;
            // Set the next property on the new node to be the head property
            newNode.next = this.head;
            // Update the head to be the new node
            this.head = newNode;
        }
        // Increment the length
        this.length++;
        // Return the list
        return this;
    }

    get(index: number): Node {
        // If the index is less than 0 or greater or equal to the length, return null
        if (index < 0 || index >= this.length) {
            return null;
        }
        let node;
        // If the index is less than or equal to half the length of the list
        if (index <= this.length) {
            node = this.head;
            // Loop through the list starting from the head an loop towards the middle
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            // If the index is greater than half the length of the list
            // Loop through the list starting from the tail and loop towards the middle
            node = this.tail;
            // Loop through the list starting from the head an loop towards the middle
            for (let j = this.length - 1; j > index; j--) {
                node = node.prev;
            }
        }
        // Return the node once it is found
        return node;
    }

    insert(index: number, data: any): boolean {
        // If the index is less than zero or greater than or equal to the length return false
        if (index < 0 || index > this.length) return false;
        // If the index is 0, unshift
        if (index === 0) return !!this.unshift(data);
        // If the index is the same as the length, push
        if (index === this.length) return !!this.push(data);
        // Use the get method to access the index - 1
        const newNode: Node = new Node(data);
        const previousNode: Node = this.get(index - 1);
        const nextNode: Node = previousNode.next;
        // Set the next and prev properties on the correct nodes to link everything together
        previousNode.next = newNode;
        newNode.prev = previousNode;
        newNode.next = nextNode;
        // Increment the length
        this.length++;
        // return true
        return true;
    }

    remove(index: number): Node {
        // If the index is less than zero or greater than or equal to the length return undefined
        if (index < 0 || index >= this.length) return undefined;
        // If the index is 0, shift
        if (index === 0) return this.shift();
        // If the index is the same as the length - 1, pop
        if (index === this.length) return this.pop();
        // Use the get method to retrieve the item to be removed
        const removedNode: Node = this.get(index);
        const prevNode: Node = this.get(index - 1)
        const nextNode: Node = this.get(index + 1);
        // Update the next and prev properties to remove the found node from the list
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        // Set next and prev to null on the found node
        removedNode.next = null;
        removedNode.prev = null;
        // Decrement the length
        this.length--;
        // Return the node
        return removedNode
    }

    reverse(): this {
        throw new Error("Method not implemented.");
    }
}