/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 g- return index of two nums that sum total to target

 i- array (numbers) - unsorted
 o- array (2 numbers) of index location of input arr
 se- n/a
 c- O(n2) exponential
    input arr length?, nums[i] limit?, target limit?
    only one answer exists.
 ec- input arr length = 0, neg nums,

*/

/*
NAIVE APPROACH:
TC - O(n2) - exponential (2 nested for loops)
SC - ??? - array

const twoSum = (nums, target) => {
  // declare results variable
  const results = [];

  // iterate over nums
  for (let i = 0; i < nums.length; i++) {
    // declare first num variable
    let first = nums[i];
    // use recursion to check sum of second value, to target
    for (let j = i + 1; j < nums.length; j++) {
      if (first + nums[j] === target) {
        // once found sum match, push indices to results
        results.push(i, j);
      }
    }
  }
  // return results
  return results;
};
*/

/*
OPTIMIZED APPROACH:
TC - O(n) - Hash Table, key look up
SC -

Result -
Runtime: 112 ms, faster than 52.96% of JavaScript online submissions for Two Sum.
Memory Usage: 48.1 MB, less than 7.70% of JavaScript online submissions for Two Sum.
*/

const twoSum = (nums, target) => {
  // declare hash table
  const map = {};

  // iterate over array
  for (let i = 0; i < nums.length; i++) {
    // declare variable for "second" term
    const secondTerm = target - nums[i];
    // check if second term exists in map hash table
    if (secondTerm in map) {
      // if true, return the index of second term and current i value
      return [map[secondTerm], i];
    }
    // add key value to map
    map[nums[i]] = i;
  }

  // if no match
  return [];
}

