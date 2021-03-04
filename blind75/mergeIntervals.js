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

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//clarify Q are they in sorted, ascending order? by start of interval?
//test case [[1,4],[0,0]] shows intervals are not sorted

//SECOND PASS:
  //are these sorted?
  //iterate over intervals
  //if overlapping, merge


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