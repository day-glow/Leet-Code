/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums, return the minimum element of this array.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
*/

/*
find min
brut force (rotate until the next number is greater than sub 0 position) O(n) time
use binary search?
use pivot?
3 pointer?
TC-
  best- O(logn)
  avg- O(nlogn)
  worst- O(n)
SC-
  best-O(1)
  avg-O(1)
  worst-O(1)
*/

//3 pointers
const findMin = nums => {
  //edge cases
  if (nums.length < 1) return null;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(nums[0], nums[1]);

  //declare variables
  let left = 0;
  let mid = Math.floor(nums.length / 2);
  let right = nums.length - 1;


  //compare
  while (!(nums[left] < nums[mid] && nums[mid] < nums[right] && nums[left] < nums[right])) {
    if (nums[left] < nums[mid] && nums[mid] < nums[right] && nums[left] < nums[right]) {
      break;
    } else if (nums[left] < nums[mid] && nums[mid] > nums[right] && nums[left] > nums[right]) {
      left = mid;
      mid = left + Math.floor((right - left) / 2);
    } else if (nums[left] > nums[mid]) {
      right = mid;
      mid = left + Math.floor((mid - left) / 2);
    } else if (left === mid && nums[left] > nums[right]) {
      left = right;
      break;
    }
  }

  //double check
  if (left === 0 || left === nums.length - 1 || nums[left] < nums[left + 1] && nums[left] < nums[left - 1]) {
    return nums[left];
  }
};