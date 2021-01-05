/*
A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
*/

//TC-O(logn)
//SC-O(1)
const findPeakElement = nums => {
  if (nums.length < 1) return -1;

  let left = 0;
  let right = nums.length;

  while (left < right) {
    let pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] > nums[pivot - 1] && nums[pivot] > nums[pivot + 1]) {         return pivot;
    } else if (nums[pivot] < nums[pivot + 1]) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }
  return left;
};