/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


brut force: iterate over string and find left then match right, if not a match return
 TC-O(n)

 opt: hash map to store matches?  SC-O(1)

const stringA = "()[]{}";
const stringB = "([)]";

const outputA = isValid(stringA);
console.log(assert(outputA === true));

const outputB = isValid(stringB);
console.log(assert(outputB === false));
*/


