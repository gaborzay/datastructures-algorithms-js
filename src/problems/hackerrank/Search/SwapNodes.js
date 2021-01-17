/**
 * https://www.hackerrank.com/challenges/swap-nodes-algo/problem
 *
 * Time Complexity: O(n*k)
 * Space Complexity: O(n*k)
 *
 * @param indexes an array of integers representing index values of each node[i], beginning with node[1], the first element, as the root.
 * @param queries an array of integers, each representing a k value
 */
export function swapNodes(indexes, queries) {
  class Node {
    constructor(value, depth) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }

    swapChildren() {
      const temp = this.left;
      this.left = this.right;
      this.right = temp;
    };
  }

  class BinaryTree {
    constructor(indexes) {
      let depth = 1;
      this.root = new Node(1, depth);

      for (let i = 0, n = indexes.length; i < n; i++) {
        const current = this.search(i + 1);
        depth = current.depth + 1;
        current.left = new Node(indexes[i][0], depth);
        current.right = new Node(indexes[i][1], depth);
      }

      this.maxDepth = depth;
    }

    search(value) {
      // Create a queue and add a variable to store the values of nodes visited
      const queue = [];
      // Place the root node in the queue
      queue.unshift(this.root);
      // Loop as long as there is anything in the queue
      while (queue.length) {
        // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        const current = queue.shift();

        if (current.value === value) return current;
        // If there is a left property on the node dequeued - add it to the queue
        if (current.left && current.left.value !== -1) queue.push(current.left);
        // If there is a right property on the node dequeued - add it to the queue
        if (current.right && current.right.value !== -1) queue.push(
            current.right);
      }
      // Return the variable that store the values
      return null;
    };

    traverse() {
      const visited = [];

      // Helper function which accepts a node
      function traverse(node) {
        // If the node has a left property, call the helper function with the left property on the node
        if (node.left && node.left.value !== -1) traverse(node.left);
        // Push the value of the node to the variable that stores the values
        visited.push(node.value);
        // If the node has a right property, call the helper function with the right property on the node
        if (node.right && node.right.value !== -1) traverse(node.right);
      }

      // Invoke the helper function with the current variable
      traverse(this.root);
      // Return the array of values
      return visited;
    };

    swapDepth(depth) {
      // Helper function which accepts a node
      function traverse(node) {
        // If the node has a left property, call the helper function with the left property on the node
        if (node.left && node.left.value !== -1) traverse(node.left);
        // Push the value of the node to the variable that stores the values
        if (node.depth === depth) node.swapChildren();
        // If the node has a right property, call the helper function with the right property on the node
        if (node.right && node.right.value !== -1) traverse(node.right);
      }

      // Invoke the helper function with the current variable
      traverse(this.root);
    };
  }

  const tree = new BinaryTree(indexes);

  const results = [];
  for (let depth of queries) {
    for (let i = 1; i < tree.maxDepth; i++) {
      tree.swapDepth(i * depth);
    }
    results.push(tree.traverse());
  }

  return results;
}