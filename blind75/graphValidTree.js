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

//stack
//goal is to determine if seen group contains all n nodes (no dups&no islands)
const validTree = (n, edges) => {

  let adjList = new Array(n);

  for (let edge of edges) {
    adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : adjList[edge[0]] = [edge[1]];
    adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : adjList[edge[1]] = [edge[0]];

  }

  let parent = new Map();
  parent.set(0, -1);

   //set up seen stack to organize nodes (no dups)
  let stack = [];
  stack.push(0);

  while (stack.length > 0) {
    let node = stack.pop();
    if (adjList[node] && adjList[node].length > 0) {
      let neighbors = adjList[node];
      for (let neighbor of neighbors) {
        if (parent.get(node) === neighbor) continue;
        if (parent.has(neighbor)) return false;
        stack.push(neighbor);
        parent.set(neighbor, node);
      }
    }
  }
  return parent.size === n;
};

