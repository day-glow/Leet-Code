/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//second pass (same approach):
var containsDuplicate = function(nums) {
  let seenNums = new Set();
  let hasDups = false;
  nums.forEach(num => seenNums.has(num) ? hasDups = true : seenNums.add(num));
  return hasDups;
};
//second pass (for of loop)
var containsDuplicate = function(nums) {
  let seenNums = new Set();
  for (let num of nums) {
    if (seenNums.has(num)) return true;
    seenNums.add(num);
  }
  return false;
};

//Hash Map Approach
//TC- O(n)
//SC- O(n)
const containsDuplicate = nums => {
  let seen = new Map();
  let hasDup = false;
  nums.forEach(num => {
    seen.has(num) ? hasDup = true : seen.set(num);
  })
  return hasDup;
};

//optimize TC:
const containsDuplicate = nums => {
  let seen = new Map();
  for (let num = 0; num < nums.length; num++) {
     if (seen.has(nums[num])) return true;
     seen.set(nums[num]);
  }
  return false;
};