/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

//use recursion to check children (left is lesser, right is greater)

//BST, use recursion
TC-O(n)
SC-O(n)
*/
//recusive
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  let leftBranch = lowestCommonAncestor(root.left, p, q);
  let rightBranch = lowestCommonAncestor(root.right, p, q);
  if (!leftBranch) return rightBranch;
  if (!rightBranch) return leftBranch;
  return root;
};

//iterative (TC-O(n)/SC-O(1))
const lowestCommonAncestor = (root, p, q) => {
  let node = root;

  while (node !== null) {

  }
  return node;
};

//second pass:
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;
  if (!right) return left;
  return root;
};