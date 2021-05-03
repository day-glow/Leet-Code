/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
//connected components, brute force O(n^2)/O(n^2), nested loops
//sort arr, compare O(nlogn)/O(n)

/*
Given an array of intervals where intervals[i] = [starti, endi],
Write an algorithm that would return the intervals after being merged so no intervals are overlapping

** test case **
    example 1:         [[0,2],[2,4],[3,6],[1,2]]
                        a     b     c     d
    merge overlapping: [[0,2],[2,6],[1,2]]
    output:            [[0,2],[2,6]]

    sorted? no
    overlapping? a.end = 2 & b.start = 2, no

** specs **
    I - arr of intervals (arr/tuples)
    O - arr of intervals (arr/tuples); can we modify input array (in-place) OR allocate space for result
    C - TC / SC
    E - overlapping definition, if intervals is null, if all are the same intervals

** visualization **
Approaches
1. Sort arr, iterate backwards compare start to prev end time, merge if overlapping
    time - O(nlogn), space - O(logn) for sorting inplace or O(n) for copy
        step 1: input interval arr               [[0,2],[2,4],[3,6],[1,2]]
        step 2: sort input arr by start times    [[0,2],[1,2],[2,4],[3,6]]
        3: check start time to prev end time     [[0,2],[1,2],[2,4],[3,6]] -> [2,4],[3,6] overlaps -> merge [[0,2],[1,2],[2,6]]
                                                                i
        ** merge, take min start, max end time for pair [2,4],[3,6] -> min(2,3) & max(4,6) -> [2,6]
        4: continue merging all                  [[0,2],[1,2],[2,6]] -> [0,2],[1,2] overlaps -> merge [[0,2],[2,6]]
        output:                                  [[0,2],[2,6]]

** pseudocode **
function mergeIntervals
    sort array (native sort) by start times
    iterate over array
        check current interval start time with prev interval end time
            if start less than end, merge
                min(start times), max(end times)
                prev interval merges, and curr interval remove
            if not, continue
    return array
*/

var merge = function(arr) {
  arr.sort((a, b) => a[0] - b[0])
  const merged = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const currStart = arr[i][0];
    const prevEnd = merged[merged.length - 1][1];
    if (currStart < prevEnd) {
      // redundant min since, sorted arr
      merged[merged.length - 1][1] = Math.max(prevEnd,  arr[i][1]);
    } else {
      merged.push(arr[i]);
    }
  }
  return merged;
}

const test = [[0,2],[2,4],[3,6],[1,2]];
const expectedResult = [[0,2],[2,6]];
const output = merge(test);
console.log('actual result: ', output, 'expected result: ', expectedResult, 'result: ', String(output) === String(expectedResult));

//clarify Q are they in sorted, ascending order? by start of interval?
//test case [[1,4],[0,0]] shows intervals are not sorted

//SECOND PASS:
  //are these sorted?
  //iterate over intervals
  //if overlapping, merge
const isOverlapping = (prev, next) => prev[0] <= next[1];

const merge = intervals => {
  if (intervals.length < 2) return intervals;
  let mergedIntervals = [];
  intervals.sort((a, b) => a[1] - b[1])
  let end = intervals.pop();
  while (intervals.length) {
    let curr = intervals.pop();
    if (isOverlapping(end, curr)) {
      let newInterval = [Math.min(end[0], curr[0]), Math.max(end[1], curr[1])];
      end = newInterval;
    } else {
      mergedIntervals.push(end);
      end = curr;
    }
  }
  mergedIntervals.push(end);
  return mergedIntervals;
};

//should sort by starting values
//iterate over elems
//if prevMin & max are within currMin & max, merge
//if not, update curret min max

const isOverlapping = (prevMin, prevMax, currMin, currMax) => {
  if (currMin <= prevMax && currMin >= prevMin) return true;
  if (prevMax >= currMax && currMax >= prevMin) return true;
  if (currMin <= prevMin && currMax >= prevMax) return true;
  if (prevMin <= currMin && prevMax >= currMax) return true;

  return false;
}

const merge = intervals => {
  let prevMin;
  let prevMax;
  let mergedInt = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let [currMin, currMax] of intervals) {
    if (prevMin !== undefined && isOverlapping(prevMin, prevMax, currMin, currMax)) {
      //merge
      prevMin = Math.min(prevMin, currMin);
      prevMax = Math.max(prevMax, currMax);
    } else if (prevMin !== undefined) {
      mergedInt.push([prevMin, prevMax]);
      prevMin = currMin;
      prevMax = currMax;
    } else {
      prevMin = currMin;
      prevMax = currMax;
    }
  }
  mergedInt.push([prevMin, prevMax]);
  return mergedInt;
};

//OPTIMIZED
//TC-O(nlogn)
//SC-worst O(n)
const merge = intervals => {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let res = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
};