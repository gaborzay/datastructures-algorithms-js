"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedList_1 = require("./LinkedList");
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
var SinglyLinkedList = /** @class */ (function (_super) {
    __extends(SinglyLinkedList, _super);
    function SinglyLinkedList(arr) {
        if (arr === void 0) { arr = []; }
        return _super.call(this, arr) || this;
    }
    SinglyLinkedList.prototype.getHead = function () {
        return this.head;
    };
    SinglyLinkedList.prototype.getTail = function () {
        return this.tail;
    };
    SinglyLinkedList.prototype.push = function (data) {
        // Create a new node using the value passed to the function
        var newNode = new Node_1.default(data);
        // If there is no head property on the list, set the head and tail to be
        // the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // Otherwise set the next property on the tail to be the new node
            // and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increment the length by one
        this.length++;
        // return the list
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        // If there are no nodes in the list, return undefined
        if (!this.head)
            return undefined;
        var current = this.head;
        var previous = current;
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
        return current.data;
    };
    SinglyLinkedList.prototype.shift = function () {
        // If there are no nodes, return undefined
        if (!this.head)
            return undefined;
        // Store the current head property in a variable
        var head = this.head;
        // Set the head property to be the current head's next property
        this.head = this.head.next;
        // Decrement the length by 1
        this.length--;
        // Return the value of the node removed
        return head.data;
    };
    SinglyLinkedList.prototype.unshift = function (data) {
        // Create a new node using the value passed to the function
        var newNode = new Node_1.default(data);
        // If there is no head property on the list, set the head and the tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // Otherwise set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            // Set the head property on the list to be that newly created node
            this.head = newNode;
        }
        // Increment the length of the list by 1
        this.length++;
        // return the linked list
        return this;
    };
    SinglyLinkedList.prototype.get = function (index) {
        // If the index is less than zero or greater than or equal to the length
        // of the list, return null
        if (index < 0 || index >= this.length)
            return null;
        // Loop through the list until you reach the index and return the node
        // at that specific index
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    SinglyLinkedList.prototype.insert = function (index, data) {
        // If the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length)
            return false;
        // If the index is the same as the length, push a new node to the end of the list
        if (index === this.length)
            return !!this.push(data);
        // If the index is 0, unshift a new node to the start of the list
        if (index === 0)
            return !!this.unshift(data);
        // Otherwise, using the get method, access the node at the (index - 1)
        var newNode = new Node_1.default(data);
        var previous = this.get(index - 1);
        // Set the next property on the new node to be the previous next
        newNode.next = previous.next;
        // Set the next property on that node to be the new node
        previous.next = newNode;
        // Increment the length
        this.length++;
        // Return true
        return true;
    };
    SinglyLinkedList.prototype.remove = function (index) {
        // If the index is less than zero or greater than the length, return undefined
        if (index < 0 || index >= this.length)
            return undefined;
        // If the index is 0, shift
        if (index === 0)
            return this.shift();
        // If the index is the same as the length - 1, pop
        if (index === this.length)
            return this.pop();
        // Otherwise, using the get method, access the node at the index - 1
        var previousNode = this.get(index - 1);
        // Set the next property on the node to be the next of the next node
        var removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        // Decrement the length
        this.length--;
        // Return the value of the node removed
        return removedNode.data;
    };
    SinglyLinkedList.prototype.reverse = function () {
        // Swap the head and tail
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next = null;
        var prev = null;
        // Loop through the list
        for (var i = 0; i < this.length; i++) {
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
    };
    return SinglyLinkedList;
}(LinkedList_1.default));
exports.default = SinglyLinkedList;
//# sourceMappingURL=SinglyLinkedList.js.map