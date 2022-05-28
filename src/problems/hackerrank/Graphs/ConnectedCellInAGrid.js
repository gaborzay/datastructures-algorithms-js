/**
 * https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem
 *
 * Time Complexity: O(mn)
 * Space Complexity: O(mn)
 *
 * @param grid
 * @return max Number of cells in the largest region in the given matrix
 */
export function maxRegion(grid) {
  class Graph {
    constructor(grid) {
      this.adjacencyList = {};
      this.generateAdjacencyList(grid);
    }

    generateAdjacencyList(grid) {
      for (let row = 0, n = grid.length; row < n; row++) {
        for (let col = 0, m = grid[row].length; col < m; col++) {
          const vertexName = [row, col];
          this.addVertex(vertexName);
          // Only add edge if a 1
          if (grid[row][col] !== 0) {
            this.addEdges(vertexName, row, col, grid);
          }
        }
      }
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      }
    }

    addEdges(vertexName, row, col, grid) {
      for (let i = row - 1; i < row + 2; i++) {
        // See if row exists
        if (i > -1 && grid[i] && grid[i].length > 0) {
          for (let j = col - 1; j < col + 2; j++) {
            // See if col exists
            if (j > -1 && grid[i][j]) {
              const currentVertexName = [i, j];
              // Only add 1 and don't add self
              if (currentVertexName !== vertexName && grid[i][j] === 1) {
                this.addEdge(vertexName, currentVertexName);
              }
            }
          }
        }
      }
    }

    dfs(start) {
      let result = 0;
      const stack = [];
      const visited = {};
      stack.push(start);
      visited[start] = true;

      while (stack.length) {
        const current = stack.pop();

        if (this.adjacencyList[current].length > 0) {
          result++;

          for (let neighbor of this.adjacencyList[current]) {
            if (!visited[neighbor]) {
              stack.push(neighbor);
              visited[neighbor] = true;
            }
          }
        }
      }

      return result;
    }
  }

  // Generate the adjacency list
  // O(mn)
  const graph = new Graph(grid);

  // Iterate over the adjacency list and keep track of number of connected nodes
  // Do this for all the nodes in the adjacency list
  let max = 1;

  // O(mn)
  for (let vertex in graph.adjacencyList) {
    max = Math.max(max, graph.dfs(vertex));
  }

  return max;
}