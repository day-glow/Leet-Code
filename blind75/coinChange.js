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

//DP-top down:
//TC-O(n*s)
//SC-O(s)
var coinChangeDP = function(coins, rem, count) {
  if (rem < 0) return -1;
  if (rem === 0) return 0;
  if (count[rem - 1] !== 0) return count[rem - 1];
  let min = Number.MAX_SAFE_INTEGER;

  for (let coin of coins) {
    let result = coinChangeDP(coins, rem - coin, count);
    if (result >= 0 && result < min) {
      min = 1 + result;
    }
  }
  count[rem - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
  return count[rem - 1];
};

var coinChange = function(coins, amount) {
  if (amount < 1) return 0;
  return coinChangeDP(coins, amount, new Array(amount).fill(0));
};
