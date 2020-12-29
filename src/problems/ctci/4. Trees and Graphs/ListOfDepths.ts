import Node from "../../../structures/Node";
import BinarySearchTree from "../../../structures/BinarySearchTree";
import SinglyLinkedList from "../../../structures/SinglyLinkedList";

/**
 * 4.3 Given a binary tree, design an algorithm which creates a linked list of all
 * the nodes at each depth (e.g., if you have a tree with depth D, you'll have
 * D linked lists).
 */
export default class ListOfDepths extends BinarySearchTree {
    /**
     * Space complexity:
     * Time complexity:
     * @param root
     */
    depths(root: Node) {
        // We want to track the linked lists at each level
        // The array level will indicate the depth, eg: index = 0, depth: 0
        const depths = [];
        // Will want to take the root node, and do a depth first search on it
        // At each level, we want to create a linked list for it
        let queue: Array<Node> = [];
        // Add the root to the queue and to the depths
        queue.push(root);
        // While the queue is not empty, we'll do BFS on it
        while (queue.length) {
            let list = new SinglyLinkedList();
            let newQueue = [];
            // create a linked list for each time we process the queue
            queue.forEach(item => {
                list.push(item.data);
                if (item.left) newQueue.push(item.left);
                if (item.right) newQueue.push(item.right);
            })
            // add the list to the depths
            depths.push(list);
            // process new queue next
            queue = newQueue;
        }
        return depths;
    }
}