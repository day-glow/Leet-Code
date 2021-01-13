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
