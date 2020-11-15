import {describe, expect, it} from '@jest/globals';
import {WeightedGraph} from '../../src/algorithms/dijkstras';

describe('Dijkstra Algorithm', () => {
  const graph = new WeightedGraph();
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

  vertices.forEach(vertex => graph.addVertex(vertex));

  graph.addEdge('A', 'B', 4);
  graph.addEdge('A', 'C', 2);
  graph.addEdge('B', 'E', 3);
  graph.addEdge('C', 'D', 2);
  graph.addEdge('C', 'F', 4);
  graph.addEdge('D', 'E', 3);
  graph.addEdge('D', 'F', 1);
  graph.addEdge('E', 'F', 1);

  it('should find the shortest path', function() {
    expect(graph.Dijkstra('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});