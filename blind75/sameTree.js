/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

TC-O(n)
SC-O(n)
*/

//RECURSION, DFS:
const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

//Recursive refractored:
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

//ITERATIVE, BFS:
//helper
const isSameNode = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return true;
};

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (!isSameNode(p, q)) return false;

  //create a queue
  let queueP = [];
  let queueQ = [];
  //enqueue values
  queueP.push(p);
  queueQ.push(q);

  //while loop
  while (queueP.length > 0 || queueQ.length > 0) {
    let pNode = queueP.shift();
    let qNode = queueQ.shift();

    //if values are not equal, return false
    if (!isSameNode(p, q)) return false;
    //if values are not null, push children into queue
    if (pNode !== null) {
      if (!isSameNode(pNode.left, qNode.left)) return false;
      if (p.left !== null) {
        queueP.push(pNode.left);
        queueQ.push(qNode.left);
      }
      if (!isSameNode(pNode.right, qNode.right)) return false;
      if (p.right !== null) {
        queueP.push(pNode.right);
        queueQ.push(qNode.right);
      }
    }
  }
  //return true
  return true;
};

//JSON stringify
var isSameTree = function(p, q) {
  return JSON.stringify(p)===JSON.stringify(q)
};