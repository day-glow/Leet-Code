/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

//first attempt
//TC-O(n^2)
//SC-O(n)
//failed test case TLE
const productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1);
  let prev = 1;
  for (let i = 0; i < nums.length; i++) {
    [prev] = nums.splice(i, 1, prev);
    nums.forEach(each => result[i] *= each);
  }
  return result;
};

//OPTIMIZED approach
//TC-O(2n)
//SC-O(1) not counting result array
const productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1);
  let mult = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= mult;
    mult *= nums[i];
  }

  mult = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= mult;
    mult *= nums[j];
  }

  return result;
};

//optional change in first loop (leetcode solution)
const productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1);
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }
  let r = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= r;
    r *= nums[j];
  }
  return result;
};

//second pass:
const productExceptSelf = nums => {
  let product = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    product[i] = nums[i - 1] * product[i - 1];
  }
  let runningRightProd = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    product[i] = product[i] * runningRightProd;
    runningRightProd *= nums[i];
  }
  return product;
};

//one pass O(n), constant space - not counting output
//no division
//nums =   [ 1, 2, 3, 4]
//left =   [ 1, 1, 2, 6]
//right =  [24, 12, 4, 1]
//product= [24, 12, 8, 6]