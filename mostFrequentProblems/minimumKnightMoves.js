/*
https://leetcode.com/problems/minimum-knight-moves/

In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

Example 1:
Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]

Example 2:
Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
*/

//brainstorm:
//graph q
//starting point, bfs
//check neighbors, if found return count

//optimized math approach:
var minKnightMoves = function(x, y) {
  [x, y] = [Math.abs(x), Math.abs(y)];
  if (x < y) [x, y] = [y, x];

  if (x == 1 && y == 0) return 3
  if (x == 2 && y == 2) return 4

  let m = Math.round( Math.max(x/2,(x+y)/3) )
  return m + ( (m + x + y) % 2 )
};

//2 while loops (next queue swapped for for loop):
//TC-O(n2)
//SC-O(n2)
var minKnightMoves = function(tx, ty) {
  var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
  let steps = 0;
  let seen = new Set();
  let queue = [[0, 0]];
  while (queue.length) {
    let nextLevel = [];
    while (queue.length) {
      let [x, y] = queue.pop();
      if (x === tx && y === ty) return steps;
      for (let [dx, dy] of dirs) {
        let nx = x + dx;
        let ny = y + dy;
        if (!seen.has(nx + ',' + ny)) {
          nextLevel.push([nx, ny]);
          seen.add(nx + ',' + ny);
        }
      }
    }
    steps++;
    queue = nextLevel;
  }
};

//classic bfs:
var minKnightMoves = function(tx, ty) {
  var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
  let steps = 0;
  let seen = new Set();
  let queue = [[0, 0]];

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();
      if (x === tx && y === ty) return steps;
      for (let [dx, dy] of dirs) {
        let [nx, ny] = [x + dx, y + dy];
        if (!seen.has(nx + ',' + ny)) {
          queue.push([nx, ny]);
          seen.add(nx + ',' + ny);
        }
      }
    }
    steps++;
  }
};