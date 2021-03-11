/*
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Example 1:
Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:
Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
*/

//refactored:
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  let remainders = new Array(60).fill(0);
  for (let t of time) {
    count += t % 60 === 0 ? remainders[0] : remainders[60 - t % 60];
    remainders[t % 60]++;
  }
  return count;
};

//brute force, nest loops compare each
//math/logic, if num < 60 delta must be the remainder
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  let remainders = new Array(60).fill(0);
  for (let i = 0; i < time.length; i++) {
    if (time[i] % 60 === 0) {
      count += remainders[0];
    } else {
      count += remainders[60 - time[i] % 60];
    }
    remainders[time[i] % 60]++;
  }
  return count;
};