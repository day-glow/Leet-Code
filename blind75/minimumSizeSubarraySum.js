/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

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