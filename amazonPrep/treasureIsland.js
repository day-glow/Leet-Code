/*
https://leetcode.com/discuss/interview-question/347457/Amazon-or-OA-2019-or-Treasure-Island

You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start from the top-left corner of the map and can move one block up, down, left or right at a time. The treasure island is marked as X in a block of the matrix. X will not be at the top-left corner. Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O are safe to sail in. The top-left corner is always safe. Output the minimum number of steps to get to the treasure.

Example:
Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.
*/

/*
shortest route: bfs, iterative, use queue to check neighbors and push into queue
top left, move typical dirs, target = X
avoid D, cut branch
return min steps
*/

var dirs = [[0,1],[1,0],[0,-1],[-1,0]];

var findShortestRoute = function(treasure_map) {
  if (!treasure_map.length) return 0;
  let numSteps = 0;
  const seen = new Set();
  const queue = [[0, 0]];
  let len = queue.length;
  while (queue.length) {
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      seen.add(`(${x},${y})`);
      const curr = treasure_map[x][y];
      if (curr === 'X') return numSteps;

      //check neighbors & push to queue if not seen
      for (let [dx, dy] of dirs) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx >= 0 && nx < treasure_map.length && ny >= 0 && ny < treasure_map[0].length && !seen.has(`(${nx},${ny})`)) {
          if (treasure_map[nx][ny] === 'D') {
            seen.add(`(${nx},${ny})`);
          } else {
            queue.push([nx, ny]);
          }
        }
      }
    }
    console.log(queue)
    numSteps++;
    len = queue.length;
  }
  return -1;
}

const test = [['O', 'O', 'O', 'O'],['D', 'O', 'D', 'O'],['O', 'O', 'O', 'O'],['O', 'D', 'D', 'X']];
const actualResult = findShortestRoute(test);
const expectedResult = 6;
console.log('expected: ', expectedResult, 'actual: ', actualResult);