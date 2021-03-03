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
//TC-O(nlogk) if k < n
//worse-O(nlogn) if k === n
//SC-O(n+k)
const topKFrequent = (nums, k) => {
  let map = new Map();

  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  let unsortedNums = [...map.keys()];

  return unsortedNums.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

//QuickSelect Hoare's selection algo
//TC-O(n)->O(n^2)
/*approach similar to quick sort
steps:
1.hash map of frequencies
2.sort unique keys with random pivot, sort by freq
3.return the higher freq side of arr (if equal to k), otherwise sort that side
*/

//Learn Implementation of heap in javascript: https://leetcode.com/problems/top-k-frequent-elements/discuss/81685/JS-solution-using-min-heap
//HEAP if using Java
//TC-O(nlogk) if k < n
//worse-O(nlogn) if k === n
//SC-O(n+k)

class Solution {
  public int[] topKFrequent(int[] nums, int k) {
    if (k == nums.length) return nums;

    Map<Integer, Integer> freqMap = new HashMap();
    for (int n: nums) {
      freqMap.put(n, freqMap.getOrDefault(n, 0) + 1);
    }

    Queue<Integer> heap = new PriorityQueue<>((a, b) -> freqMap.get(a) - freqMap.get(b));

    for (int n: freqMap.keySet()) {
      heap.add(n);
      if(heap.size() > k) heap.poll();
    }

    int[] top = new int[k];
    for (int i = k -1; i >= 0; --i) {
      top[i] = heap.poll();
    }
    return top;
  }
}

//second pass:
var topKFrequent = function(nums, k) {
  let seen = new Map();
  let top = new Array();
  for (let num of nums) {
    !seen.has(num) ? seen.set(num, 1) : seen.set(num, seen.get(num) + 1);
  }
  let unsorted = Array.from(seen);
  unsorted.sort((a, b) => a[1] - b[1]);
  while (top.length < k) {
    let currMost = unsorted.pop();
    top.push(currMost[0]);
  }
  return top;
};

//second pass optimized
const topKFrequent = (nums, k) => {
  let seen = new Map();
  for (let num of nums) {
    !seen.has(num) ? seen.set(num, 1) : seen.set(num, seen.get(num) + 1);
  }
  return Array.from(seen.keys()).sort((a, b) => seen.get(b) - seen.get(a)).slice(0, k);
};