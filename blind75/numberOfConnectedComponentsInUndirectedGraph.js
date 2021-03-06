/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:
Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4

Output: 2

Example 2:
Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1
*/

/*
UNION FIND:
//keep one "head node" as -1 for that connected component
//assign connected nodes the "head node" it is connected to
//all the -1's remaining are separated components
//if there are two separte head nodes and those components are connect by edge, it will refer
//to head node and change that -1 to the new head node.
sets = {
  0: -1,
  1: 0,
  2: 0,
  3: 0,
  4: 3,
}
left = 0
right = 3

count = 0
*/
//DFS, recursion with visited arraym, O(e+v)/O(e+v)
//union find with hashMap or Array, O(logn*m)/O(n), start all nodes with -1 (separate components)

//optimized:
var countComponents = function(n, edges) {
  if (!n || !edges.length) return n;
  const nodeConnections = new Array(n).fill(-1);

  for (let [edgeFrom, edgeTo] of edges) {
    while (nodeConnections[edgeFrom] !== -1) edgeFrom = nodeConnections[edgeFrom];
    while (nodeConnections[edgeTo] !== -1) edgeTo = nodeConnections[edgeTo];
    if (edgeTo !== edgeFrom) nodeConnections[edgeTo] = edgeFrom;
  }

  let components = 0;
  for (let head of nodeConnections) {
    if (head === -1) components++;
  }
  return components;
};

//UNION FIND Approach:
//TC-O(logn*m)
//SC-O(n)
var countComponents = function(n, edges) {
  if (!n || !edges) return n;
  let components = new Map();

  for (let i = 0; i < n; i++) {
    components.set(i, -1);
  }

  let n1;
  let n2;
  for (let [a, b] of edges) {
    for (n1 = a; components.get(n1) !== -1; n1 = components.get(n1));
    for (n2 = b; components.get(n2) !== -1; n2 = components.get(n2));
    if (n1 !== n2) components.set(n2, n1);
  }
  console.log(components);
  let count = 0;
  //count component heads (-1)
  for (let [nodes, head] of components) {
    if (head === -1) count++;
  }
  return count;
};

//for loop v while loop
var countComponents = function(n, edges) {
  if (!n || !edges) return n;
  let components = new Map();

  for (let i = 0; i < n; i++) {
    components.set(i, -1);
  }

  let n1;
  let n2;
  for (let [a, b] of edges) {
    n1 = a;
    n2 = b;
    while (components.get(n1) !== -1) n1 = components.get(n1);
    while (components.get(n2) !== -1) n2 = components.get(n2);
    if (n1 !== n2) components.set(n2, n1);
  }

  let count = 0;
  for (let [nodes, head] of components) {
    if (head === -1) count++;
  }
  return count;
};

//second pass (same approach)
var countComponents = function(n, edges) {
  const connections = new Map();
  for (let i = 0; i < n; i++) connections.set(i, -1);
  for (let [n1, n2] of edges) {
    while (connections.get(n1) !== -1) n1 = connections.get(n1);
    while (connections.get(n2) !== -1) n2 = connections.get(n2);
    if (n1 !== n2) connections.set(n2, n1);
  }
  let components = 0;
  for (let [node, head] of connections) {
    if (head === -1) components++;
  }
  return components;
};