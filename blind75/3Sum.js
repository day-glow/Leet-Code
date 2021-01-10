/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}

 g- find any combinations of 3 elements that sum 0
 i- arr of nums
 o- nested arr, each inner arr contains 3 elements that sum to 0
 se- n/a
 c-
   TC-O(n2)
   SC-O(n)
 ec- only use a number as many times as input, no duplicate triplets

 //use recursion (tree, rps solution), nested loops

 OR use .sort() and two pointer solution
 */