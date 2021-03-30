/*
https://leetcode.com/problems/house-robber/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

//Optimized Dynamic Programming Approach:
var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;

  let robNextPlusOne = 0;
  let robNext = nums[len - 1];

  for (let i = len - 2; i >= 0; --i) {
    let curr = Math.max(robNext, robNextPlusOne + nums[i]);
    robNextPlusOne = robNext;
    robNext = curr;
  }

  return robNext;
};

//Dynamic Programming Approach w/store:
var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let maxRobbedAmount = new Array(len + 1);

  maxRobbedAmount[len] = 0; //non-existent house place holder
  maxRobbedAmount[len - 1] = nums[len - 1]; //last house

  for (let i = len - 2; i >= 0; --i) {
    maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]);
  }

  return maxRobbedAmount[0];
};

//recursion & memoization approach:
//TC-O(n)
//SC-O(n)
var rob = function(nums) {
  let memo = new Array(nums.length + 1);

  var robFrom = function(i) {
    if (i >= nums.length) return 0;
    if (memo[i] !== undefined) return memo[i];
    memo[i] = Math.max(robFrom(i + 1), robFrom(i + 2) + nums[i]);
    return memo[i];
  };

  return robFrom(0);
};