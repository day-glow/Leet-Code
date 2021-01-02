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
//TC-O(logn)
//SC-O(1)
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

//java Newton's method
class Solution {
  public int mySqrt(int x) {
    if (x < 2) return x;

    double x0 = x;
    double x1 = (x0 + x / x0) / 2.0;
    while (Math.abs(x0 - x1) >= 1) {
      x0 = x1;
      x1 = (x0 + x / x0) / 2.0;
    }

    return (int)x1;
  }
}

//Newton's Method, same TC/SC but fewer iterations, (don't really understand)
const mySqrt = num => {
  if (num < 2) return num;

  let x = num;
  let x1 = Math.floor((x + num / x) / 2);
  while (Math.abs(x - x1) >= 1) {
    x = x1;
    x1 = Math.floor((x + num / x) / 2);
  }
  return x1;
};
