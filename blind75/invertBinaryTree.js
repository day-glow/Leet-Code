/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 invert, meaning left and right children swap
 use recursion or iteration

 if null, return
 if left and right, use temp value to swap
 if only one side exists, swap?

 TC-O(n)
 SC-O(n)
*/

//second pass recursive approach
/**
left -> right
right -> left
is it balanced

in place?
swap at each level starting with root
new tree?

use bfs (by level), iterative, queue
use recursion?
*/
var invertTree = function(root) {
  let node = root;

  if (node !== null) {
    let temp = node.left;
    node.left = invertTree(node.right);
    node.right = invertTree(temp);
  }

  return root;
};

//RECURSION:
var invertTree = function(root) {
  if (!root) {
    return root;
  }

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

//OPTIMIZED RECURSION:
const invertTree = root => {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

//DFT
const invertTree = root => {
  let stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n !== null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }
  return root;
};

//BFS
const invertTree = root => {
  let queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n !== null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }
  return root;
};