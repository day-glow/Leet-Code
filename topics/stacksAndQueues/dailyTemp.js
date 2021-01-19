/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

//LIFO - stack
//previous stack just holds index (can easily look up val in T array)
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