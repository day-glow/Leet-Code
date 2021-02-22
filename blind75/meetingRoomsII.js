/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
*/

//second pass refactored:
var minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let rooms = [];
  for (let [start, end] of intervals) {
    if (rooms[rooms.length - 1] && rooms[rooms.length - 1] <= start) rooms.pop();
    rooms.push(end);
    rooms.sort((a, b) => b - a);
  }
  return rooms.length;
};

//SECOND PASS same approach:
var minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let rooms = [];
  for (let meet of intervals) {
    let firstOpening = rooms[rooms.length - 1] || null;
    if (firstOpening && firstOpening <= meet[0]) rooms.pop();
    rooms.push(meet[1]);
    rooms.sort((a, b) => b - a);
  }
  return rooms.length;
};

//clarifying question, do you need the entire meeting to occur in the same meeting room?
//are the same "borders" overlaping or ok to share?
//interval in array is like a sliding window

//no min heap or priority queue, could instantiate one or use sort for each call
//TC-O(nlogn)
//SC-O(n)
const minMeetingRooms = intervals => {

  if (!intervals.length) return 0;
  if (intervals.length === 1) return 1;
  intervals.sort((a, b) => a[0] - b[0]);

  let takenRooms = [intervals[0]];

  const checkForOpenRoom = () => {
    takenRooms.sort((a, b) => b[1] - a[1]);
    return takenRooms[takenRooms.length - 1];
  };

  for (let i = 1; i < intervals.length; i++) {
    //check if room is free, otherwise add room
    let room = checkForOpenRoom();
    if (intervals[i][0] >= room[1]) {
      takenRooms.pop();
      takenRooms.push(intervals[i]);
    } else {
      takenRooms.push(intervals[i]);
    }
  }

  return takenRooms.length;
};

