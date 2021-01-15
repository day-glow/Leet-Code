/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

//start with template then add what is missing
//visiting all elems, DFS
//BFS, checking neighbors

  //iterate over grid elems
  //check all neighbors, if all neighbors are 0's, increase island count. I
  //f they are ones, continue and push neighbors into queue to be checked

//how do we mark elems as seen? if connected island, not all neighbors will be 0's
//visited coordinates or flag on elem as visited to not over count islands
//continue to next unseen land 1 and continue checking.

const checkDir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isInbounds = (grid, x, y) => {
  return (x >= 0 && x <= grid.length && y >= 0 && y <= grid[0].length);
};

const numIslands = grid => {
  if (!grid || !grid.length) return 0;
  let islands = 0;
  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {

        islands++;
        grid[i][j] = "0";
        queue.push([i, j]);
        while (queue.length) {
          let [currX, currY] = queue.shift();

          for (let [neighborX, neighborY] of checkDir) {
            let neighborRow = currX + neighborX;
            let neighborCol = currY + neighborY;
            if (neighborRow > grid.length - 1) {
              neighborRow--;
            }
            if (!isInbounds(grid, neighborRow, neighborCol)) continue;
            if (grid[neighborRow][neighborCol] === "1") {
              queue.push([neighborRow, neighborCol]);
              grid[neighborRow][neighborCol] = "0";
            }
          }
        }
      }
    }
  }

  return islands;
};

