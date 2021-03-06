/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:
Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:
Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

//second pass, optimized, Greedy based on end times:
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length < 2) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let prev = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prev) {
      prev = intervals[i][1];
      count++;
    }
  }
  return intervals.length - count;
};

//second pass:
var eraseOverlapIntervals = function(intervals) {
  let count = 0;
  //sort by start
  intervals.sort((a, b) => a[0] - b[0]);

  //greedy, check for overlap (remove longer time)
  for (let i = 1; i < intervals.length; i++) {
    console.log(count, intervals)
    if (intervals[i][0] < intervals[i - 1][1]) {
      if (intervals[i][1] > intervals[i - 1][1]) {
        intervals.splice(i, 1);
      } else {
        intervals.splice(i - 1, 1);
      }
      count++;
      i--;
    }
  }
  return count;
};

//greedy approach
//TC-O(nlogn)
//SC-O(1)
const eraseOverlapIntervals = intervals => {
  let removalCount = 0;
  let prev = 0;
  if (intervals.length < 2) return removalCount;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[prev][1]) {
      if (intervals[i][1] < intervals[prev][1]) prev = i;
      removalCount++;
    } else {
      prev = i;
    }
  }
  return removalCount;
};