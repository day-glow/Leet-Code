/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

//2 pointers, quick sort, bubble back
var moveZeroes = function(nums) {
  let p1 = 0;
  let p2 = 0;
  let p3 = nums.length - 1;

  while (p1 !== p3) {
    while (nums[p3] === 0 && p3 !== p1) p3--;
    if (p3 === p1) break;
    while (nums[p1] !== 0) {
      p1++;
      p2++;
      if (p1 === p3) break;
    }
    while (nums[p2] === 0 && p2 !== p3) {
      nums[p2] = nums[p2 + 1];
      nums[p2 + 1] = 0;
      p2++;
    }
    p2 = p1;
  }
};

//optimized bubble forward
//bubble forward
var moveZeroes = function(nums) {
  if (nums.length < 2) return;
  let p1 = 0;
  while (nums[p1] !== 0 && p1 < nums.length) p1++;
  for (let i = p1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      nums[i] = 0;
      p1++;
    }
  }
};