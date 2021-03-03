/*
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note: The order of returned grid coordinates does not matter.
Both m and n are less than 150.

Example:
Given the following 5x5 matrix:
  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:
[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
*/

//brainstorm:
//brute force, check each start point at every square (nested for loop)
//brute force is too slow

//use space for time, create matrix with booleans of each square reaching edge
//helper function (check square, check neighbors, recursively/iteratively change position)
//check each inbounds neighbor to reach both edges
//if possible to reach both sides, add to results,

var dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

var getUphillNeighbors = function(matrix, ocean, x, y) {
  let neighbors = [];
  for (let [dx, dy] of dirs) {
    let nX = x + dx;
    let nY = y + dy;
    if (nX >= 0 && nX < matrix.length && nY >= 0 && nY < matrix[0].length && matrix[nX][nY] >= matrix[x][y] && !ocean[nX][nY]) {
        neighbors.push([nX, nY]);
    }
  }
  return neighbors;
};

var getFlow = function(matrix, ocean, row = 0, col = 0) {
  let queue = [];
  for (let i = 0; i < matrix[0].length; i++) {
    ocean[row][i] = true;
    queue.push([row, i]);
  }
  for (let i = 0; i < matrix.length; i++) {
    ocean[i][col] = true;
    queue.push([i, col]);
  }
  while (queue.length) {
    let [x, y] = queue.shift();
    let neighbors = getUphillNeighbors(matrix, ocean, x, y);
    for (let [nX, nY] of neighbors) {
      if (!ocean[nX][nY]) queue.push([nX, nY]);
      ocean[nX][nY] = true;
    }
  }
  return ocean;
};

var pacificAtlantic = function(matrix) {
  if (!matrix.length) return [];
  let canReachPacific = [...new Array(matrix.length)].map(() =>
			new Array(matrix[0].length).fill(false));
  let canReachAtlantic = [...new Array(matrix.length)].map(() =>
			new Array(matrix[0].length).fill(false));

  canReachPacific = getFlow(matrix, canReachPacific);
  canReachAtlantic = getFlow(matrix, canReachAtlantic, matrix.length - 1, matrix[0].length - 1);
  let verifiedStartPoints = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (canReachPacific[i][j] && canReachAtlantic[i][j]) verifiedStartPoints.push([i, j]);
    }
  }
  return verifiedStartPoints;
};
