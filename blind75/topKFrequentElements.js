/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

//first attempt
const topKFrequent = (nums, k) => {
  let map = new Map();
  let mostFreq = [];
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const sortedHighestFreq = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for (let num of sortedHighestFreq.keys()) {
    if (mostFreq.length < k) {
      mostFreq.push(num);
    }
  }

  return mostFreq;
};

//OPTIMIZED retrival and sort
const topKFrequent = (nums, k) => {
  let map = new Map();

  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  let unsortedNums = [...map.keys()];

  return unsortedNums.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};