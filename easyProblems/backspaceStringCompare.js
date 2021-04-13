/*
https://leetcode.com/problems/backspace-string-compare/

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
*/

//brainstorm:
//pop off
//delete next letter (edge case backspaces in a row)
//compare remaining strings
var removeBackspacesInStr = function(str) {
  let s = str.split('');
  let backspaces = 0;
  let finalS = '';
  while (s.length) {
    let char = s.pop();
    char === '#' ? backspaces++ : finalS = char + finalS;
    while (s.length && backspaces > 0) {
      s.pop() === '#' ? backspaces++ : backspaces--;
    }
  }
  return finalS;
}

var backspaceCompare = function(S, T) {
  return removeBackspacesInStr(S) === removeBackspacesInStr(T);
};


