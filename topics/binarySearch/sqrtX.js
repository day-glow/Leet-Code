/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

//using native Math.sqrt
const mySqrt = num => {
  return Math.floor(Math.sqrt(num));
};

//going manual math approach
//TC-
const mySqrt = num => {
  if (num === 1 || !num) return num;
  if (num < 0) return NaN;

  let p;
  let left = 2;
  let right = Math.floor(num / 2);
  while (left <= right) {
    p = left + Math.floor((right - left) / 2);
    if (p * p < num) {
      left = p + 1;
    } else if (p * p > num) {
      right = p - 1;
    } else {
      return p;
    }
  }
  return right;
};
