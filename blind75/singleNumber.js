/*
https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/
//oneliner:
//TC-O(n)
//SC-O(1)
const singleNumber = nums => nums.reduce((acc, curr) => acc ^ curr);
//XOR the same 2 numbers returns 0 (cancels out), so XOR all nums, the remaining output is the missing number

//Bit Manipulation Approach:
//TC-O(n)
//SC-O(n / 2 + 1)
//logic: hash set * 2
//sum of nums
//XOR
const singleNumber = nums => {
  let missingNum = 0;
  let set = new Set(nums);
  for (let n of nums) {
    missingNum ^= n;
  }
  for (let n of set) {
    missingNum ^= n ^ n;
  }
  return missingNum;
};
//refactored:
const singleNumber = nums => {
  let missingNum = 0;
  let set = new Set(nums);
  for (let n of nums) missingNum ^= n;
  for (let n of set) missingNum ^= n ^ n;
  return missingNum;
};
//refactored:
const singleNumber = nums => {
  let missingNum = 0;
  let set = new Set();
  for (let n of nums) missingNum ^= set.has(n) ? n : n ^ n ^ n;
  return missingNum;
};
//refactored:
const singleNumber = nums => {
  let missingNum = 0;
  for (let n of nums) missingNum ^= n;
  return missingNum;
};
//oneliner:
const singleNumber = nums => nums.reduce((acc, curr) => acc ^ curr);

/**
 * @param {number[]} nums
 * @return {number}

 Hash table/math

 TC-O(n)
 SC-O(n)

const singleNumber = arr => {
  let numbers = {};
  arr.forEach(num => {
    if(numbers[num]) {
      numbers[num] += 1;
    } else {
      numbers[num] = 1;
    }
  })

  for (let n in numbers) {
    if (numbers[n] === 1) {
      return n;
    }
  }
}
*/
const singleNumber = arr => {
  let numbers = {};
  let individualNums = 0;
  let totalSum = 0;
  arr.forEach(num => {
    if(numbers[num]) {
      numbers[num] += 1;
      totalSum += num;
    } else {
      numbers[num] = 1;
      individualNums += num;
      totalSum += num;
    }
  })
  const singleValue = individualNums * 2 - totalSum;
  return singleValue;
};
