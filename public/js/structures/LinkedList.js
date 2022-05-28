export default class LinkedList {
    constructor(arr = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // Optional array to initialize linked list
        arr.forEach(element => this.push(element));
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    /**
     * Set the value of the Node at a given index.
     *
     * @param index
     * @param data
     */
    set(index, data) {
        // Use your get function to find the specific node.
        const foundNode = this.get(index);
        // If the node is found, set the value of that node to be the value
        // passed to the function and return true
        if (foundNode) {
            foundNode.data = data;
            return true;
        }
        // If the node is not found, return false
        return false;
    }
    /**
     * Get the current length of the list.
     */
    get size() {
        return this.length;
    }
    /**
     * Get an array version of the list.
     */
    toArray() {
        const arr = [];
        let head = this.head;
        // Iterate over the linked list
        while (head !== null) {
            arr.push(head.data);
            head = head.next;
        }
        return arr;
    }
}
//# sourceMappingURL=LinkedList.js.map