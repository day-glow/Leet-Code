/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1

 g-sub array with largest sum
 i-array of nums
 o-array of nums
 c-O(n) greedy approach, optimize w/ divide&conquer (math approach)
 e-arr length is 0, nums are constrained to normal numbers, neg&pos nums
*/

//DP Approach (looks just like Greedy):
//TC-O(n)
//SC-O(1)
var maxSubArray = function(nums) {
  let currSubArr = -Infinity;
  let max = -Infinity;
  for (let num of nums) {
    currSubArr = Math.max(num, currSubArr + num);
    max = Math.max(max, currSubArr);
  }
  return max;
};

//Refactored:
var maxSubArray = function(nums) {
  if (nums.length <= 1) return nums[0];

  let largestSum = nums[0];
  let runSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    runSum = Math.max(nums[i], runSum + nums[i]);
    largestSum = Math.max(runSum, largestSum);
  }
  return largestSum;
};


//OPTIMIZED APPROACH (GREEDY):
const maxSubArray = nums => {
  //declare sum variable
  let maxSum = nums[0];
  const n = nums.length;
  let currSum = nums[0];

  if (n <= 1) {
    return currSum;
  }

  //iterate over arr
  for (let i = 1; i < nums.length; i++) {
    //add elem to temp sum
    currSum = Math.max(nums[i], currSum + nums[i]);
    //if temp sum is greater than sum, replace
    maxSum = Math.max(maxSum, currSum);
  }

  //return sum
  return maxSum;
};


