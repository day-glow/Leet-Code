/*
https://leetcode.com/problems/combination-sum-iv/

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

Example 2:
Input: nums = [9], target = 3
Output: 0
*/

//brainstorm:
//optimization - enumeration
//are nums sorted?
//edge cases, nums too large, target = 0 etc
//recursion + memoization
//DP iterative, bottom up
//array each index, with nested loops

//coin change goal is find fewest number coins to target
//this goal is find the total combos
