/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False
*/

//2pointers and native methods (failing quarter of test cases 77/103)
const checkInclusion = (s1, s2) => {
  let p1 = 0;
  let p2 = s1.length;
  s1 = s1.split('').sort((a, b) => a.localeCompare(b)).join('');

  while (p2 <= s2.length) {
    let sub = s2.substring(p1, p2).split('').sort((a, b) => a.localeCompare(b)).join('');
    console.log(sub);
    if (s1 === sub) return true;
    p1++;
    p2++;
  }
  return false;
};