/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Example 3:
Input: matrix = [[1]]
Output: [[1]]

Example 4:
Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
*/

/*
matix1: [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
output: [
  [7,4,1],
  [8,5,2],
  [9,6,3],
];

*/

//Approach 3 : Rotate four rectangles in one single loop
//TC-O(n^2) - nested loops
//SC-O(1)
const rotate = matrix => {
  let n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

//second pass (same approach)
/*
[ c0 c1  c2
r0[1, 2, 3],
r1[4, 5, 6],
r2[7, 8, 9]
]

4 corners: max and min of each row&col
r,c
0,0
0,2
2,2
2,0

next set:
r,c
0,1
1,2
2,1
1,0

etc
 */
var rotate = function(matrix) {
  //rotate 4 positions at a time
  let n = matrix.length - 1;
  //iterate over matrix w/ rows and cols, limited to center of each
  for (let r = 0; r < Math.floor((matrix.length + 1) / 2); r++) {
    for (let c = 0; c < Math.floor(matrix.length / 2); c++) {
      //find sets of 4 corners, hold temp value as rotate in place
      let temp = matrix[n - c][r];
      matrix[n - c][r] = matrix[n - r][n - c];
      matrix[n - r][n - c] = matrix[c][n - r];
      matrix[c][n - r] = matrix[r][c];
      matrix[r][c] = temp;
    }
  }
};