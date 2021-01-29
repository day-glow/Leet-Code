/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Example 3:
Input: nums = [0]
Output: [0]

Example 4:
Input: nums = [1]
Output: [1]
*/

//native built in sort function
//TC-O(nlogn) ---Chrome uses hybrid of merge sort and insertion sort called Timsort.
//SC-O(1)
const sortColors = nums => nums.sort((a, b) => a - b);

//2 pointers
const sortColors = nums => {
  let p1 = 0;
  let curr = 0;
  let p2 = nums.length - 1;

  while (curr <= p2) {
    if (nums[curr] === 0) {
      [nums[p1], nums[curr]] = [nums[curr], nums[p1]];
      curr++;
      p1++;
    } else if (nums[curr] === 2) {
      [nums[p2], nums[curr]] = [nums[curr], nums[p2]];
      p2--;
    } else {
      curr++;
    }
  }
}

//native built in sort function
//const sortColors = nums => nums.sort((a, b) => a - b);

//long form
//pivot or quick sort
//nested for loops
//recursive sort
//two pointers move left to right

const sortColors = nums => {
  if (nums.length < 2) return nums;
  let p1 = 0;
  let curr = 0;
  let p2 = nums.length - 1;

  let temp;
  while (curr <= p2) {
    if (nums[curr] === 0) {
      temp = nums[p1];
      nums[p1] = nums[curr];
      nums[curr] = temp;
      curr++;
      p1++;
    } else if (nums[curr] === 2) {
      temp = nums[p2];
      nums[p2] = nums[curr];
      nums[curr] = temp;
      p2--;
    } else {
      curr++;
    }
  }
}