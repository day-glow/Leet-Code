/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Ex1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Ex2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

//refactored
const spiralOrder = matrix => {
  if (matrix.length < 2) return matrix[0];
  let order = [];
  let rowsStart = 0;
  let colsStart = 0;
  let rowsEnd = matrix.length - 1;
  let colsEnd = matrix[0].length - 1;

  while (rowsStart <= rowsEnd && colsStart <= colsEnd) {
    for (let c = colsStart; c <= colsEnd; c++) order.push(matrix[rowsStart][c]);
    for (let r = rowsStart + 1; r <= rowsEnd; r++) order.push(matrix[r][colsEnd]);
    if (rowsStart < rowsEnd && colsStart < colsEnd) {
      for (let c = colsEnd - 1; c > colsStart; c--) order.push(matrix[rowsEnd][c]);
      for (let r = rowsEnd; r > rowsStart; r--) order.push(matrix[r][colsStart]);
    }
    rowsStart++;
    rowsEnd--;
    colsStart++;
    colsEnd--;
  }
  return order;
};

/*
Multiple loops for each directional flow
TC-O(n)
SC-O(1)
*/
const spiralOrder = matrix => {
  let result = [];
  if (!matrix.length) return result;

  //declare rows and column lengths
  let rowsStart = 0;
  let colsStart = 0;
  let rowsEnd = matrix.length - 1;
  let colsEnd = matrix[0].length - 1;


  while (rowsStart <= rowsEnd && colsStart <= colsEnd) {
    for (let c = colsStart; c <= colsEnd; c++) {
      result.push(matrix[rowsStart][c]);
    }
    for (let r = rowsStart + 1; r <= rowsEnd; r++) {
      result.push(matrix[r][colsEnd]);
    }
    if (rowsStart < rowsEnd && colsStart < colsEnd) {
      for (let c = colsEnd - 1; c > colsStart; c--) {
        result.push(matrix[rowsEnd][c]);
      }
      for (let r = rowsEnd; r > rowsStart; r--) {
        result.push(matrix[r][colsStart]);
      }
    }
    rowsStart++;
    rowsEnd--;
    colsStart++;
    colsEnd--;
  }

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

/*Attempted second pass with multiple pointers, but still had 2 failed test cases.

var spiralOrder = function(matrix) {
  if (matrix.length < 2) return matrix[0];

  let rMin = 0;
  let cMin = 0;
  let rMax = matrix.length - 1;
  let cMax = matrix[0].length - 1;
  let order = [];

  let i = 0;
  let j = 0;
  while (order.length < (matrix.length * matrix[0].length)) {
    for (j = j; j < cMax; j++) {
      if (i < rMin) i = rMin;
      if (j < cMin) j = cMin;
      order.push(matrix[i][j]);
      if (order.length === (matrix.length * matrix[0].length)) return order;
    }

    for (i = i; i < rMax; i++) {
      if (j > cMax) j = cMax;
      order.push(matrix[i][j]);
      if (order.length === (matrix.length * matrix[0].length)) return order;
    }

    for (j = j; j > cMin; j--) {
      order.push(matrix[i][j]);
      if (order.length === (matrix.length * matrix[0].length)) return order;
    }

    for (i = i; i > rMin; i--) {
      order.push(matrix[i][j]);
      if (order.length === (matrix.length * matrix[0].length)) return order;
    }
    rMin++;
    cMax--;
    cMin++;
    rMax--;
  }
  return order;
};

[
[2, 3, 4],
[5, 6, 7],
[8, 9, 10],
[11,12,13]
]
console.log(order)
console.log("i", i, "j", j, "cMax", cMax)
*/