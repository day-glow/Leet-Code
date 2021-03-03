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
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

//iterative (TC-O(n)/SC-O(1))
const lowestCommonAncestor = (root, p, q) => {
  let node = root;

  while (node !== null) {
    if (p.val > node.val && q.val > node.val) {
      node = node.right;
    } else if (p.val < node.val && q.val < node.val) {
      node = node.left;
    } else {
      return node;
    }
  }
  return null
};

//second pass (tried iterative then switched to recursive):
//iterate over tree pre-order
//start with root, use BST characteristics to compare values to the p & q
var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;
  if ((root.val > p.val && root.val < q.val) || (root.val > q.val && root.val < p.val)) return root;
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
};

//second pass refactored:
var lowestCommonAncestor = function(r, p, q) {
  if (r.val > p.val && r.val > q.val) return lowestCommonAncestor(r.left, p, q);
  if (r.val < p.val && r.val < q.val) return lowestCommonAncestor(r.right, p, q);
  return r;
};