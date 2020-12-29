/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Ex1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Ex2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/*
Multiple loops for each col or row, then increase only one m or n at end of each
*/
const spiralOrder = matrix => {
  let result = [];
  //declare rows and column lengths
  let rows = matrix.length;
  let cols = matrix[0].length;

  let m = 0;
  let n = 0;

  return result;
};

/*
attempted brute force: FAIL (only works for 3x3 matrix)
const spiralOrder = matrix => {
  let result = [];
  //declare rows and column lengths
  let rows = matrix.length;
  let cols = matrix[0].length;

  let m = 0;
  let n = 0;

  let fwdFlag = true;

  while (result.length < rows * cols) {
    if (m < cols && n < rows) {
      result.push(matrix[m][n]);
    }

    if (n < cols && fwdFlag) {
      n++;
      if (n === cols) {
        n--;
        m++;
      }
    }

    if (!fwdFlag) {
      n--;
      if (n < 0) {
        n++;
        m--;
        fwdFlag = true;
      }
    }
    if (m === rows) {
      m--;
      n--;
      fwdFlag = false;
    }
    if (m < 0) {
      m++;
      n--;
      fwdFlag = true;
    }
  }
  return result;
};
*/