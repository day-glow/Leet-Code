/*
https://leetcode.com/problems/number-of-provinces/

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

//bfs with visited
var findCircleNum = function(isConnected) {
  const visited = new Array(isConnected.length).fill(false);
  let numProvs = 0;
  let queue = [];
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === false) {
      queue.unshift(i);
      while (queue.length) {
        const node = queue.pop();
        visited[node] = true;
        for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[node][j] === 1 && visited[j] === false) queue.unshift(j);
        }
      }
      numProvs++;
    }
  }
  return numProvs;
};
