/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

Example 2:
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

Note:
nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].
*/

/*
Sort native Method
TC-
O(1) - if already sorted
O(n) - sort method
O(n)

SC-
O(1)
*/
const dominantIndex = nums => {
  if (!nums.length) return -1;
  if (nums.length === 1) return 0;
  const isSorted = nums.slice(0).sort((a, b) => a - b);
  const largest = isSorted[isSorted.length - 1];
  const secondLargest = isSorted[isSorted.length - 2];
  if (largest >= secondLargest * 2) {
    return nums.indexOf(largest);
  }

  return -1;
};

/*
//Linear Scan Approach
TC-
O(n)

SC-
O(1)
*/
const dominantIndex = nums => {
  let largestNum = nums[0];
  let secondLargestNum = 0;
  let largestIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > largestNum) {
      largestIdx = i;
      secondLargestNum = largestNum;
      largestNum = curr;
    } else if (curr > secondLargestNum) {
      secondLargestNum = curr;
    }
  }
  return (largestNum >= secondLargestNum * 2) ? largestIdx : -1;
};