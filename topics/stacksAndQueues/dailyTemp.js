/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

//second pass, same approach:
var dailyTemperatures = function(T) {
  if (!T.length) return [];
  if (!T.length === 1) return [0];

  let daysWait = new Array(T.length).fill(0);
  let lastDay = T.length - 1;
  let prevHotDay = [lastDay];
  for (let i = lastDay - 1; i >= 0; i--) {
    let top = prevHotDay[prevHotDay.length - 1];
    while (prevHotDay.length && T[top] <= T[i]) {
      prevHotDay.pop();
      top = prevHotDay[prevHotDay.length - 1];
    }
    prevHotDay.length ? daysWait[i] = top - i : daysWait[i] = 0;
    prevHotDay.push(i);
  }
  return daysWait;
};

//LIFO - stack
//previous stack just holds index (can easily look up val in T array)
//TC-O(n)
//SC-O(n)
const dailyTemperatures = T => {
  let daysToWait = [];
  let prevHigh = [];
  for (let i = T.length - 1; i >= 0; i--) {
    let top = prevHigh[prevHigh.length - 1];
    while (prevHigh.length && T[top] <= T[i]) {
      prevHigh.pop();
      top = prevHigh[prevHigh.length - 1];
    }
    prevHigh.length ? daysToWait.unshift(top - i) : daysToWait.unshift(0);
    prevHigh.push(i);
  }
  return daysToWait;
};