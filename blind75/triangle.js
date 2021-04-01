/*
https://leetcode.com/problems/triangle/

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

Example 1:
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

Example 2:
Input: triangle = [[-10]]
Output: -10
*/

//brainstorm:
//optimization - minimize sum
//greedy (minimum choice)
//multiple paths recursion/backtracking/memo
/*
     2
    3 4
   6 5 1
  4 7 8 1
 1 8 9 2 2
Top down options:
2,3,5,7,8 --> 25 output if always taking the minimum per option
2,4,1,1,2 --> 10 optimized output for minimum sum

Bottom up:
2,1,1,4,2 --> 10
1,4,5,3,2 --> 15

Slightly better with bottom up approach, however, still multiple options
Depends on each row
*/
//iterate bottom up, adding each value to each index