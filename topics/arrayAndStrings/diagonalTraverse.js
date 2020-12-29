/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below:

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
coords: [0,0],[0,1],[1,0],[2,0],[1,1],[0,3],[1,3],[2,1],[3,3]

Output:  [1,2,4,7,5,3,6,8,9]
*/

/*
nested loops, iterate over every num and add to result arr
TC- O(n)
SC- O(n)
*/
const findDiagonalOrder = matrix => {
  let diagonalNums = [];
  if (matrix.length === 0 || matrix[0].length === 0) return diagonalNums;
  let rows = matrix.length;
  let columns = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!diagonalNums[i + j]) {
        diagonalNums[i + j] = [];
      }
      diagonalNums[i + j].push(matrix[i][j]);
    }
  }
  for (let i = 0; i < (rows + columns - 1); i += 2) {
    if (i % 2 === 0) diagonalNums[i] = diagonalNums[i].reverse();
  }
  return diagonalNums.flat();
};