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

  const check = currNode => {
    //set up seen stack to organize nodes (no dups)
    let stack = [];
    let seen = new Set();
    stack.push(currNode);
    seen.add(currNode);

    while (stack.length > 0) {
      let node = stack.pop();
      if (adjList.has(node)) {
        let neighbors = adjList.get(node);
        for (let neighbor of neighbors) {
          if (seen.has(neighbor)) continue;
          stack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return seen.size() === n;
  }
};