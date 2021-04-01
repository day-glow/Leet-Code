/*
https://leetcode.com/problems/is-subsequence/

Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

//optimization - boolean
//DP iterative, like 2 pointers (just point at different)
//2 pointers - O(n) target string, O(1)
//check lengths
var isSubsequence = function(s, t) {
  if (s.length > t.length || s.length && !t.length) return false;
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 <= t.length) {
    if (s[p1] === t[p2]) p1++;
    p2++;
  }
  return p1 === s.length;
};