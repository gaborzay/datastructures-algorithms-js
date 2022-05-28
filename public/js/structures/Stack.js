import SinglyLinkedList from "./SinglyLinkedList";
/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(N)
 */
export default class Stack {
    constructor(arr = []) {
        this.list = new SinglyLinkedList();
        arr.forEach(item => this.push(item));
    }
    get first() {
        return this.list.getHead();
    }
    get last() {
        return this.list.getTail();
    }
    get size() {
        return this.list.size;
    }
    push(data) {
        this.list.unshift(data);
        return this.size;
    }
    pop() {
        return this.list.shift();
    }
}
//# sourceMappingURL=Stack.js.map