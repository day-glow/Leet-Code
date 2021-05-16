/*
https://leetcode.com/discuss/interview-question/313719/
Amazon-or-Online-Assessment-2019-or-Movies-on-Flight

Related LC problem: https://leetcode.com/problems/two-sum-less-than-k/solution/

You are on a flight and wanna watch two movies during this flight.
You are given List<Integer> movieDurations which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).

Find the pair of movies with the longest total duration and return they indexes. If multiple found, return the pair with the longest movie.

Example 1:

Input: movieDurations = [90, 85, 75, 60, 120, 150, 125], d = 250
Output: [0, 6]
Explanation: movieDurations[0] + movieDurations[6] = 90 + 125 = 215 is the maximum number within 220 (250min - 30min)

There could be duplicate times
We must find a pair whose duration that equals to EXACTLY d - 30
There could be more than 1 pair. If there is more than one pair, you choose the pair that's going to have a larger number in it. (eg. [30, 30] vs. [10, 50], we would choose [10, 50].
Return a pair of indicies.
*/

/*
d = flightMins
movieDurs = list
goal: pick 2 movies where movieDurs <= d - 30
find max dur for pair, return indexes, if equal pair, return pair with longest movie

clarifying questions, is movie duration list sorted? Does a valid pair exist?

1. similar to twoSum?
target = d - 30
hash map of movies (one pass, add to map if no pair)
keep pair, maximizing on total time and longest

d = 250,
target = 220
[90, 85, 75, 60, 120, 150, 125]
                            i
220 - 120 = 100? does 100 exist? no, next best
220 - 150 = 70, does 70 exist? no, any less than 70? no.
220 - 125 = 95, does 95 exist, no, next less than 95
if not in map, add dur:index to map
map = {
  90:0,
  85:1,
  75:2,
  60:3,
  120:4,
  150:5,
}

is map best? what about next best, not perfect match? What about DP?
movie1 = 125
movie2 = 90
currentTotal = 215

Not sure this is the best strategy, how do we know next value less than the delta?

2. sort & 2pointers:
target = 220
 p
[60, 75, 85, 90, 120, 125, 150]
                            p2

if (p2 + p1 > target) p2--
else p1++

time O(nlogn) space O(1)

3. similar to max water in container, move pointers inward, trying to maximize total
dp? greedy maximizer? move with 2 pointers no sort?
             p
[90, 85, 75, 60, 120, 150, 125]
                 p2

MaxTotal = 215
movie1 idx = 0
movie2 idx = last

time O(n) space O(n) - to store map of original index
*/

//first attempt
var maxMovieDuration = function(movieDurs, d) {
  const target = d - 30;
  let movie1Idx = 0;
  let movie2Idx = movieDurs.length - 1;
  let currPairDuration = movieDurs[movie1Idx] + movieDurs[movie2Idx];
  let p1 = 0;
  let p2 = movieDurs.length - 1;

  while (p1 < p2) {
    if (currPairDuration > target) {
      if (movieDurs[p1 + 1] < movieDurs[p1]) p1++;
      else p2--;
    } else {
      if (movieDurs[p1 + 1] > movieDurs[p1]) p1++;
      else p2--;
    }
    if ((movieDurs[p1] + movieDurs[p2] < target && movieDurs[p1] + movieDurs[p2] > currPairDuration) || movieDurs[p1] + movieDurs[p2] === currPairDuration && Math.max(movieDurs[p1], movieDurs[p2]) > Math.max(movieDurs[movie1Idx], movieDurs[movie2Idx])) {
      movie1Idx = p1;
      movie2Idx = p2;
      currPairDuration = movieDurs[p1] + movieDurs[p2];
    }
  }
  return [movie1Idx, movie2Idx]
}

var maxMovieDuration = function(movieDurs, d) {
  if (!movieDurs.length) return [];
  const map = new Map();
  movieDurs.forEach((e, i) => map.set(e, i));
  //with map,can check 2 sum, otherwise check pointers

  movieDurs.sort((a, b) => a - b);
  const target = d - 30;

  let movie1Idx = 0;
  let movie2Idx = movieDurs.length - 1;
  let max = -1;

  while (movie1Idx < movie2Idx) {
    const currPairDuration = movieDurs[movie1Idx] + movieDurs[movie2Idx];
    if (currPairDuration === target) {
      // if (currPairDuration > max) max = currPairDuration;
      break;
    } else if (currPairDuration > target) {
      movie2Idx--;
    } else {
      if (currPairDuration > max) max = currPairDuration;
      movie1Idx++;
    }
  }
  return [map.get(movieDurs[movie1Idx]), map.get(movieDurs[movie2Idx])];
}

//twoSumLessThanK problem: returning max, not index (need to add original map for index retrival) time O(nlogn) space O(n)
var twoSumLessThanK = function(nums, k) {
  if (!nums.length || !k) return -1;
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  let max = -1;

  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum < k) {
      if (sum > max) max = sum;
      i++;
    } else {
      j--;
    }
  }
  return max;
};
