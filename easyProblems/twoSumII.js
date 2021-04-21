/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
*/
//hashmap approach O(n)/O(n), uses space
//two pointers O(n)/O(1), take advantage of sorted array (logic)

//two pointers approach:
//O(n)
//O(1)
var twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (numbers[p1] + numbers[p2] !== target) {
    numbers[p1] + numbers[p2] > target ? p2-- : p1++;
  }
  return [p1 + 1, p2 + 1];
};
//hashMap approach:
//O(n)
//O(n)
var twoSum = function(numbers, target) {
  let seenNums = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (seenNums.has(target - numbers[i])) {
      return [seenNums.get(target - numbers[i]), i + 1];
    } else {
      seenNums.set(numbers[i], i + 1);
    }
  }
};