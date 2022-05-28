"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(arr) {
        var _this = this;
        if (arr === void 0) { arr = []; }
        this.head = null;
        this.tail = null;
        this.length = 0;
        // Optional array to initialize linked list
        arr.forEach(function (element) { return _this.push(element); });
    }
    /**
     * Set the value of the Node at a given index.
     *
     * @param index
     * @param data
     */
    LinkedList.prototype.set = function (index, data) {
        // Use your get function to find the specific node.
        var foundNode = this.get(index);
        // If the node is found, set the value of that node to be the value
        // passed to the function and return true
        if (foundNode) {
            foundNode.data = data;
            return true;
        }
        // If the node is not found, return false
        return false;
    };
    Object.defineProperty(LinkedList.prototype, "size", {
        /**
         * Get the current length of the list.
         */
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get an array version of the list.
     */
    LinkedList.prototype.toArray = function () {
        var arr = [];
        var head = this.head;
        // Iterate over the linked list
        while (head !== null) {
            arr.push(head.data);
            head = head.next;
        }
        return arr;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map