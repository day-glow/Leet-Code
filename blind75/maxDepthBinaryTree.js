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
  //create arr queue
  //declare depth
  //while loop, queue exists
    //increase depth count
    //for loop for the length of the queue
      //declare node and shift off "first in queue"
      //if cond for left and right, push the current node's left and rights

  return depth;
};