import Node from "./Node";

/**
 * Insertion - O(log N)
 * Removal - O(log N)
 * Search - O(N)
 */
export default class PriorityQueue {
    public values: Array<Node> = [];

    constructor(arr: Array<[any, number]> = []) {
        arr.forEach(item => this.enqueue(item[0], item[1]))
    }

    enqueue(value: any, priority: number = 99): this {
        // Push the value into the values property on the heap
        this.values.push(new Node(value, priority));
        // Bubble the value up to its correct spot
        this.bubble();
        // Return the heap
        return this;
    }

    dequeue() {
        const size = this.values.length;
        // Empty heap
        if (!size) return null;
        // Swap the first value in the values property with the last one
        this.swap(0, size - 1);
        // Pop from the values property, so you can return the value at the end
        const max = this.values.pop();
        // Have the new root "sink down" to the correct spot...
        this.sink();
        // Return the old root
        return max;
    }

    parent(index: number): number {
        if (index > 0) {
            return Math.floor((index - 1) / 2);
        }
        return null;
    }

    leftChild(index: number): number {
        if (!this.isLeaf(index)) {
            return (index * 2) + 1;
        }
        return null;
    }

    rightChild(index: number): number {
        if (!this.isLeaf(index)) {
            return (index * 2) + 2;
        }
        return null;
    }

    private bubble() {
        // Create a variable called index which is the length of the values property - 1
        let index = this.values.length - 1;
        const element = this.values[index];
        // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        while (index > 0) {
            // Create a variable called parentIndex which is the floor of (index-1)/2
            let parentIndex = this.parent(index);
            let parent = this.values[parentIndex];
            if (element.priority > parent.priority) break;
            // Swap the value of the values element at the parentIndex with the value of the element property at the child index
            this.swap(parentIndex, index);
            // Set the index to be the parentIndex, and start over!
            index = parentIndex;
        }
    }

    private sink() {
        // Have your parent index starts at 0 (the root)
        let index = 0;
        const parent = this.values[index];
        // If the left or right child is less than the element... swap.
        // Keep looping and swapping until neither child is smaller than the element
        do {
            // Find the index of the left child
            let leftChild = this.leftChild(index);
            var left = this.values[leftChild];
            // Find the index of the right child
            let rightChild = this.rightChild(index);
            var right = this.values[rightChild];
            // If both left and right children are larger, swap with the largest child
            // The child index you swapped to now become the new parent index.
            if (left && right && parent.priority > left.priority && parent.priority > right.priority) {
                if (left.priority > right.priority) {
                    this.swap(index, rightChild);
                    index = rightChild;
                } else {
                    this.swap(index, leftChild);
                    index = leftChild;
                }
            } else if (right && parent.priority > right.priority) {
                this.swap(index, rightChild);
                index = rightChild;
            } else if (left && parent.priority > left.priority) {
                this.swap(index, leftChild);
                index = leftChild;
            }
        } while ((left && parent.priority > left.priority) || (right && parent.priority > right.priority))
    }

    private isLeaf(index: number): boolean {
        const size = this.values.length - 1;
        return index >= (size / 2) && index <= size;
    }

    private swap(first, second) {
        const temp = this.values[first];
        this.values[first] = this.values[second];
        this.values[second] = temp;
    }
}

