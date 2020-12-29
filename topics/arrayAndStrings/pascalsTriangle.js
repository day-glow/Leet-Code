/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

//not efficient Brute Force:
const generate = numRows => {

  if (numRows === 0) return [];
  let triangle = [];
  triangle.push([1]);
  if (numRows === 1) return triangle;

  let currRow = 1;

  while (triangle.length < numRows) {
    let row = [];
    row.push(1);
    if (currRow > 1) {
      for (let i = 0; i < triangle[currRow - 1].length - 1; i++) {
        row.push(triangle[currRow - 1][i] + triangle[currRow - 1][i + 1]);
      }
    }
    row.push(1);
    triangle.push(row);
    currRow++;
  }

  return triangle;
};

//Really smart approach with nested for loops
//OPTIMIZED:
//TC-O(rows2)
//SC-O(rows2)

const generate = numRows => {
  let pascal = [];
  for (let i = 0; i < numRows; i++) {
      pascal[i] = [];
      pascal[i][0] = 1;
      for (let j = 1; j < i; j++) {
          pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
      }
      pascal[i][i] = 1;
  }
  return pascal;
};