/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

//Hash Set
//TC-O(n)
//SC-O(n)
const lengthOfLongestSubstring = s => {
  let longest = 0;
  let letters = new Set();

  let start = 0;
  let end = 0;
  while (start < s.length && end < s.length) {
    if (!letters.has(s[end])) {
      letters.add(s[end]);
      end++;
      longest = Math.max(longest, end - start);
    } else {
      letters.delete(s[start]);
      start++;
    }

  }
  return longest;
};