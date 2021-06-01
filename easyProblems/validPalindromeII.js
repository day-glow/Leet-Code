/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
*/

//greedy approach (half for loop & valid palindrom helper)
//TC-O(n)
//SC-O(1)
const isPalindrome = (s, start, end) => {
  for (let i = start; i < start + (end - start) / 2; i++) {
    if (s[i] !== s[end - i + start]) return false;
  }
  return true;
}

const validPalindrome = s => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] === s[s.length - 1 - i]) {
      continue;
    } else {
      let j = s.length - 1 - i;
      return (isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1));
    }
  }
  return true;
};

/*
1. flag & substring recursion, time O(n) space O(n)
2. helper func & start & end, time O(n) space O(1)

var validPalindrome = function(s, hasRemovedOne = false) {
  if (!s || !s.length) return true;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      if (hasRemovedOne) {
        return false;
      } else {
        return validPalindrome(s.substring(left, right), true) || validPalindrome(s.substring(left + 1, right + 1), true);
      }
    }
    left++;
    right--;
  }
  return true;
};
*/