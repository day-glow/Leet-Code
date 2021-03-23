/*
https://leetcode.com/problems/pour-water/

We are given an elevation map, heights[i] representing the height of the terrain at that index. The width at each index is 1. After V units of water fall at index K, how much water is at each index?

Water first drops at index K and rests on top of the highest terrain or water at that index. Then, it flows according to the following rules:

If the droplet would eventually fall by moving left, then move left.
Otherwise, if the droplet would eventually fall by moving right, then move right.
Otherwise, rise at it's current position.
Here, "eventually fall" means that the droplet will eventually be at a lower level if it moves in that direction. Also, "level" means the height of the terrain plus any water in that column.
We can assume there's infinitely high terrain on the two sides out of bounds of the array. Also, there could not be partial water being spread out evenly on more than 1 grid block - each unit of water has to be in exactly one block.

Example 1:
Input: heights = [2,1,1,2,1,2,2], V = 4, K = 3
Output: [2,2,2,3,2,2,2]
*/

//brainstorm:
//recursion, dfs
//iterative, bfs, while
//2 pointers
  //helper functions
    //check left
    //check right
    //add to k index
//left, -1
//right, +1

//first pass passing only 20/37 test cases
var pourWater = function(heights, V, K) {
  let waterPosition;
  while (V > 0) {
    waterPosition = getLowPoint(heights, K, -1);
    if (waterPosition === K) waterPosition = getLowPoint(heights, K, +1);
    heights[waterPosition]++;
    V--;
  }
  return heights;
};

var getLowPoint = function(heights, start, increment) {
  let p = start + increment;
  //if (heights[p] > heights[start]) return start;
  while (heights[p + increment] && heights[p + increment] < heights[p]) p += increment;
  while (heights[p + increment] && heights[p] === heights[start]) p += increment;

  return heights[p] >= heights[start] ? start : p;
};