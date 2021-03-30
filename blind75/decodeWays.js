/*
https://leetcode.com/problems/decode-ways/

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.

Example 4:
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
*/

//OPTIMIZED DP Iterative Constant Space:
var numDecodings = function(s) {
  if (s.length === 0 || s[0] === '0') return 0;
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 1; i < s.length; i++) {
    let curr = 0;
    if (s[i] !== '0') {
      curr = dp1;
    }
    let double = Number(s.substring(i - 1, i + 1));
    if (double >= 10 && double <= 26) {
      curr += dp2;
    }
    [dp2, dp1] = [dp1, curr];
  }
  return dp1;
};

//brainstorm:
//count the number (optimization)
//recursion + memo
  //TC-O(n)
  //SC-O(n)
//dp iteratively (2 ways, array one pass, 2 swapping variables)

//pull string apart 1-2 valid digits, we don't even need to know the letter, just if it is valid
//count increases,
//no leading zeros, no solo zeros
//1-26 nums only
//solos 1-9, doubles 10-26 only
//check solo and double - 1 position
//length

//dynampic programming Iterative:
//TC-O(n)
//SC-O(n)
var numDecodings = function(s) {
  if (s.length === 0) return 0;
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  for (let i = 2; i <= s.length; i++) {
    //check solo
    if (s[i - 1] !== '0') dp[i] = dp[i - 1];

    //check double
    let double = Number(s.substring(i - 2, i));
    if (double >= 10 && double <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};