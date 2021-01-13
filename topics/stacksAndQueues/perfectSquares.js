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
//similar to 2Sum/3Sum, checking remainder of current values
  //make a perf squares map/set, check all perf squares less than n (target sum)

//queue & Set() approach using Greedy & BFS
//TC-O(n^h/2)
//SC-O(sqrt(n)^h)
var numSquares = function(n) {
  let queue = new Set();
  let fewestNums = 0;
  let perfectSquares = new Set();

  //find closest perfect square to n (target sum)
  for (let i = 1; i * i <= n; i++) {
    perfectSquares.add(i * i);
  }

  queue.add(n);

  //then check self & neighbors
  while (queue.size) {
    fewestNums++;
    let nextLevel = new Set();

    for (let remainder of queue) {
      for (let square of perfectSquares) {
        if (remainder === square) {
          return fewestNums;
        } else if (remainder < square) {
          break;
        } else {
          nextLevel.add(remainder - square);
        }
      }
    }
    queue = nextLevel;
  }
  return fewestNums;
};

