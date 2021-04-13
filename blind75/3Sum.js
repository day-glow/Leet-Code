/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

//hash Map()
//TC-O(n2)
//O(n)
const threeSum = nums => {
  if (nums.length < 3) return [];
  let triplets = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, triplets);
    }
  }
  return triplets;
};

//since the target is 0, reset the new target in 2Sum to the value of nums[i]
const twoSum = (nums, i, triplets) => {
  let seenNums = new Map();

  for (let j = i + 1; j < nums.length; j++) {
    let complement = -nums[i] - nums[j];
    if (seenNums.has(complement)) {
      triplets.push([nums[i], nums[j], complement]);
      while(j + 1 < nums.length && nums[j] === nums[j + 1]) {
        j++;
      }
    }
    seenNums.set(nums[j]);
  }
}

//NO SORT APPROACH:
const threeSum = nums => {
  let seenTriplets = new Set();
  let seenNums = new Map();
  let duplicates = new Set();
  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    if (duplicates.add(nums[i])) {
      for (let j = i + 1; j < nums.length; j++) {
        let complement = -nums[i] - nums[j];
        if (seenNums.has(complement) && seenNums.get(complement) === i) {
          let triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);

          if (!seenTriplets.has(String(triplet))) {
            triplets.push(triplet);
            seenTriplets.add(String(triplet));
          }
        }
        seenNums.set(nums[j], i);
      }
    }
  }

  return triplets;
};

//thirds:
var twoSum = function(nums, i, triplets) {
  let seen = new Set();
  for (let j = i + 1; j < nums.length; j++) {
    let complement = -nums[i] - nums[j];
    if (seen.has(complement)) {
      triplets.push([nums[i], nums[j], complement]);
      while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
    }
    seen.add(nums[j]);
  }
};
var threeSum = function(nums) {
  let triplets = [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums.length < 3) return triplets;
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, triplets);
    }
  }
  return triplets;
};