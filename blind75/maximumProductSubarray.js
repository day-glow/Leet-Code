/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

//first attempt was 2-pointers (only passed 110/180 test cases)

//brute force nested for loops
//TC-O(n^2)
//SC-O(1)
const maxProduct = nums => {
  if (nums.length < 1) return 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let accumulator = 1;
    for (let j = i; j < nums.length; j++) {
      max = Math.max(max, accumulator *= nums[j]);
    }
  }
  return max;
};
