/*
Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

//refactored and condensed (no helpers):
const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const check = (x, y, k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = '*'; // mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (check(i, j, k + 1)) return true;
      }
    }
    board[x][y] = word[k]; // reset
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (check(i, j, 0)) return true;
    }
  }

  return false;
};

//SECOND PASS (same approach)
var isInbounds = function(board, x, y) {
  if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) return true;
  return false;
}

var dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

var checkNeighbors = function(board, word, x, y, i) {
  if (board[x][y] !== word[i]) return false;
  if (i === word.length - 1) return true;

  board[x][y] = '*';
  for (let [dirX, dirY] of dirs) {
    let neiX = x + dirX;
    let neiY = y + dirY;
    if (isInbounds(board, neiX, neiY)) {
      if (checkNeighbors(board, word, neiX, neiY, i + 1)) return true;
    }
  }
  board[x][y] = word[i];
  return false;
};

var exist = function(board, word) {
  if (!board) return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (checkNeighbors(board, word, i, j, 0)) return true;
    }
  }
  return false;
};


//DFS & backtracking
//TC-O(n*3^l)
//SC-O(l)
const checkNeighbors = (board, word, x, y, k) => {
  if (board[x][y] !== word[k]) return false;
  if (k === word.length - 1) return true;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  board[x][y] = '*';
  for (let [dirX, dirY] of dirs) {
    let neighX = x + dirX;
    let neighY = y + dirY;
    if (neighX >= 0 && neighX < board.length && neighY >= 0 && neighY < board[0].length) {
       if (checkNeighbors(board, word, neighX, neighY, k + 1)) return true;
    }
  }
  board[x][y] = word[k];
  return false;
};

const exist = (board, word) => {
  if (!board.length) return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (checkNeighbors(board, word, i, j, 0)) return true;
    }
  }
  return false;
};



/*
failed attempt at BFS - did not work, thought it was a check neighbors problem, but fails at each level needing specific order
//BFS won't work
const checkNeighbors = (board, x, y) => {
  let validNeighbors = new Set();

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let [dirX, dirY] of dirs) {
    let neighX = x + dirX;
    let neighY = y + dirY;
    if (neighX >= 0 && neighX < board.length && neighY >= 0 && neighY < board[0].length) {
       validNeighbors.add([neighX, neighY]);
    }
  }
  return validNeighbors;
};

const exist = (board, word) => {
  let queue = [];
  let visited = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) queue.push([i, j]);
    }
  }


  while (queue.length) {
    let p1 = 0;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();
      if (board[x][y] === word[p1]) p1++;
      if (!visited.has([x, y])) {
        visited.add([x, y]);
        let neighbors = checkNeighbors(board, x, y);
        for (let [a, b] of neighbors) {
          if (!visited.has([a, b]) && board[a][b] === word[p1]) {
            if (p1 === word.length) return true;
            p1++;
          }
        }


      }
    }



  }
  return false;
};
*/