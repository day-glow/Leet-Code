/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

//find shortest path
//BFS
//check "neighbors" and dups for sum total
//n = target
//similar to 2Sum/3Sum
  //make a perf squares map, check all perf squares less than n (target sum)

var numSquares = function(n) {
  let queue = [];
  let fewestNums = 0;
  let perfectSquares = new Set();

  //find closest perfect square to n (target sum)
  for (let i = n; i > 0; i--) {
    if (Math.sqrt(i) % 2 === 0 || Math.sqrt(i) % 2 === 1) {
      perfectSquares.add(i);
      if (n - i === 0) return fewestNums + 1;
      if (perfectSquares.has(n - i)) return fewestNums + 2;
      queue.push(i);
    }
  }
  //then check self & neighbors
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (n - curr === 0) return fewestNums + 1;
      if (perfectSquares.has(curr)) return fewestNums + 2;
      queue.push(n - curr);
    }
    fewestNums++;
  }
  //if sq root % 2 = 0, it is a perfect square
  return fewestNums;
};