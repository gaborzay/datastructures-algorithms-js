import {describe, expect, it} from '@jest/globals';
import Graph from '../../src/structures/Graph';

describe('Graph Basic functions', () => {
  const graph = new Graph();

  it('should add a vertex ignoring duplicates', function() {
    graph.addVertex('hello');
    graph.addVertex('world');
    graph.addVertex('world');
    graph.addVertex('road');
    graph.addVertex('warrior');

    expect(graph.adjacencyList['hello']).toEqual([]);
    expect(graph.adjacencyList['world']).toEqual([]);
    expect(graph.adjacencyList['road']).toEqual([]);
    expect(graph.adjacencyList['warrior']).toEqual([]);
  });

  it('should add edges correctly', function() {
    graph.addEdge('hello', 'world');
    graph.addEdge('hello', 'warrior');

    expect(graph.adjacencyList['hello']).toEqual(['world', 'warrior']);
    expect(graph.adjacencyList['world']).toEqual(['hello']);
    expect(graph.adjacencyList['warrior']).toEqual(['hello']);
  });

  it('should remove edges correctly', function() {
    graph.removeEdge('hello', 'warrior');

    expect(graph.adjacencyList['hello']).toEqual(['world']);
    expect(graph.adjacencyList['world']).toEqual(['hello']);
    expect(graph.adjacencyList['warrior']).toEqual([]);
  });

  it('should remove vertices correctly', function() {
    graph.removeVertex('hello');

    expect(graph.adjacencyList['hello']).toBeUndefined();
    expect(graph.adjacencyList['world']).toEqual([]);
    expect(graph.adjacencyList['road']).toEqual([]);
    expect(graph.adjacencyList['warrior']).toEqual([]);
  });
});

describe('Graph Search functions', () => {
  //        A
  //      /   \
  //     B     C
  //     \     /
  //      D---E
  //       \ /
  //        F
  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');

  it('should depth first search recursively in correct order', function() {
    const result = graph.depthFirstSearchRecursive('A');
    const expected = ['A', 'B', 'D', 'E', 'C', 'F'];
    expect(result).toEqual(expected);
  });

  it('should depth first search iteratively in correct order', function() {
    const result = graph.depthFirstSearchIterative('A');
    const expected = ['A', 'C', 'E', 'F', 'D', 'B'];
    expect(result).toEqual(expected);
  });

  it('should breadth first search iteratively in correct order', function() {
    const result = graph.breadthFirstSearch('A');
    const expected = ['A', 'B', 'C', 'D', 'E', 'F'];
    expect(result).toEqual(expected);
  });
});