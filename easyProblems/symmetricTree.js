/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

TC- O(n)
SC- O(n)

solve w/
recursion
iterative
*/

//RECURSION, DFS:
//helper function
const isMirror = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isMirror(p.right, q.left) && isMirror(p.left, q.right);
};
const isSymmetric = root => {
  return isMirror(root, root);
};