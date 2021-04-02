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

/*
s        = "applepenapple"
wordDict = ["apple","pen", "app"]

dp       = [t,f,f,t,f,t,f,f,f,f,f,f,f]
//iterate over string with first loop (isolate each char)
//iterate over dp to use "cache" to determine if prev + curr is t/f
//checking if previously combo was true or false
*/

//dp, nested loops
//TC-O(n3) nested loops & string computation each time
//SC-O(n)
var wordBreak = function(s, wordDict) {
  let set = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

//optional, more confusion option:
var wordBreak = function(s, wordDict) {
  let dp = Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++){
    for (let word of wordDict){
      let slice = s.slice(i + 1 - word.length, i + 1);
      if (word === slice && ((i - word.length < 0) || dp[i - word.length])) dp[i] = true;
    }
  }
  return dp[dp.length - 1];
};