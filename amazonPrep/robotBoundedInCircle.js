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

Constraints:
1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.
*/
//4 limit trajectory, time O(n) space O(1)
//mathmatical proof, time O(n) space O(1)

/*
Array standard for dirs
               N     E     S       W
directions: [[0,1],[1,0],[0,-1],[-1,0]];
arrary idx:    0     1      2      3

**Solution 4 cycles limit trajectory:
after 4 cycles, robot must pass over (0,0) again to be in a circle

directions: N,E,S,W
coordinating steps: change direction or increase step in coords

if no G's exist, robot stays still
if no L's or R's exist, robot goes straight

iterate over robot instructions and use counters for each direction
  find the divisibilty and compare direction robot is facing. IF robot faces East or West, the robot will be in a circle.
  if robot faces north, return false
  if robot faces south....unsure

Keep track for current coordinates and direction the robot is facing.
Using logic to turn the robot 3rights = left (to stay in positive numbers)
logic for ending coord/direction facing to return T/F
          N
          |
          |
          | X
W--------------------E
          |
          |
          |
          S
*/

var isRobotBounded = function(string) {

}