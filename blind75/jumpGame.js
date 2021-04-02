/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.



Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

//brute force for loop approach, kinda Greedy approach
//TC-O(n)
//SC-O(1)
var canJump = function(nums) {
  let jumpMax = 0;
  for (let i = 0; i < nums.length; i++) {
    jumpMax = Math.max(jumpMax, nums[i]);
    if (i + jumpMax >= nums.length - 1) return true;
    if (jumpMax-- <= 0) break;
  }
  return false;
};

//DP:
//optimization - maximization
//greedy - O(n), O(1)
var canJump = function(nums) {
  let p = 0;
  let jump = nums[0];
  for (let i = 0; i <= p + jump; i++) {
    jump = Math.max(nums[i], jump - 1);
    p = i;
  }
  return p >= nums.length - 1;
};
//TC-O(n2)
//SC-O(n)
var withinJumpRange = function(position, nums, dp) {
  for (let i = position; i <= position + nums[position]; i++) {
    if (dp[i]) return true;
  }
  return false;
}

var canJump = function(nums) {
  let dp = new Array(nums.length).fill(false);
  dp[nums.length - 1] = true;
  let jump = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (withinJumpRange(i, nums, dp)) dp[i] = true;
  }
  return dp[0];
};

//refactored:
var canJump = function(nums) {
  let dp = new Array(nums.length).fill(false);
  dp[nums.length - 1] = true;
  let jump = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let p = i; p <= i + nums[i]; p++) {
      if (dp[p]) dp[i] = true;
    }
  }
  return dp[0];
};