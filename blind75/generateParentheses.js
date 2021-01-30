/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

//rock, paper, scissors recursion problem
//possible outcomes
//stack - DFS
//
var generateParenthesis = function(n) {
  let allPairs = [];

  const makeCombo = (curr, open, close, num) => {

    if (curr.length === num * 2) {
      allPairs.push(curr);
      return;
    }
    if (open < num) makeCombo(curr+'(', open+1, close, num);
    if (close < open) makeCombo(curr+')', open, close+1, num);

  }

  makeCombo('', 0, 0, n);
  return allPairs;
};