/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

//TC-O(n^2)
//SC-O(1)
//nested loops:
const longestCommonPrefix = strs => {
  //iterate over each letter in each word

  for (let p = 0; p < strs[0].length; p++) {
    for (let i = 1; i < strs.length; i++) {
      let letter = strs[0][p];
      if (strs[i][p] !== letter) {
        return p === 0 ? '' : strs[0].slice(0, p);
      }
    }
  }

  return strs[0];
};