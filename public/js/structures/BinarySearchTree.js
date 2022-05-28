import Node from "./Node";
/**
 * Insertion - O(log n) => Worst Case - O(n)
 * Searching - O(log n) => Worst Case - O(n)
 *
 * BFS vs DFS
 * Wide tree => DFS takes less memory
 * Deep tree => BFS takes less memory
 */
export default class BinarySearchTree {
    constructor(arr = []) {
        this.root = null;
        arr.forEach(element => this.insert(element));
    }
    insert(value) {
        // create a new node
        const newNode = new Node(value);
        // Starting at the root
        // Check if there is a root, if not, the root now becomes that new node
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.data)
                return undefined;
            // If there is a root, withFrequencies if the value of the new node is greater than or less than the value of the root
            if (value < current.data) {
                // Check to see if there is a node to the left
                if (!current.left) {
                    // If there is not, add that node as the left property
                    current.left = newNode;
                    return this;
                }
                // If there is, move to that node an repeat these steps
                current = current.left;
            }
            else {
                // If there is, move to that node and repeat these steps
                // Check to see if there is a node to the right
                if (!current.right) {
                    // If there is not, add that node as the right property
                    current.right = newNode;
                    return this;
                }
                // If there is, move to that node an repeat these steps
                current = current.right;
            }
        }
    }
    find(value) {
        // Check if there is a root, if not - we're done searching
        if (this.root) {
            let current = this.root;
            // If there is a root, withFrequencies if the value of the new node is the value we are looking for.
            while (current) {
                if (value < current.data) {
                    // If less, go left
                    current = current.left;
                }
                else if (value > current.data) {
                    // If more, go right
                    current = current.right;
                }
                else {
                    // If match, return true
                    return current;
                }
            }
        }
        return null;
    }
    /**
     * Breadth First Search
     */
    breadthFirstSearch() {
        if (!this.root)
            return [];
        // Create a queue and add a variable to store the values of nodes visited
        const queue = [];
        const visited = [];
        // Place the root node in the queue
        queue.unshift(this.root);
        // Loop as long as there is anything in the queue
        while (queue.length) {
            // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
            const current = queue.shift();
            // If there is a left property on the node dequeued - add it to the queue
            if (current.left)
                queue.push(current.left);
            // If there is a right property on the node dequeued - add it to the queue
            if (current.right)
                queue.push(current.right);
            // Add data to visited array
            visited.push(current.data);
        }
        // Return the variable that store the values
        return visited;
    }
    /**
     * Level Order Search
     */
    levelOrder() {
        return this.breadthFirstSearch();
    }
    /**
     * Depth First Search
     */
    preOrder() {
        if (!this.root)
            return [];
        // Create a variable to store the values of nodes visited
        const visited = [];
        // Helper function which accepts a node
        function traverse(node) {
            // Push the value of the node to the variable that stores the values
            visited.push(node.data);
            // If the node has a left property, call the helper function with the left property on the node
            if (node.left)
                traverse(node.left);
            // If the node has a right property, call the helper function with the right property on the node
            if (node.right)
                traverse(node.right);
        }
        // Invoke the helper function with the current variable
        traverse(this.root);
        // Return the array of values
        return visited;
    }
    /**
     * Depth First Search
     */
    postOrder() {
        if (!this.root)
            return [];
        // Create a variable to store the values of nodes visited
        const visited = [];
        // Helper function which accepts a node
        function traverse(node) {
            // If the node has a left property, call the helper function with the left property on the node
            if (node.left)
                traverse(node.left);
            // If the node has a right property, call the helper function with the right property on the node
            if (node.right)
                traverse(node.right);
            // Push the value of the node to the variable that stores the values
            visited.push(node.data);
        }
        // Invoke the helper function with the current variable
        traverse(this.root);
        // Return the array of values
        return visited;
    }
    /**
     * Depth First Search
     */
    inOrder() {
        if (!this.root)
            return [];
        // Create a variable to store the values of nodes visited
        const visited = [];
        // Helper function which accepts a node
        function traverse(node) {
            // If the node has a left property, call the helper function with the left property on the node
            if (node.left)
                traverse(node.left);
            // Push the value of the node to the variable that stores the values
            visited.push(node.data);
            // If the node has a right property, call the helper function with the right property on the node
            if (node.right)
                traverse(node.right);
        }
        // Invoke the helper function with the current variable
        traverse(this.root);
        // Return the array of values
        return visited;
    }
}
//# sourceMappingURL=BinarySearchTree.js.map