/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

//binary search two part, 2 sub array sides
/*TC-O(logn)
SC-O(1)
*/
const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  //search sub array left of pivot for start if pivot is >= target
  while (left < right) {
    let pivot = Math.floor((right - left) / 2) + left;
    nums[pivot] >= target ? right = pivot : left = pivot + 1;
  }

  //if no start exists, then target doesn't exist since list if sorted
  if (nums[left] !== target) return [-1, -1];

  //save start index of target range & reset right
  let start = left;
  right = nums.length - 1;

  //search sub array right for end of range
  while (left < right) {
    let pivot = Math.floor((right - left) / 2) + left;
    nums[pivot] <= target ? left = pivot + 1 : right = pivot;
  }

  //if target was found
  let end = nums[left] === target ? left : left - 1;
  return [start, end];
};

//binary search, middle out
/*TC-
worst- O(n)
avg- O(logn)
best- O(logn)
SC-O(1)
*/
const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  if (!nums.length || target === null || nums[left] > target) return [-1, -1];

  while (left <= right) {
    let pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] === target) {
      left = pivot;
      right = pivot;
      break;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  if (left > right) return [-1, -1];

  while (nums[right + 1] === target) right++;
  while (nums[left - 1] === target) left--;
  return [left, right];
};