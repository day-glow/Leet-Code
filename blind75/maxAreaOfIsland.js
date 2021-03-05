/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
*/

//SECOND PASS:
  //iterate
  //helper function
    //queue
    //while loop, getNeighbors
      //dirs
      //isInbounds
    //return count
  //if higher, update max
var dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

const isInbounds = (grid, x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;

var checkNeighbors = function(grid, x, y) {
  let islandSize = 1;
  grid[x][y] = 0;
  let queue = [[x, y]];
  while (queue.length) {
    let curr = queue.shift();
    for (let [dx, dy] of dirs) {
      let nx = curr[0] + dx;
      let ny = curr[1] + dy;
      if (isInbounds(grid, nx, ny) && grid[nx][ny] === 1) {
        islandSize++;
        queue.push([nx, ny]);
        grid[nx][ny] = 0;
      }
    }
  }
  return islandSize;
};

var maxAreaOfIsland = function(grid) {
  let currentMax = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) currentMax = Math.max(currentMax, checkNeighbors(grid, i, j));
    }
  }
  return currentMax;
};
/**
//search for islands, if current island is greer than max, then replace
//alter seen land to water to mark (or make a copy)
*/

//BFS approach
//TC-O(n*m)
//SC-O(n*m)
const getNeighbors = (grid, x, y) => {
  let neighbors = [];

  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  for (let [neighborX, neighborY] of dirs) {
    if (neighborX + x >= 0 && neighborX + x < grid.length && neighborY + y >= 0 && neighborY + y < grid[0].length) {
      if (grid[neighborX + x][neighborY + y]) neighbors.push([neighborX + x, neighborY + y]);
    }
  }
  return neighbors;
};

const maxAreaOfIsland = grid => {
  let max = 0;

  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let currSize = 0;
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
      while (queue.length) {
        let [x, y] = queue.shift();
        if (grid[x][y] === 1) {
          currSize++;
          grid[x][y] = 0;

          let neighbors = getNeighbors(grid, x, y);
          if (neighbors.length) {
            for (let neighbor of neighbors) {
                queue.push(neighbor);
            }
          }
        }
      }
      max = currSize > max ? currSize : max;
    }
  }

  return max;
};
