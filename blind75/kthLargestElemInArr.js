/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
*/

//TC-O(nlogn)
//SC-O(1)
//sort approach:
const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1];

//HEAP approach:
//TC-O(nlogk)
//SC-O(k)



//Quickselect Approach (w/ random pivot):
//TC-O(n)-O(n^2)
//SC-O(1)

var findKthLargest = function(nums, k) {
  const finalIdx = nums.length - k;
  let left = 0;
  let right = nums.length-1;

  while(left <= right) {
      const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
      const pivotIdx = pivotHelper(pivot, left, right);
      if(pivotIdx === finalIdx) return nums[finalIdx];

      if(pivotIdx < finalIdx) left = pivotIdx + 1;
      else right = pivotIdx - 1;
  }

  const pivotHelper = (pivot, start, end) => {
      swap(pivot, end);

      let i = start;
      let j = start;

      while(j < end) {
          if(nums[j] <= nums[end]) {
              swap(i, j);
              i++;
          }
          j++;
      }
      swap(i, end);
      return i;
  }

  const swap = (i, j) => {
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};

//second pass:
//naive sort approach:
var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

//stacks & queues approach:
var findKthLargest = function(nums, k) {
    let stack = new Array();
    let stack2 = new Array();
    stack.push(nums.pop());
    for (let num of nums) {
      if (stack[stack.length - 1] <= num) {
        stack.push(num);
      } else {
        while (stack[stack.length - 1] > num) stack2.push(stack.pop());
        stack.push(num);
        while (stack2.length) stack.push(stack2.pop());
      }
    }
    return stack[stack.length - k];
  };