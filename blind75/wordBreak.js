/*
https://leetcode.com/problems/word-break/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/

//brainstorm:
//optimization - yes/no
//recursion & memoization O(n)
//DP iteratively
//index pointers,
//edge cases

//similar to coin change (let's you use the dictionary word multiple times)
//recursion & memoization O(n)
//DP with nested loop <--

//hash set with word dictionary
//index increases, if word matches curr, then move one
//dp array with boolean & substrings <--