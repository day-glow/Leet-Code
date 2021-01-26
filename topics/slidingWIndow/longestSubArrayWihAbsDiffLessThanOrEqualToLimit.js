/*
Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

Example 1:
Input: nums = [8,2,4,7], limit = 4
Output: 2
Explanation: All subarrays are:
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4.
Therefore, the size of the longest subarray is 2.

Example 2:
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

Example 3:
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
*/

//attempt at 2pointers sliding window
//time limit exceeded for 56/60 test due to expensive duplicate work from .slice and .reduce
const longestSubarray = (nums, limit) => {
  let p1 = 0;
  let p2 = 0;
  let min = 10000000;
  let max = 0;
  while (p2 < nums.length) {
    let sub = nums.slice(p1, p2 + 1);
    max = sub.reduce((a, b) => Math.max(a, b));
    min = sub.reduce((a, b) => Math.min(a, b));
    if (Math.abs(max - min) > limit || Math.abs(min - max) > limit) {
      p1++;
    }
    p2++;
  }
  return p2 - p1;
};