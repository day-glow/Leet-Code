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



//Quickselect Approach:
//TC-O(n)-O(n^2)
//SC-O(1)