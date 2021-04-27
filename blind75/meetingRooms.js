/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: true
*/
//brute force O(n^2)/O(1) nested loops checking overlap condition
//.sort, O(nlogn)/O(1)
//if already sorted, O(n)/O(1)

//TC-O(nlogn)
//SC-O(1)
//sort by start time, ascending
//comparing ending with next starting
//return boolean
const canAttendMeetings = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
};

//BRUTE FORCE:
//TC-O(n^2)
//SC-O(1)
//solve with nested loops and overlap conditions for each pair's vals

//optional for each loop
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEndTime = 0;
  let canAttendAll = true;
  intervals.forEach(meeting => meeting[0] < prevEndTime ? canAttendAll = false : prevEndTime = meeting[1]);
  return canAttendAll;
};