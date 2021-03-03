/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2

   //trav over tree nodes (use recursion)
    //check each node val and l&r, if not a match, return false
    //if found, return true
    //if not found, return false

TC-O(n) or worse case O(n*m) must traverse both trees fully
SC-O(n)
*/

//SECOND PASS:
const isSubtree = (s, t) => JSON.stringify(s).indexOf(JSON.stringify(t)) !== -1;

//second pass:
const isSubtree = (s, t) => {
  if (!s) return !t;

  const isSame = (tree1, tree2) => {
    if (!tree1 || !tree2) return !tree1 && !tree2;
    if (tree1.val !== tree2.val) return false;
    return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
  };

  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

//helper function to check the current node
const isTheSame = (s, t) => {
  if (!s || !t) return !s && !t;
  if (s.val !== t.val) return false;
  return isTheSame(s.left, t.left) && isTheSame(s.right, t.right);
}

//actual solution
const isSubtree = (s, t) => {
  if (!s) return !t;
  return isTheSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};