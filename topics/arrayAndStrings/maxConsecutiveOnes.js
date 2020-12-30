/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
  The maximum number of consecutive 1s is 3.
*/

/*
TC- O(n)
SC- O(1)
*/
const findMaxConsecutiveOnes = nums => {
  let maxCount = 0;
  let currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
    if (currCount + nums.length - 1 < maxCount && !nums[i]) break;
  }
  return Math.max(maxCount, currCount);
};