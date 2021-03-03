/*
Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
*/

//second pass:
var searchMatrix = function(matrix, target) {
  let h = matrix.length - 1;
  let w = matrix[0].length - 1;
  let r = h;
  let c = 0;

  while (r >= 0 && c <= w) {
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] < target) {
      c++;
    } else if (matrix[r][c] > target) {
      r--;
    }
  }
  return false;
};

//OPTIMIZED SEARCH SPACE REDUCTION (bottom left) APPROACH:
//TC-O(n+m)
//SC-O(1)
const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix.length) return false;

  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] > target) {
      row--;
    } else if (matrix[row][col] < target) {
      col++;
    } else {
      return true;
    }
  }
  return false;
};


//BinarySearch approach:
//TC-O(logn!)
//SC-O(1)
const binarySearch = (matrix, target, start, vertical) => {
  let l = matrix.length;
  let h = matrix[0].length;

  let low = start;
  let high = vertical ? matrix[0].length - 1 : matrix.length - 1;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if (vertical) {
      let curr = matrix[start][mid];
      if (curr < target) {
        //go left & up
        low = mid + 1;
      } else if (curr > target) {
        //or go right & down
        high = mid - 1;
      } else if (curr === target) {
        return true;
      }
    } else {
      let curr = matrix[mid][start];
      if (curr < target) {
        //go left & up
        low = mid + 1;
      } else if (curr > target) {
        //or go right & down
        high = mid - 1;
      } else if (curr === target) {
        return true;
      }
    }
  }
  return false;
};

const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix.length) return false;

  let shorterSide = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < shorterSide; i++) {
    verticalFound = binarySearch(matrix, target, i, true);
    horizontalFound = binarySearch(matrix, target, i, false);
    if (verticalFound || horizontalFound) return true;
  }
  return false;
};

//refactored:
const binarySearch = (matrix, target, start, vertical) => {
  let low = start;
  let high = vertical ? matrix[0].length - 1 : matrix.length - 1;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if (vertical) {
      let curr = matrix[start][mid];
      if (curr < target) {
        low = mid + 1;
      } else if (curr > target) {
        high = mid - 1;
      } else {
        return true;
      }
    } else {
      let curr = matrix[mid][start];
      if (curr < target) {
        low = mid + 1;
      } else if (curr > target) {
        high = mid - 1;
      } else {
        return true;
      }
    }
  }
  return false;
};

const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix.length) return false;

  let shorterSide = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < shorterSide; i++) {
    if (binarySearch(matrix, target, i, true) || binarySearch(matrix, target, i, false)) return true;
  }
  return false;
};
/*
FAILED attempt at binary search using 5 pointers
 double binary search func
 5-pointer?
 start in middle then move half of left/righ up/down

const searchMatrix = (matrix, target) => {
  let l = matrix.length;
  let h = matrix[0].length;

  let top = 0;
  let bottom = l - 1;

  let left = 0;
  let right = h - 1;

  let x = Math.floor(l / 2);
  let y = Math.floor(h / 2);

  while (x >= 0 && x <= l && y >= 0 && y <= h && top >= 0 && top <= h && bottom >= 0 && bottom <= h && left >= 0 && left <= l && right >= 0 && right <= l) {
    //check current square && mark as seen '*'
    let curr = matrix[x][y];
    if (curr === target) return true;
    if (curr === '*') return false;

    matrix[x][y] = '*';
    if (curr > target) {
      //go left & up
      right = x;
      x = Math.floor((right - left) / 2);
      bottom = y;
      y = Math.floor((bottom - top) / 2);
    } else {
      //or go right & down
      left = x;
      x = Math.floor(left + (right - left) / 2);
      top = y;
      y = Math.floor(top + (bottom - top) / 2);
    }
  }
  return false;
};
*/