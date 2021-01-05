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

//iterative

//binary search, middle out OR
//similar to range, find start and end
const findClosestElements = (arr, k, x) => {
  let closestInts = [];
  let left = 0;
  let right = arr.length;

  if (arr.length === k) return arr;
  if (arr[left] >= x) return arr.slice(0, k);
  if (arr[right] <= x) return arr.slice(-k);

  while (left < right) {
    let pivot = Math.floor((right - left) / 2) + left;
    if (arr[pivot] === x) {
      if (k === 1) return [x];
      closestInts.push(arr[pivot]);
      left = pivot - 1;
      right = pivot + 1;
      break;
    }
    x - arr[pivot] > arr[pivot + k] - x ? left = pivot + 1 : right = pivot;
  }

  //check for k closest from pivot
  while (closestInts.length < k) {
    if (Math.abs(arr[left] - x) < Math.abs(arr[right] - x) || Math.abs(arr[left] - x) === Math.abs(arr[right] - x) && left < right) {
      closestInts.unshift(arr[left]);
      left--;
    } else {
      closestInts.push(arr[right]);
      right++;
    }
  }
  return closestInts;
};