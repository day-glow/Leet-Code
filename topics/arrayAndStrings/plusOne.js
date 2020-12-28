/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
*/

/*
Recursion, carry over:
TC-
O(1)
O(n)
O(n)

SC-
O(1)
*/
const plusOne = digits => {

  const carryOver = (digits, elemFromEnd) => {
    if (digits[digits.length - elemFromEnd] === undefined) {
      digits.unshift(1);
    } else if (digits[digits.length - elemFromEnd] < 9) {
      digits[digits.length - elemFromEnd] = digits[digits.length - elemFromEnd] + 1;
    } else if (digits[digits.length - elemFromEnd] === 9) {
      digits[digits.length - elemFromEnd] = 0;
      carryOver(digits, elemFromEnd + 1);
    }
  };

  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  } else if (digits[digits.length - 1] === 9) {
    digits[digits.length - 1] = 0;
    carryOver(digits, 2);
  }
  return digits;
};

/*
.split .join approach
*/
const plusOne = digits => {

};