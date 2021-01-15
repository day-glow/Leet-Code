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