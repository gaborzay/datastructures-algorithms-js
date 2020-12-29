import Graph from "../../../structures/Graph";

/**
 * 4.1 Route Between Nodes: Give a directed graph, design an algorithm to find out
 * whether there is a route between two nodes.
 */
export default class RouteBetweenNodes extends Graph {
    public check(start: string, finish: string, search: string) {
        switch (search) {
            case 'bfs':
                return this.bfs(start, finish);
            case 'dfs':
                return this.dfs(start, finish);
        }
    }

    /**
     * Space complexity:
     * Time complexity:
     * Uses a queue
     */
    public bfs(start: string, finish: string) {
        let wasFound: boolean = false;
        // We want to keep track of the nodes we want to visit
        const queue: Array<string> = [start];
        // We also want to keep track of the nodes we have visited
        const visited: object = {};
        // for each neighbor of the current node
        // we want to withFrequencies its neighbors to see if we can
        // find the finishing node
        while (queue.length) {
            // grab the current node from the beginning
            // this in inefficient since arrays have to reindex on shift
            let current = queue.shift();
            // withFrequencies all it's adjacent nodes
            this.adjacencyList[current].forEach(adjacent => {
                // If we've found the finish point, then we're done.
                if (adjacent === finish) {
                    return wasFound = true;
                }
                // Otherwise, we want to continue checking
                if (!visited[adjacent]) {
                    // set it to visited so we don't get a loop
                    visited[current] = true;
                    queue.push(adjacent);
                }
            });
        }
        // If we haven't reached the node, then we cannot find a path
        return wasFound;
    }

    /**
     * Space complexity:
     * Time complexity:
     * Uses a stack
     */
    public dfs(start: string, finish: string) {
        let wasFound: boolean = false;
        // We want to track the nodes we want to visit
        const stack: Array<string> = [start];
        // We also want to track visited nodes to avoid loops
        const visited: object = {};
        // We want to loop over all the adjacent nodes
        while (stack.length) {
            const current = stack.pop();
            // loop over all the adjacent nodes
            this.adjacencyList[current].forEach(adjacent => {
                if (adjacent === finish) {
                    return wasFound = true;
                }

                if (!visited[current]) {
                    visited[adjacent] = true;
                    stack.push(adjacent);
                }
            });
        }

        return wasFound;
    }
}
