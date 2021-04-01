/*
https://leetcode.com/problems/longest-increasing-subsequence/

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

//optimize - enumeration
//iterate over, changing the # count for each position for those less than
/*
nums = [10,9,2,5,3,7,101,18]
count= [1, 1,1,2,2,3, 4, 4]

//how to know which val previously is less than current to add one to
//curr num, if there is a less than num at any point, take max of their counts
//greedy
//dp

//work backward?
prevMax = [101, 7] stack
currMaxIdx = 3
currHigh = 4
nums = [10,9,2,5,3,7,101,18]
count= [1, 1,4,1,3,2, 1, 1]
//nums = [4,5,6,7,8,9,2,5,3,7,101,18]

//binary search (pick pivot, count left, count right, check middle)
*/
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let dp = new Array(nums.length).fill(1);
  let maxAns = 1;
  for (let i = 1; i < dp.length; i++) {
    let maxVal = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) maxVal = Math.max(maxVal, dp[j]);
    }
    dp[i] = maxVal + 1;
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
};

//optimized DP w/ helper function:
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let dp = new Array(nums.length);
  let len = 0;
  for (let num of nums) {
    console.log(dp)
    let i = binarySearch(dp, 0, len, num);
    if (i < 0) i = -(i + 1);
    dp[i] = num;
    if (i === len) len++;
  }

  return len;
};

//need helper function to do binary search