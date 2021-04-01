/*
https://leetcode.com/problems/pascals-triangle-ii/

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
*/

//brainstorm:
//already calculated rows prior, memoization look back
//length of row is rowIndex + 1
//first and last always starts with 1's
//DP iteratively, nested loops (bottom up)
//DP, build and expand top down

//change inner with one level? nested loop or while loop
//[1,1,1,1,1]
