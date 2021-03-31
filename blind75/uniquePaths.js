/*
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:
Input: m = 7, n = 3
Output: 28

Example 4:
Input: m = 3, n = 3
Output: 6
*/

//brainstorm:
//optimization - enumeration
//matrix, use rows & cols
//work backwards from finish
//count each squares options by directional options
//last row and last column only have one option per square
/*
m = 3, n = 7
[
[28,21,15,10,6,3,1],
[7, 6, 5, 4, 3,2,1],
[1, 1, 1, 1, 1,1,1],
]
*/