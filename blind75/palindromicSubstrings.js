/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".


Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

//options:
//recursion, dfs
  //branches, tree
//iteration, bfs
//brut force, nested loops

//using loop and helper, singles and center to out method
//TC-O(n^2)
//SC-O(1)
const countSubstrings = s => {
  let count = 0;

  const isPalindrome = (low, high) => {
    while (low >= 0 && high <= s.length && s[low--] === s[high++]) {
      count++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return count;
};

//RECURSION:
const isPalindrome = s => {
  if (s === '') return false;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const countSubstrings = s => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    //do something per char
    const traverse = (temp, idx) => {
      //helper for each char
      if (isPalindrome(temp)) {
        count++;
      }
      if (idx >= s.length) { return; }
      temp += s[idx];
      traverse(temp, idx + 1);
    };

    traverse('', i);

  }


  return count;
};