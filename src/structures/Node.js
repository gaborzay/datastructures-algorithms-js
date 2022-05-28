"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//todo split out different types of nodes
// singlylinkednode, doublelylinkednode, binarytreenode, graph node...
var Node = /** @class */ (function () {
    function Node(data, priority) {
        if (priority === void 0) { priority = null; }
        this.data = data;
        this.priority = priority;
        this.next = null;
        this.prev = null;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.default = Node;
//# sourceMappingURL=Node.js.map