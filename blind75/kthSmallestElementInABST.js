/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/

//DFS - post order (bottom up count k up, left, right, node) or inorder (starts with left, node, right)
//go left node until find left = null, then count back to node k
const inorder = (root, arr) => {
  if (!root) return arr;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
  return arr;
};

const kthSmallest = (root, k) => {
  let nums = inorder(root, []);
  return nums[k - 1];
};