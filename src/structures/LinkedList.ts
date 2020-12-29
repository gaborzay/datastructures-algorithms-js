import Node from "./Node";

export default abstract class LinkedList {
    protected head: Node;
    protected tail: Node;
    protected length: number;

    protected constructor(arr: Array<any> = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // Optional array to initialize linked list
        arr.forEach(element => this.push(element));
    }

    /**
     * Add an item to the end of the linked list.
     *
     * @param data
     */
    abstract push(data: any): this

    /**
     * Remove a Node from the end of the linked list and return it.
     */
    abstract pop(): Node

    /**
     * Remove a Node from the beginning of the linked list and return it.
     */
    abstract shift(): Node

    /**
     * Add a Node to the beginning of the linked list.
     */
    abstract unshift(data: any): this

    /**
     * Find the Node at the given index and return it.
     * @param index
     */
    abstract get(index: number): Node

    /**
     * Set the value of the Node at a given index.
     *
     * @param index
     * @param data
     */
    set(index: number, data: any): boolean {
        // Use your get function to find the specific node.
        const foundNode: Node = this.get(index);
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
     * Insert a Node at the given index into the list.
     *
     * @param index
     * @param data
     */
    abstract insert(index: number, data: any): boolean

    /**
     * Remove at Node at the given index from the list.
     * @param index
     */
    abstract remove(index: number): Node

    /**
     * Reverse the list in place.
     */
    abstract reverse(): this

    /**
     * Get the current length of the list.
     */
    get size(): number {
        return this.length;
    }

    /**
     * Get an array version of the list.
     */
    toArray(): Array<any> {
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
