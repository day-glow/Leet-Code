/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/*
TC- O(log n)
SC- O(1)
*/

const search = (nums, target) => {

  let p;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    p = Math.floor((r - l) / 2) + l;
    if (nums[p] === target) {
      return p;
    }
    if (nums[p] > target) {
      r = p - 1;
    } else {
      l = p + 1;
    }
  }
  return -1;
};