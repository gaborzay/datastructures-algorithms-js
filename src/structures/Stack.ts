import Node from "./Node";
import SinglyLinkedList from "./SinglyLinkedList";

/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(N)
 */
export default class Stack {
    private list: SinglyLinkedList;

    constructor(arr: [] = []) {
        this.list = new SinglyLinkedList();
        arr.forEach(item => this.push(item));
    }

    get first(): Node {
        return this.list.getHead();
    }

    get last(): Node {
        return this.list.getTail();
    }

    get size(): number {
        return this.list.size;
    }

    push(data: any): number {
        this.list.unshift(data);
        return this.size;
    }

    pop(): any {
        return this.list.shift();
    }
}