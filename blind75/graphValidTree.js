/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
Example 2:

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}

 ex1: true
           0
        /  |  \
       1   2   3
     /
    4

ex2: false, cycle detected

            0
          /
        1
      / | \
    2   |  4
  /     |
3-------|

*/

//reused Courses strategy for Hash Map()/Hash Set() w/ hasCycle()
//doesn't work (doesn't account for bidirectional)
const validTree = (n, edges) => {
  let graph = new Map();
  let seen = new Set();
  let visiting = new Set();

  for (let [node1, node2] of edges) {
    if (graph.has(node1)) {
      let edge = graph.get(node1);
      edge.push(node2);
      graph.set(node1, edge);
    } else {
      graph.set(node1, [node2]);
    }
    if (graph.has(node2)) {
      let edge = graph.get(node2);
      edge.push(node1);
      graph.set(node2, edge);
    } else {
      graph.set(node2, [node1]);
    }
  }

  //goal, travel from currNode to leaf without a cycle (seeing same node twice)
  //DFS? branch to branch
  const hasCycle = (currNode) => {

    visiting.add(currNode);
    let edges = graph.get(currNode);
    if (edges) {
      for (let node of edges) {
        if (seen.has(node)) continue;
        if (visiting.has(node)) return true;
        if (hasCycle(node)) return true;
      }
    }

    visiting.delete(currNode);
    seen.add(currNode);
    return false;
  }

  for (let [node, connections] of graph) {
    if (hasCycle(node)) return false;
  }

  return true;
};