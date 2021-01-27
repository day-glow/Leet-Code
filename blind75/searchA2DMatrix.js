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