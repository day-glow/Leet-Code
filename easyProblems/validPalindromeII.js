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