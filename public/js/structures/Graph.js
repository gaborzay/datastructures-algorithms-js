export default class Graph {
    constructor() {
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
    addDirectedEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
        }
    }
    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
            this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
        }
    }
    removeVertex(v1) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].forEach(v2 => this.removeEdge(v1, v2));
            delete this.adjacencyList[v1];
        }
    }
    depthFirstSearchRecursive(start) {
        const result = [];
        const visited = {};
        const list = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex)
                return;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach(neighbour => {
                if (!visited[neighbour])
                    return dfs(neighbour);
            });
        })(start);
        return result;
    }
    depthFirstSearchIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start];
        visited[start] = true;
        while (stack.length) {
            const vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}
//# sourceMappingURL=Graph.js.map