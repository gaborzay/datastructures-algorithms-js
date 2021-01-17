/**
 * https://www.hackerrank.com/challenges/find-the-nearest-clone/problem
 *
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 * @param graphNodes
 * @param graphFrom
 * @param graphTo
 * @param ids
 * @param val
 */
export function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(val) {
      let newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      return this.size++;
    }

    dequeue() {
      if (!this.first) return null;

      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.data;
    }
  }

  class Graph {
    constructor(ids) {
      this.ids = ids;
      this.adjacencyList = {};
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(v1, v2) {
      if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
      }
    }

    search(start) {
      const visited = {};
      let queue = new Queue();
      let distance = 1;
      queue.enqueue(start);
      visited[start] = true;

      while (queue.size) {
        const vertex = queue.dequeue();
        const neighbors = new Queue();

        for (let neighbour of this.adjacencyList[vertex]) {
          if (!visited[neighbour]) {
            visited[neighbour] = true;
            neighbors.enqueue(neighbour);

            if (this.ids[start - 1] === this.ids[neighbour - 1]) {
              return distance;
            }
          }
        }

        distance++;
        queue = neighbors;
      }

      return -1;
    }
  }

  // Undirected graph
  const graph = new Graph(ids);

  // Generate the graph
  for (let i = 0, n = graphFrom.length; i < n; i++) {
    // Add the vertex if it doesn't exist
    graph.addVertex(graphFrom[i]);
    graph.addVertex(graphTo[i]);
    graph.addEdge(graphFrom[i], graphTo[i]);
  }

  const results = [];
  for (let j = 0, n = ids.length; j < n; j++) {
    if (ids[j] === val) {
      const result = graph.search(j + 1);
      if (result > 0) {
        results.push(result);
      }
    }
  }

  return results.length < 1 ? -1 : Math.min(...results);
}