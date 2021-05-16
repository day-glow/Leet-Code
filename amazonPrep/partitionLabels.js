/*
https://leetcode.com/problems/partition-labels/

A string s of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Note:
s will have length in range [1, 500].
s will consist of lowercase English letters ('a' to 'z') only.
*/

/*

hashmap start and end of each letter?
arr of start/end for char code

assumption they are all spaced out individually, goal is to find the end idx for each letter

hash set, seen letters
"ababcbacadefegdehijhklij"
     i

map = {
  a: [0, 2],
  b: [1, 3],
  c:
}

know where start and ends are for each letter, avoid collisions
intervals problem
[0,2],[1,3],[] ... etc
already sorted by start since we recorded them left to right idx
*/

var findPartition = function(s) {
  //if (s.length <= 1) return [];
  const partitions = new Array();
  const rangePerLetter = new Map();

  for (let idx = 0; idx < s.length; idx++) {
    const letter = s[idx];
    let start = idx;
    let end = idx;
    if (rangePerLetter.has(letter)) {
      [start, end] = rangePerLetter.get(letter);
    }
    rangePerLetter.set(letter, [start, idx]);
  }

  const intervals = Array.from(rangePerLetter.values());
  let prevEnd = intervals[0][1];
  let runningCount = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd > intervals[i][0]) {
      //overlap, update prev
      prevEnd = Math.max(prevEnd, intervals[i][1]);
    } else {
      const nextInterval = prevEnd + 1 - runningCount
      partitions.push(nextInterval);

      runningCount += nextInterval;
      prevEnd = intervals[i][1];
      console.log(runningCount)
    }
  }
  partitions.push(s.length - runningCount);
  console.log(partitions);
  return partitions;
}

const s = "ababcbacadefegdehijhklij";
const expectedResult = [9, 7, 8];
const actualResult = findPartition(s);
console.log('expected: ', expectedResult, 'actual', actualResult, expectedResult === actualResult);