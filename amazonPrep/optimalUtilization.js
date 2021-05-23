/*
https://leetcode.com/discuss/interview-question/373202/Amazon-or-OA-2019-or-Optimal-Utilization

Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. Return a list of ids of selected elements. If no pair is possible, return an empty list.

Example 1:
Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7
Output: [[2, 1]]
Explanation:
There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.

Example 2:
Input:
a = [[1, 3], [2, 5], [3, 7], [4, 10]]
b = [[1, 2], [2, 3], [3, 4], [4, 5]]
target = 10
Output: [[2, 4], [3, 2]]
Explanation:
There are two pairs possible. Element with id = 2 from the list `a` has a value 5, and element with id = 4 from the list `b` also has a value 5.
Combined, they add up to 10. Similarily, element with id = 3 from `a` has a value 7, and element with id = 2 from `b` has a value 3.
These also add up to 10. Therefore, the optimal pairs are [2, 4] and [3, 2].

Example 3:
Input:
a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 10], [3, 14]]
target = 20
Output: [[3, 1]]

Example 4:
Input:
a = [[1, 8], [2, 15], [3, 9]]
b = [[1, 8], [2, 11], [3, 12]]
target = 20
Output: [[1, 3], [3, 2]]
*/

var findClosestPairs = function( a, b, target ) {
  if (!a || !b || !target) return [];
  let pairs = new Array();
  let currentMinDelta = target;
  a = a.sort((elem1, elem2) => a[elem1][1] - a[elem2][1]);
  b = b.sort((elem1, elem2) => b[elem1][1] - b[elem2][1]);
  for (let elem1 = 0; elem1 < a.length; elem1++) {
    const elem1Delta = target - elem1[1];
    for (let [id2, value2] of b) {
      if (value2 === elem1Delta) {
        if (currentMinDelta !== 0) {
          pairs = [[elem1[0], id2]];
          currentMinDelta = 0;
        } else {
          pairs.push([elem1[0], id2]);
        }
      }

      if (value2 >= elem1Delta) break;
    }
  }


}

/*
brute force (match each a to b with nested loops), time O(n^2) space O(1)
sort by values, then walk the pointers inward, time O(nlogn) space O(1)
2sum approach with set to find perfect pairs, then fall back to iterative
dp?