/*
https://leetcode.com/problems/robot-bounded-in-circle/

On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Example 1:
Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:
Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.

Example 3:
Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
*/

//iterate over instructions (one time, vs while loop --time out)
//if "R" or "L" is selected, reset "G"
//"L" .get/.set
//check for robot to return to starting point or previous visited coords

//cases when false:
  //no L's or R's
  //if L's and R's do not cancel each other out

/*
var isRobotBounded = function(instructions) {
  let l = 0;
  let r = 0;
  let g = 0;
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "L") l++;
    if (instructions[i] === "R") r++;
    if (instructions[i] === "G") g++;
  }
  console.log(l, r)
  l *= 4;
  r *= 4;
  if (!g) return true;
  if (l - r === 0 || l === 16) return false;
  return true;
};
*/

//solution via discussion board
var isRobotBounded = function(instructions) {
  let [x, y, dx, dy] = [0, 0, 0, 1];
  for(let i of instructions) {
      if(i == 'R') [dx, dy] = [dy, -dx];
      else if(i == 'L') [dx, dy] = [-dy, dx]
      else [x, y] = [x + dx, y + dy];
  }
  return (!x && !y) || dx || dy != 1;
};