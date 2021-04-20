/*
https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false
*/
//revert half of number, O(log base10 (n))/O(1)
//string convert & two pointers O(n)/O(n)

//math solution/reversal & compare:
var isPalindrome = function(x) {
  if (x < 0) return false;
  let rev = 0;
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev * 10 + i % 10;
  return rev === x;
};

//convert to string & 2pointers:
var isPalindrome = function(x) {
  if (x < 0) return false;
  let s = "" + x;
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 <= p2) if (s[p1++] !== s[p2--]) return false;
  return true;
};