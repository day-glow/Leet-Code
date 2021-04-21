/*
https://leetcode.com/problems/fibonacci-number/

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/
//recursion, O(2^n)/O(n)
//dp with memoization O(n)/O(n)
//dp with 2 variables O(n)/O(1)

//dp, constant space
var fib = function(n) {
  if (n < 2) return n;
  let prev1 = 0;
  let prev2 = 1;
  let curr;
  for (let i = 2; i <= n; i++) {
    [curr, prev1] = [prev1 + prev2, prev2]
    prev2 = curr;
  }
  return curr;
};

//dp, memoization
var fib = function(n) {
  if (n < 2) return n;
  let dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};


