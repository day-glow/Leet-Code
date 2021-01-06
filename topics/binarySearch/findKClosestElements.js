/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b


Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
*/

//[1,2,3,4,7,8,9,10]
//k=4
//x=7
//[4,7,8,9]
//will arr contain dups?

//binary search, middle out OR
const findClosestElements = (arr, k, x) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      let pivot = Math.floor((right - left) / 2) + left;
      x - arr[pivot] > arr[pivot + k]- x ? left = pivot + 1 : right = pivot;
  }
  return arr.slice(left, left + k);
};