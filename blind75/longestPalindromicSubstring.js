/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"
*/
//brute force, nest loops O(n^3)/O(1), pick all possible start & end points, then check each substring
//Dynamic Programming O(n^2)/O(n^2), build a table of what we know (add two letters, check prev)
//Expand Around the Center O(n^2)/O(1), helper function isPalindrome & work middle out O(n^2)

//OPTIMIZED Expand Around Center Approach:
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

var expandAroundCenter = function(s, p1, p2) {
  while (p1 >= 0 && p2 < s.length && s[p1] === s[p2]) {
    p1--;
    p2++;
  }
  return p2 - p1 - 1;
};

//REFRACTORED:
const longestPalindrome = s => {
  if (s.length <= 1) return s;
  let longestSubstring = '';

  const isPalindrome = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      if (right - left >= longestSubstring.length) longestSubstring = s.substring(left, right + 1);
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return longestSubstring;
};


//TC-O(n^2)
//SC-O(1)
const longestPalindrome = s => {
  let longestSubstring = '';

  if (s.length === 0 || s.length === 1) return s;

  const isPalindrome = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      if (right - left >= longestSubstring.length) {
        longestSubstring = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return longestSubstring;
};

//thirds:
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let longest = '';

  var isPalindrome = function(p1, p2) {
    while (s[p1] === s[p2] && p1 >= 0 && p2 <= s.length) {
      if (p2 - p1 >= longest.length) longest = s.substring(p1, p2 + 1);
      p2++;
      p1--;
    };
  }

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }
  return longest;
};