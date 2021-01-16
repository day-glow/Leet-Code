/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

Example 1:
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

Example 2:
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".

Example 3:
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation:
We can't reach the target without getting stuck.

Example 4:
Input: deadends = ["0000"], target = "8888"
Output: -1
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}

 //BFS (shortest path), check neighbor branches until finding target

 start = [0,0,0,0];
 curr = [];
 queue = [];
 next_queue = [];
 //add branches to next queue
 turns = 0;

//deadlocked if any digit is blocked (-1 and +1)

//iterative, brute force
//can check each digit(wheel) to shortest path to target
then add to turns
*/

  //add deadends, full nums
  //build a queue
  //hash set for seen
  //while(queue)
  //find neighbors, add to queue and seen, check all for target and dead

  const dirs = [
    [-1,0,0,0],
    [1,0,0,0],
    [0,-1,0,0],
    [0,1,0,0],
    [0,0,-1,0],
    [0,0,1,0],
    [0,0,0,-1],
    [0,0,0,1],
  ];

  const getNeighbors = (combo) => {
    let [a,b,c,d] = combo.split('');
    let neighbors = [];

    const inbounds = (x, y) => {
      if (Number(x) + y === -1) return 9;
      if (Number(x) + y === 10) return 0;
      return Number(x) + y;
    };

    for (let [w,x,y,z] of dirs) {
      let w1 = inbounds(a, w);
      let w2 = inbounds(b, x);;
      let w3 = inbounds(c, y);;
      let w4 = inbounds(d, z);;

      let neighbor = [w1, w2, w3, w4];
      neighbors.push(neighbor.join('').toString());
    }
    return neighbors;
  };

  const openLock = (deadends, target) => {
    if (target === "0000") return 0;
    let turns = 0;
    let queue = [];
    let visited = new Set();

    let dead = new Set();
    deadends.forEach(deadend => dead.add(deadend));

    queue.push("0000");
    visited.add("0000");

    while (queue.length) {
      let size = queue.length;
      turns++;
      for (let i = 0; i < size; i++) {
        let curr = queue.shift();
        if (curr === target) {
          return turns;
        } else if (!dead.has(curr)) {
          let currNeighbors = getNeighbors(curr);
          for (let neighbor of currNeighbors) {
            if (neighbor === target) {
              return turns;
            } if (!visited.has(neighbor)) {
               visited.add(neighbor);
               queue.push(neighbor);
            }
          }
        }
      }
    }
    return -1;
  };
