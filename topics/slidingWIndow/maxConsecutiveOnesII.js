/*
Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

//standard catepillar sliding window, keeping invalid bounds
const findMaxConsecutiveOnes = nums => {
  let longest = 0;
  let p1 = 0;
  let p2 = 0;
  let zeroCount = 0;

  while (p2 < nums.length) {
    let curr = nums[p2];
    if (curr === 0) zeroCount++;
    while (zeroCount > 1) {
      if (nums[p1] === 0) zeroCount--;
      p1++;
    }
    p2++;
    longest = Math.max(longest, p2 - p1);
  }
  return longest;
};