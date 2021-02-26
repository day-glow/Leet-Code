/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 //second pass (binary tree) recursion:
 var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

 //inorder iterative tree traversal
 //TC-O(n)
 //SC-O(n)
const isValidBST = root => {
  if (root.val === null || !root) return;
  let stack = [];
  let prev = null;

  while (stack.length || root) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prev !== null && root.val <= prev) return false;

    prev = root.val;
    root = root.right;
  }

  return true;
};

//recursive approach
 //TC-O(n)
 //SC-O(n)
const isValidBST = root => {
  //if (!root.val || !root) return true;
  let prev = null;

  const checkVals = node => {
    if (!node) return true;
    if (!checkVals(node.left)) return false;
    if (prev !== null && node.val <= prev) return false;
    prev = node.val;
    return checkVals(node.right);
  };

  return checkVals(root);
};
