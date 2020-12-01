/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

*/

/*
 //return missing number in the range
 //sort, take last num (highest), and find missing
 //sum all nums and find missing value (0 to highest sum difference)
 nums are consecutive starting at 0

 i-array of nums
 o-single num
 se-n/a, may sort og arr or could make copy
 c-O(n)
 ec- if no "missing" in range, then next increment +1 is the missing num, if arr only contains 0 & no n
*/