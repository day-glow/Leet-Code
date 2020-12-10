/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

//2 pointers:
//TC-O(m+n)
//SC-O(m+n) when creating new arr
//SC-O(m) if merging in place and altering original
const merge = (nums1, m, nums2, n) => {
  //splice the first m or n off each list
  nums1.splice(m, nums1.length - m);

  //two pointers (each arr)
  let p1 = 0;
  let p2 = 0;

  //loop over nums1
  while (p1 < m || p2 < n) {
    if (nums1[p1] === undefined || nums1[p1] > nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      p1++;
      m++;
    } else {
      p1++;
    }
  }
};

//REFACTORED:
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);
  let p1 = 0;
  let p2 = 0;
  while (p1 < m || p2 < n) {
    if (nums1[p1] === undefined || nums1[p1] > nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2++]);
      m++;
    }
    p1++;
  }
};
//Refractored:
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);
  let p1 = 0, p2 = 0;
  while (p1 < m || p2 < n) {
    (nums1[p1] === undefined || nums1[p1] > nums2[p2]) ? (nums1.splice(p1, 0, nums2[p2++]), m++) : p1++;
  }
};

//TC-O(m+n)
//SC-O(1)
//3 pointers (replace from the end):
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);

  //pointers start at ends
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    //compare larger values to replace at the end
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
      p--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }
};

//REFRACTORED 3pointers:
//3 pointers (replace from the end):
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);

  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    nums1[p--] = (nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--];
  }
};