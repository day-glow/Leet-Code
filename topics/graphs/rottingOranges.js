/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/

/**
 * @param {number[][]} grid
 * @return {number}

 clarifying Q's:
 1) will there be rotten oranges (otherwise -1)
 2) 4-directionally adj (up, down, left right) otherwise -1?
 3) can we alter the input grid or should we use space to make a copy?

//bfs - check neighbors, shortest path for minutes.
//check for at least 1 rotten and 1 fresh
//iterate over grid and add rotten coord to queue

TC-O(n)
SC-O(1)
*/

//helper func get inbounds neighbors (directionally adjacent oranges)
const getNeighbors = (grid, x, y) => {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let neighbors = [];

  for (let [dirX, dirY] of dirs) {
    let neighborX = dirX + x;
    let neighborY = dirY + y;

    if (neighborX >= 0 && neighborX < grid.length && neighborY >= 0 && neighborY < grid[0].length) {
      if (grid[neighborX][neighborY] === 1) neighbors.push([neighborX, neighborY]);
    }
  }

  return neighbors;
};

const orangesRotting = grid => {
  let minutes = 0;
  let queue = [];
  let fresh = 0;
  //let seen = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        fresh += 1;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  if (fresh && !queue.length) return -1;
  if (!fresh && !queue.length || !fresh && queue.length) return 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [rottenX, rottenY] = queue.shift();
      if (grid[rottenX][rottenY] === 1) {
        grid[rottenX][rottenY] = 2;
        fresh -= 1;
      }

      if (grid[rottenX][rottenY] === 2) {
        let neighbors = getNeighbors(grid, rottenX, rottenY);
        for (let neighbor of neighbors) {
            queue.push(neighbor);
        }
      }


    }
    if (!fresh) return minutes;
    minutes += 1;
  }
  return fresh === 0 ? minutes : -1;
};