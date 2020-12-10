/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



Example 1:

Input: x = 123
Output: 321
*/

//TC-O(logx)
//SC-O(1)
const reverse = (x) => {
  let isPos = true;
  let result = 0;
  if (x < 0) {
    x *= -1;
    isPos = false;
  }
  while (x > 0) {
    let endNum = x % 10;
    x = Math.floor(x / 10);
    result = (result * 10) + endNum;
  }
  if (result > Math.pow(2, 31) - 1) return 0;
  return (isPos) ? result : -result;
};