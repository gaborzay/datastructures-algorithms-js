//todo split out different types of nodes
// singlylinkednode, doublelylinkednode, binarytreenode, graph node...
export default class Node {
    constructor(data, priority = null) {
        this.data = data;
        this.priority = priority;
        this.next = null;
        this.prev = null;
        this.left = null;
        this.right = null;
    }
}
//# sourceMappingURL=Node.js.map