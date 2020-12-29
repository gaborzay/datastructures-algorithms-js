import {describe, expect, it} from '@jest/globals';
import RouteBetweenNodes from '../../../../src/problems/ctci/4. Trees and Graphs/RouteBetweenNodes';


describe('Route Between Nodes', () => {
  const graph = new RouteBetweenNodes();
  graph.addVertex('a');
  graph.addVertex('b');
  graph.addVertex('c');
  graph.addVertex('d');

  graph.addDirectedEdge('a', 'b');
  graph.addDirectedEdge('a', 'c');
  graph.addDirectedEdge('b', 'd');
  graph.addDirectedEdge('d', 'c');

  it('should find a path when one exists', function() {
    /*
     * a->b->d
     */
    expect(graph.check('a', 'd', 'bfs')).toBeTruthy();
    expect(graph.check('a', 'd', 'dfs')).toBeTruthy();
  });

  it('should not find a path when one does not exist', function() {
    graph.removeEdge('b', 'd');
    expect(graph.check('a', 'd', 'bfs')).toBeFalsy();
    expect(graph.check('a', 'd', 'dfs')).toBeFalsy();
  });
});