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