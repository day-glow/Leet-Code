/*
https://leetcode.com/problems/range-sum-query-immutable/

Given an integer array nums, find the sum of the elements between indices left and right inclusive, where (left <= right).

Implement the NumArray class:

NumArray(int[] nums) initializes the object with the integer array nums.
int sumRange(int left, int right) returns the sum of the elements of the nums array in the range [left, right] inclusive (i.e., sum(nums[left], nums[left + 1], ... , nums[right])).

Example 1:
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
*/
//brute force O(n)/O(1)
//caching O(1)/O(n^2), nested loop, cache using map
//caching O(1)/O(n)


//mock:
//O(n)/O(1) (timelimit exceeded)
var NumArray = function(nums) {
  this.numsArr = nums;
};

NumArray.prototype.sumRange = function(left, right) {
  let nums = this.numsArr;
  let sum = 0;
  for (let i = left; i <= right; i++) sum += nums[i];
  return sum;
};