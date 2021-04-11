/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

 use recursive DFS to find max depth (return + 1)
 TC- O(n)
 SC- O(n)
*/

//REFACTORED - one liner:
const maxDepth = root => !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

//RECURSION, DFS:
const maxDepth = (root) => {
  if (root === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
  }
};

//RECURSION Reduced:
const maxDepth = root => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//ITERATIVE, BFS:
const maxDepth = root => {
  if (!root) return 0;
  //create queue
  let queue = [root];
  //declare depth
  let depth = 0;

  //while loop, queue exists
  while (queue.length > 0) {
    let count = queue.length;
    //for loop for the length of the queue
    for (let i = 0; i < count; i++) {
      //declare node and shift off "first in queue"
      let node = queue.shift();
      //if cond for left and right, push the current node's left and rights
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    //increase depth count
    depth++;
  }

  return depth;
};

//thirds:
//traverse tree and keep max O(n)/O(1)
//dfs, find depth
//bfs, find levels
//iterative > recursive sc, but might take more tc
var maxDepth = function(root) {
  if (!root) return 0;
  let level = 0;
  let currLevel = [root];

  while (currLevel.length) {
    let nextLevel = [];
    while (currLevel.length) {
      let node = currLevel.pop();
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    currLevel = nextLevel;
    level++;
  }
  return level;
};

//recursive approach:
var maxDepth = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};