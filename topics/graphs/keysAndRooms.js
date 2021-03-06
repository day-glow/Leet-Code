/*
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0).

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:
Input: [[1],[2],[3],[]]
Output: true
Explanation:
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.

Example 2:
Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
*/

/*
SUMMARY:
room = i
listOfKeys = rooms[i]
eachKey = rooms[i][j]
N = rooms.length
key room[i][j] = v, opens room with num v
all rooms locked except room '0'
rooms bi-directional
return boolean

//Approaches
brute force loops
dfs
obj
*/

//DFS, stack
//TC-O(n+e)
//SC-O(n)
const canVisitAllRooms = rooms => {
  let unlockedRooms = new Array(rooms.length).fill(0);
  unlockedRooms[0] = 1;
  let currentKeys = [0];

  while (currentKeys.length) {
    let currRoom = currentKeys.shift();
    rooms[currRoom].forEach(key => {
      if (!unlockedRooms[key]) {
        currentKeys.push(key);
        unlockedRooms[key] = 1;
      }
    })

  }

  return unlockedRooms.includes(0) ? false : true;
};