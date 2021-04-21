/*
https://leetcode.com/problems/majority-element-ii/

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]
*/

//Optimized solution (Boyer-Moore Voting Algorithm, find majority candidate):
//O(n)
//O(1)
var majorityElement = function(nums) {
    const n = nums.length
    if (n < 1) return []
    if (n < 2) return nums

    let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1

    for (let i = 0; i < n; i++) {
        if (nums[i] == candidate1) count1++
        else if (nums[i] == candidate2) count2++
        else if (count1 == 0) {
            candidate1 = nums[i]
            count1 = 1
        }
        else if (count2 == 0) {
            candidate2 = nums[i]
            count2 = 1
        } else {
            count1--
            count2--
        }
    }

    let x = []
    if (nums.count(candidate1) > n / 3) x.push(candidate1)
    if (nums.count(candidate2) > n / 3) x.push(candidate2)

    return x
};
Array.prototype.count = function(num) {
    let count = 0
    for (let i = 0; i < this.length; i++)
        if (this[i] == num) count++

    return count
}

//hash map approach:
//O(n)
//O(n)
var majorityElement = function(nums) {
    let countNums = new Map();
    let result = new Array();
    for (let num of nums) {
      countNums.has(num) ? countNums.set(num, countNums.get(num) + 1) : countNums.set(num, 1);
    }
    for (let [num, count] of countNums) {
      if (count > nums.length / 3) result.push(num);
    }
    return result;
  };
