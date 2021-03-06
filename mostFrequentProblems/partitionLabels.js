/*
https://leetcode.com/problems/partition-labels/

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

//greedy approach (Array or Map work):
//TC-O(n)
//SC-O(1)
var partitionLabels = function(S) {
  //new Map();
  let lastIdx = new Array(26);
  //forloop() lastIdx.set(S[i], i);
  for (let i = 0; i < S.length; i++) lastIdx[S.charCodeAt(i) - 97] = i;
  let j = 0;
  let lastCount = 0;
  let parts = [];
  for (let i = 0; i < S.length; i++) {
    //j = Math.max(j, lastIdx.get(S[i]));
    j = Math.max(j, lastIdx[S.charCodeAt(i) - 97]);
    if (i === j) {
      parts.push(i - lastCount + 1);
      lastCount = i + 1;
    }
  }
  return parts;
};

//brainstorm:
//map of chars & idx's
//iterate
//goal is to reduce chars in part, aka (each letter in it's own cubby)
  //if duplicate letter, must grow cubby to include

//goal find sliding window of dups

//"ababcbacadefegdehijhklij"
/*
map = {
  a: [0, 2, 6, 8], etc
}

map is now an interval list
find the breaking points where the intervals do not overlap (similar to meeting room problem)

9 -> 7 -> 8
9 -> 16 ->
*/
//hashMap & intervals approach
//TC-O(n)
//SC-O(n)
var partitionLabels = function(S) {
  let charMap = new Map();
  let parts = [];
  for (let i = 0; i < S.length; i++) {
    let prev = [i];
    if (charMap.has(S[i])) {
      prev = charMap.get(S[i]);
      prev.length === 0 ? prev[0] = i : prev[1] = i;
    }
    charMap.set(S[i], prev);
  }
  let prev = [0, 0];
  for (let [start, end] of charMap.values()) {
    if (end === undefined) end = start;
    if (prev[1] < start) {
      parts.push(prev[1] - prev[0] + 1);
      prev = [start, end];
    }
    if (end > prev[1]) prev[1] = end;
  }
  parts.push(prev[1] - prev[0] + 1);
  return parts;
};