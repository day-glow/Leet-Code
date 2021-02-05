/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

Test case format:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/

//queue approach
//TC-O(n+m)
//SC-O(n)
var cloneGraph = function(node) {
  if (!node) return null;
  let clones = new Map();
  clones.set(node, new Node(node.val));

  let queue = [node];
  while (queue.length) {
    let curr = queue.shift();
    for (let nei of curr.neighbors) {
      if (!clones.has(nei)) {
        clones.set(nei, new Node(nei.val));
        queue.push(nei);
      }
      clones.get(curr).neighbors.push(clones.get(nei));
    }
  }
  return clones.get(node);
};

//recursive approach
var cloneGraph = function(node) {
  if (!node) return null;

  let clonesGraph = new Map();

  const clone = currNode => {
    if (!clonesGraph.has(currNode.val)) {
      clonesGraph.set(currNode.val, new Node(currNode.val));
      clonesGraph.get(currNode.val).neighbors = currNode.neighbors.map(clone);
    }
    return clonesGraph.get(currNode.val);
  };

  return clone(node);
};