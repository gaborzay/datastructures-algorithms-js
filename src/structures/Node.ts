export default class Node {
    public data: any;
    public priority: number;
    public next: Node;
    public prev: Node;
    public left: Node;
    public right: Node;

    constructor(data: any, priority: number = null) {
        this.data = data;
        this.priority = priority;
        this.next = null;
        this.prev = null;
        this.left = null;
        this.right = null;
    }
}