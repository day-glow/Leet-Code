/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

//brute force
//TC-O(mn)
//SC-O(m+n)
const setZeroes = matrix => {
  let row = new Set();
  let col = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) {
        if (!row.has(i)) row.add(i);
        if (!col.has(j)) col.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (row.has(i) || col.has(j)) matrix[i][j] = 0;
    }
  }
};

//optimized in-place approach
//TC-O(mn)
//SC-O(1)
var setZeroes = function(matrix) {
  let isCol = false;
  //flag rows and columns with 0's
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) isCol = true;

    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  //iterate over columns then rows to swap 0's
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = matrix[0].length - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (isCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};

//OPTIMIZED O(1) SPACE saving approach refractored
var setZeroes = function(matrix) {
  let isCol = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) isCol = true;
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
    if (isCol) matrix[i][0] = 0;
  }
};