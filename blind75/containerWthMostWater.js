/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Example 3:
Input: height = [4,3,2,1,4]
Output: 16

Example 4:
Input: height = [1,2,1]
Output: 2
*/

//optimized two pointers:
const maxArea = height => {
  let maxWater = 0;
  let p1 = 0;
  let p2 = height.length - 1;

  while (p2 !== p1) {
    maxWater = Math.max(maxWater, Math.min(height[p1], height[p2]) * (p2 - p1));
    height[p1] < height[p2] ? p1++ : p2--;
  }
  return maxWater;
};


//2pointers
//TC-O(n)
//SC-O(1)
const maxArea = height => {
  let maxWater = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  //container water line is the lower val of p1 && p2


  while (p2 !== p1) {
    let waterLine = Math.min(height[p1], height[p2]);
    let subBucket = waterLine * (p2 - p1);

    if (maxWater < subBucket) {
      maxWater = subBucket;
    }
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    };

  }
  return maxWater;
};

//second pass:
const maxArea = height => {
  let p1 = 0;
  let p2 = height.length - 1;
  let maxWater = 0;
  while (p1 !== p2) {
    let h = Math.min(height[p1], height[p2]);
    let currContainer = (p2 - p1) * h;
    maxWater = currContainer > maxWater ? currContainer : maxWater;
    height[p1] < height[p2] ? p1++ : p2--;
  }
  return maxWater;
};

//thirds:
const maxArea = heights => {
  let p1 = 0;
  let p2 = heights.length - 1;
  let max = 0;
  while (p1 < p2) {
    let currWater = Math.min(heights[p1], heights[p2]) * (p2 - p1);
    max = Math.max(max, currWater);
    if (heights[p2] > heights[p1]) {
      p1++;
    } else {
      p2--;
    }
  }
  return max;
};
