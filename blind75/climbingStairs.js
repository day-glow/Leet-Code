/*
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?ß

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

//refactored fib num approach:
var climbStairs = function(n) {
  if (n === 0 || n === 1 || n === 2) return n;
  let dp1 = 1;
  let dp2 = 2;
  for (let i = 3; i <= n; i++) [dp1, dp2] = [dp2, dp1 + dp2];
  return dp2;
};

//fibonacci number, iteratively
//TC-O(n)
//SC-O(1)
var climbStairs = function(n) {
  if (n === 1) return n;
  let dp1 = 1;
  let dp2 = 2;
  for (let i = 3; i <= n; i++) {
    let dp3 = dp1 + dp2;
    dp1 = dp2;
    dp2 = dp3;
  }
  return dp2;
};

//math approach:
var climbStairs = function(n) {
  if (n === 0 || n === 1 || n === 2) return n;
  let sqrt5 = Math.sqrt(5);
  let fibNum = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return fibNum / sqrt5;
};

//dynamic programming iteratively
//TC-O(n)
//SC-O(n)
var climbStairs = function(n) {
  if (n === 1) return n;
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

//brainstorm
//num of paths => optimization problem
//recursion => memoization
//base case
//set memo of vals with for loop
//return memo array of saved vals

//recursion with memoization
//TC-O(n)
//SC-O(n)
var climbStairs = function(n, memo = []) {
  if (n === 0 || n === 1 || n === 2) return n;
  if (memo[n] !== undefined) return memo[n];
  for (let i = 3; i <= n; i++) {
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }
  return memo[n];
};