/*
https://leetcode.com/problems/coin-change/

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Example 4:
Input: coins = [1], amount = 1
Output: 1

Example 5:
Input: coins = [1], amount = 2
Output: 2
*/

//brainstorm:
//are the coins sorted?

//optimization - minimization
//hashmap & 2sum approach
//recursion + memoization O(n) & O(n)
//DP - with variables SC-O(1), nested loops (bottom up)

//logic, must end on 0, or one of the coin vals, work backwards?
//similar to greedy?
//bfs

//DP-bottom up
//iterative, with array storage & nested loops
//TC-O(n*s)
//SC-O(s)
var coinChange = function(coins, amount) {
  if (amount === 0 || !coins.length) return 0;
  let max = amount + 1;
  let dp = new Array(max).fill(max);
  dp[0] = 0;

  for (let i = 1; i < max; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};