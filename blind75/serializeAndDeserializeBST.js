/*
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example 1:
Input: root = [2,1,3]
Output: [2,1,3]

Example 2:
Input: root = []
Output: []
*/

//PREORDER
const serialize = root => {
  if (!root) return '';
  return `${root.val}*${serialize(root.left)}*${serialize(root.right)}`;
};

const deserialize = data => {
  const arr = data.split('*');

  const makeTree = arr => {
    const val = arr.shift();
    if (!val) return null;
    const node = new TreeNode(val);
    node.left = makeTree(arr);
    node.right = makeTree(arr);
    return node;
  }

  return makeTree(arr);
};

//Still failing (not sure why) based on java solution
/*var serialize = function(root) {
  const postorder = (root, str = '') => {
    if (!root) return str;

    postorder(root.left, str);
    postorder(root.right, str);
    str += root.val;
    str += ' ';
    console.log(str);
    return str;
  }

  return String(postorder(root));
};

var deserialize = function(data) {

  if (!data) return data;

  let arr = data.split(' ');

  const recur = (lower, upper, arr) => {
    if (!arr) return arr;
    let val = arr.pop();
    if (val > lower || val < upper) {
      return null;
    }
    let root = new TreeNode(val);
    root.right = recur(val, upper, arr);
    root.left = recur(lower, val, arr);

    return root;
  }

  return recur(-Infinity, Infinity, arr);
};
*/

//preorder - solution
var serialize = function(root) {
  let preorder = [];
  let dfs = function(node) {
      if (node==null) return;
      preorder.push(node.val);
      dfs(node.left);
      dfs(node.right);
  }
  dfs(root);
  return preorder.join(',');
};

var deserialize = function(data) {
  if (data == '') return null;
  let preorder = data.split(',');
  let recur = function(lower, upper) {
      if (Number(preorder[0]) < lower || Number(preorder[0]) > upper) return null;
      if (preorder.length == 0) return null;
      let root = new TreeNode(preorder.shift());
      root.left = recur(lower, root.val);
      root.right = recur(root.val, upper);
      return root;
  }
  return recur(-Infinity, Infinity);
};

