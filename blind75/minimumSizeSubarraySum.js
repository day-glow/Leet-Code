/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

//second pass two pointers one pass:
var minSubArrayLen = function(target, nums) {
  let min;
  let subSum = 0;
  let p1 = 0;
  let p2 = 0;

  while (p2 < nums.length && p1 < nums.length) {
    if (nums[p1] === target || nums[p2] === target) return 1;
    subSum += nums[p2];
    while (subSum >= target) {
      min = (min === undefined) ? p2 - p1 + 1 : Math.min(min, p2 - p1 + 1);
      subSum -= nums[p1++];
    }
    p2++;
  }
  return min === undefined ? 0 : min;
};

//TC- O(n)
//SC- O(1)
const minSubArrayLen = (s, nums) => {
  let min;
  let p1 = 0;
  let currSum = 0;
  for (let p2 = 0; p2 < nums.length; p2++) {
    currSum += nums[p2];
    while (currSum >= s) {
      min = (min !== undefined) ? Math.min(min, p2 - p1 + 1) : p2 - p1 + 1;
      currSum -= nums[p1];
      p1++;
    }
  }
  return (min !== undefined) ? min : 0;
};