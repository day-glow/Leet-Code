/*
https://leetcode.com/problems/house-robber-ii/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:
Input: nums = [0]
Output: 0
*/
//dp O(n)/O(1), simpleRob funtion, params start/end, prevSum or nextSum compare, compare max of options

//thirds:
var rob = function(nums) {
  if (nums.length < 4) return Math.max(...nums);
  var sumOfOptions = function(start, end) {
    let t1 = 0;
    let t2 = 0;
    for (let i = start; i <= end; i++) {
      let temp = t1;
      [t1, t2] = [Math.max(nums[i] + t2, t1), temp];
    }
    return t1;
  };
  return Math.max(sumOfOptions(0, nums.length - 2), sumOfOptions(1, nums.length - 1));
};

//nums = [1,2,3,1,4,5,2,1,6,3,4]
//n1   = [1,2,3,1,4,5,2,1,6,3]
//n2   = [2,3,1,4,5,2,1,6,3,4]
//take max of two options
//dp   = [1,2,4,4,0,0,0,0,0,0,0]

//DP:
//TC-O(n)
//SC-O(1)
var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length <= 3) return Math.max(...nums);

  var choiceRobSum = function(n) {
    let robNextPlusOne = 0;
    let robNext = n[n.length - 1];
    for (let i = n.length - 2; i >= 0; --i) [robNextPlusOne, robNext] = [robNext, Math.max(robNext, robNextPlusOne + n[i])];
    return robNext;
  }
  return Math.max(choiceRobSum(nums.slice(0, nums.length - 1)), choiceRobSum(nums.slice(1)));
};

