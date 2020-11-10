/**
 * Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers
within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose
of this problem, assume that your function returns 0 when the reversed integer overflows.

Example 1:
Input: x = 123
Output: 321

123 -> 1 23 -> 21 3 -> 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
 *
 *
 *
 */

// Input: x = 123
// Output: 321

const reverseInteger = (number) => {
  let currentNum = number;
  let result = 0;

  while (currentNum >= 1) {
    result *= 10;
    result += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }

  return result;
}

console.log(reverseInteger(123));