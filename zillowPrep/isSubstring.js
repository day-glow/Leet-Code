/*
https://leetcode.com/playground/WbWTbrje

Write a method to determine if string2 is a substring of string1.
*/

/*
1. brute force, check every starting letter, time O(n^2) space O(1)
2. find matching first char, check substring, time O(n) space O(lenStr2)
3. includes/contains, time O(n) space O(1)

var isSubstring = function(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[0]) {
      if (string1.substring(i, i + string2.length) === string2) return true;
    }
  }
  return false;
};

const isSubstring = (s1, s2) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[0] && s1.substring(i, i + s2.length) === s2) return true;
  }
  return false;
};
*/