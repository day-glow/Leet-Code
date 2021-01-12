/*
You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example 1:
Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

Example 2:
Input: rooms = [[-1]]
Output: [[-1]]

Example 3:
Input: rooms = [[2147483647]]
Output: [[2147483647]]

Example 4:
Input: rooms = [[0]]
Output: [[0]]
*/

//find shortest path per square
//BFS
//adj matrix, fill in where INF exists (fill distance)

/*
rooms = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
output = [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

//iterate over input matrix,
//if INF exists, add to queue
  //search for nearest gate (BFS, checking neighbors closest to further) & count
  //swap count for elem
  //move to next queue item
//return matrix
*/

//find shortest path per square
//BFS
//adj matrix, fill in where INF exists (fill distance)

/*
rooms = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
output = [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

//iterate over input matrix,
//if INF exists, add to queue
  //search for nearest gate (BFS, checking neighbors closest to further) & count
  //swap count for elem
  //move to next queue item
//return matrix

BFS:
while (queue is not empty) {
    step = step + 1;
    // iterate the nodes which are already in the queue
    int size = queue.size();
    for (int i = 0; i < size; ++i) {
        Node cur = the first node in queue;
        return step if cur is target;
        for (Node next : the neighbors of cur) {
            add next to queue;
        }
        remove the first node from queue;
    }
}
*/

//OMTIMIZED BFS Approach (add gates to queue first)
//TC-O(m*n)
//SC-worst O(m*n)
const GATE = 0;
const WALL = -1;
const EMPTY_ROOM = 2147483647;
const NEIGHBORS = [
  [0,1],
  [0,-1],
  [-1,0],
  [1,0],
];

const isInbound = (matrix, i, j) => {
  return i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length;
};

const wallsAndGates = rooms => {
  if (!rooms || rooms.length === 0) return;

  let queue = [];

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++){
      if (rooms[row][col] === GATE) queue.push([row, col]);
    }
  }

  while (queue.length) {
    const [gateRow, gateCol] = queue.shift();
    for (let [neighborX, neighborY] of NEIGHBORS) {
      let neighborRow = gateRow + neighborX;
      let neighborCol = gateCol + neighborY;
      if (!isInbound(rooms, neighborRow, neighborCol) || rooms[neighborRow][neighborCol] !== EMPTY_ROOM) {
        continue;
      }
      rooms[neighborRow][neighborCol] = rooms[gateRow][gateCol] + 1;
      queue.push([neighborRow, neighborCol]);
    }
  }
  //return rooms;
};

//Recursive approach, DFS (starting with gates)
const GATE = 0;
const WALL = -1;
const EMPTY_ROOM = 2147483647;

const wallsAndGates = rooms => {

  const checkDist = (row, col, count) => {
    if (row < 0 || col < 0 || row >= rooms.length || col >= rooms[0].length) return;

    if (rooms[row][col] === WALL) return;
    if (rooms[row][col] === GATE && count !== 0) return;
    if (rooms[row][col] < count) return;
    if (rooms[row][col] > count) rooms[row][col] = count;

    count++;

    checkDist(row - 1, col, count);
    checkDist(row + 1, col, count);
    checkDist(row, col - 1, count);
    checkDist(row, col + 1, count);

  };

  if (!rooms.length || !rooms) return;
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++){
      if (rooms[row][col] === GATE) {
        checkDist(row, col, 0);
      }
    }
  }

};


