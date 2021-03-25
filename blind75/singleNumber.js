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