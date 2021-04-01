/*
https://leetcode.com/problems/pascals-triangle-ii/

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
*/

//DP iterate backwards approach:
//TC-O(r*r)
//SC-O(r)
var getRow = function(rowIndex) {
  let row = new Array(1).fill(1);
  if (rowIndex === 0) return row;
  while (rowIndex > 0) {
    row.push(1);
    for (let i = row.length - 2; i > 0; i--) {
      row[i] = row[i] + row[i - 1];
    }
    rowIndex--;
  }
  return row;
};

//brainstorm:
//already calculated rows prior, memoization look back
//length of row is rowIndex + 1
//first and last always starts with 1's
//DP iteratively, nested loops (bottom up)
//DP, build and expand top down

//Recusion & memoization:
//change inner with one level? nested loop or while loop
//[1,1,1,1,1]
var getRowDP = function(targetRowIdx, currRowIdx, row) {
  if (targetRowIdx === currRowIdx) return row;
  let nextRow = row.slice(0);
  for (let i = 1; i < row.length; i++) nextRow[i] = row[i] + row[i - 1];
  nextRow.push(1);
  return getRowDP(targetRowIdx, currRowIdx + 1, nextRow);
};

var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1,1];
  let row2 = [1,2,1];
  return getRowDP(rowIndex, 2, row2);
};