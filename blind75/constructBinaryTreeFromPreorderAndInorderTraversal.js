/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

//must redo, this one was hard
//inorder (left, node, right)
//preorder (node, left, right)
//preorder dfs, easier
//probably need both trees to understand when a branch ends (null)
//must redo, copied solution
var buildTree = function(preorder, inorder) {
  let map = new Map();
  inorder.forEach((e, i)=>map.set(e, i));

  let recur = (start, end) => {
      if (start > end) return null;
      let root = new TreeNode(preorder.shift());
      root.left = recur(start, map.get(root.val) - 1);
      root.right = recur(map.get(root.val) + 1, end);
      return root;
  }

  return recur(0, inorder.length - 1);
};

//BEST: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34543/Simple-O(n)-without-map
var buildTree = function(preorder, inorder) {
  let p = 0;
  let i = 0
  const build = stop => {
    if (inorder[i] != stop) {
        var root = new TreeNode(preorder[p++])
        root.left = build(root.val)
        i++
        root.right = build(stop)
        return root
    }
    return null
  }
  return build()
};