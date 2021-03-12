/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e, √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
*/

//calc dist, save with index
//sort, return k points
//TC-sorting O(nlogn)
//SC-O(n)
var kClosest = function(points, k) {
  let distances = new Map();
  let closestPoints = [];
  points.forEach((p, i) => {
    let d = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
    distances.has(d) ? distances.get(d).push(i): distances.set(d, [i]);
  })
console.log(distances)
  let sorted = Array.from(distances).sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < k; i++) {
    let pts = sorted[i][1];
    console.log(pts)
    for (let p of pts) closestPoints.push(points[p]);
    if (closestPoints.length >= k) break;
  }
  return closestPoints.length === k ? closestPoints : closestPoints.slice(0, k);
};

//Divide&Conquer Approach
//TC-O(n)
//SC-O(n)
var kClosest = function(points, K) {
  const swap = (i1, i2) => {
    [points[i1], points[i2]] = [points[i2], points[i1]];
  };
  const distance = point => point[0] ** 2 + point[1] ** 2;

  const partition = (lo, hi) => {
    // pick last one as pivot
    const pivotDist = distance(points[hi]);
    let targetPivotIdx = lo,
      searchIdx = lo;
    // compare from lo to hi
    while (searchIdx < hi) {
      const dist = distance(points[searchIdx]);
      if (dist <= pivotDist) {
        swap(searchIdx, targetPivotIdx);
        targetPivotIdx += 1;
      }
      searchIdx += 1;
    }
	// hi goes to target pivot
    swap(hi, targetPivotIdx);
    return targetPivotIdx;
  };

  const quickSelect = (lo, hi, target) => {
    const pivot = partition(lo, hi);
    if (pivot === target - 1) return;
    if (pivot < target - 1) {
      quickSelect(pivot + 1, hi, target);
    } else {
      quickSelect(lo, pivot - 1, target);
    }
  };

  quickSelect(0, points.length - 1, K);
  return points.slice(0, K);
};