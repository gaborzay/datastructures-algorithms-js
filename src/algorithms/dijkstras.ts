/*
 * 1. Every time we look to visit a new node, we pick the node with the smallest
 * known distance to visit first.
 * 2. Once we've moved to the node we're going to visit, we look at each of its
 * neighbors.
 * 3. For each neighboring node, we calculate the distance by summing the total
 * edges that lead to the node we're checking from the starting node.
 * 4. If the new total distance to a node is less than the previous total,
 * we store the new shorter distance for that node.
 */
import PriorityQueue from "../structures/PriorityQueue";

export class WeightedGraph {
    readonly adjacencyList: {};

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1: string, v2: string, weight: number) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    // This function should accept a starting and ending vertex
    Dijkstra(start: string, finish: string) {
        const nodes = new PriorityQueue();
        // Create an object (we'll call it distances) and set each key to be every vertex
        // in the adjacency list with a value of infinity, except for the starting vertex
        // which should have a value of 0.
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;

        // build up initial state
        // After setting a value in the distances object, add each vertex with a priority of
        // Infinity to the priority queue, except the starting vertex, which should have a
        // priority of 0 because that's where we begin.
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            // Create another object called previous an set each key to be every vertex in the
            // adjacency list with a value of null
            previous[vertex] = null;
        }

        // Start looping as long as there is anything in the priority queue
        while (nodes.values.length) {
            //  Dequeue a vertex from the priority queue
            smallest = nodes.dequeue().data;

            //  If that vertex is the same as the ending vertex - we are done!
            if (smallest === finish) {
                // Build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            //  Otherwise loop through each value in the adjacency list at that vertex
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour in this.adjacencyList[smallest]) {
                    // Calculate the distance to that vertex from the starting vertex
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    // If the distance is less that what is currently stored in our distances object
                    if (candidate < distances[nextNeighbor]) {
                        // update the distances object with new lower distance
                        distances[nextNeighbor] = candidate;
                        // update the previous object to contain that vertex
                        previous[nextNeighbor] = smallest;
                        // enqueue the vertex with the total distance from the start node
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}