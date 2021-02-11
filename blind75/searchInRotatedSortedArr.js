/*
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/

//ONE_PASS BINARY SEARCH
//binary search with checks for left < target < right values
//TC-O(log n)
//SC-O(1)
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] === target) return pivot;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[pivot] >= nums[left]) {
      if (nums[left] <= target && target < nums[pivot]) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    } else {
      if (nums[pivot] < target && target <= nums[right]) {
        left = pivot + 1;
      } else {
        right = pivot - 1;
      }
    }
  }

  return -1;
};

//second pass (still confusing with conditionals)
//2-3 pointer (left, mid, right)
var search = function(nums, target) {
  if (!nums.length) return -1;

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((r - l) / 2 + l);
    if (target === nums[m]) return m;
    if (target === nums[r]) return r;
    if (target === nums[l]) return l;

    if (nums[m] >= nums[l]) {
      //normal
      if (target >= nums[l] && target < nums[m]) {
        //target is within l - m range
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      //abnormal
      if (target <= nums[r] && target > nums[m]) {
        //target is within m - r range
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};