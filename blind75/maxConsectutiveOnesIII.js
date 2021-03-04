/*
Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s.

Example 1:
Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation:
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

Example 2:
Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation:
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
*/

//never shrinking sliding window approach
//TC-O(n)
//SC-O(1)
const longestOnes = (A, K) => {
  let p1 = 0;
  let p2 = 0;

  while (p2 < A.length) {
    if (A[p2] === 0) K--;
    if (K < 0) {
      if (A[p1] === 0) K++;
      p1++;
    }
    p2++;
  }

  return p2 - p1;
};

//refactored slightly
const longestOnes = (A, K) => {
  let p1 = 0;
  let p2 = 0;

  while (p2 < A.length) {
    if (!A[p2]) K--;
    if (K < 0) {
      if (!A[p1]) K++;
      p1++;
    }
    p2++;
  }

  return p2 - p1;
};

//SECOND PASS:
var longestOnes = function(A, K) {
  let p1 = 0;
  let p2 = 0;

  while (p2 < A.length) {
    if (A[p2] === 0) {
      K--;
    }
    if (K < 0) {
      if (A[p1] === 0) K++;
      p1++;
    }
    p2++;
  }
  return p2 - p1;
};