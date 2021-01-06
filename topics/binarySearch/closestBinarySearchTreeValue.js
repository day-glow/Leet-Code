/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
*/

const closestValue = (root, target) => {
  let node = root;
  let closest = root.val;

  while (node) {
    if (Math.abs(node.val - target) < 0.5) return node.val;
    if (Math.abs(node.val - target) <= Math.abs(closest - target)) closest = node.val;
    if (node.val < target) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return closest;
};

//binary search using ternary
const closestValue = (root, target) => {
  let val;
  let closest = root.val;
  let node = root;
  while (node) {
    val = node.val;
    closest = (Math.abs(val - target) < Math.abs(closest - target)) ? val : closest;
    node = target < val ? node.left : node.right;

  }
  return closest;
};