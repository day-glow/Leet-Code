/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

 g- rotate right, last position and add to the front of the array. change original arr.

 TC- O(1)
 SC- O(1)

 const rotate = (nums, k) => {
  while (k > 0) {
    let rotateElem = nums.pop();
    nums.unshift(rotateElem);
    k--;
  }
};
 */


//OPTIMIZED:
const rotate = (nums, k) => {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
 };

//optional long slice approach, if expecting a return array
const rotate = (nums, k) => {
  let endToFront = nums.slice(nums.length - k);
  let front = nums.slice(0, nums.length - k);
  nums = endToFront.concat(front);
};

const rotate = (nums, k) => {
  return nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
};