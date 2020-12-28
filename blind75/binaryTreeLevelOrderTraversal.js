/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/*
//bfs, iteration, queue
Queue APPROACH:
TC-
  best- O(n)
  avg- O(n)
  worst- O(n)
SC-
  best- O(n)
  avg- O(n)
  worst- O(n)
*/

const levelOrder = root => {
  if (root === null) return [];
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let level = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let temp = queue.shift();
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
      level.push(temp.val);
    }
    result.push(level);
  }
  return result;
};