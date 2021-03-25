/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

*/

//THIRDS:
//bit manipulation:
//logic: sum of length of nums + 1 = all numbers, including missing one
//find sum of nums
//include indecies nums.len + 1
//(sum ^= nums.length + 1) - (sum ^= nums.forEach) = missing number
var missingNumber = function(nums) {
  let sum = 0;
  for (let n of nums) sum ^= n;
  for (let i = 1; i < nums.length + 1; i++) sum ^= i;
  return sum;
};

//SECOND RUN THRU:
//5min to optimized solution
//O(n) & O(1)
const missingNumber = nums => {
  let total = 0;
  for (let i = nums.length; i > 0; i--) {
    total += i - nums[i - 1];
  }
  return total;
};


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

/*
NAIVE SOLUTION:
const missingNumber = (nums) => {
  //declare missingNum variable
  let missingNum = 0;
  //declare total variable
  let rangeTotal = 0;
  let numsTotal = 0;
  //handle ec's
  if (nums.length === 1) {
    if (nums[0] === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  //sort arr
  const sortedArr = nums.sort((a,b) => a - b);

  if (sortedArr[0] !== 0) {
    return 0;
  }

  //sum 0-last num in arr for range total
  const largestNum = sortedArr[sortedArr.length - 1];
  rangeTotal = findRangeSum(largestNum);

  //sum array total
  numsTotal = sortedArr.reduce((a,b) => a + b);
  //subtract array total from range total to find missing num value
  missingNum = rangeTotal - numsTotal;
  //ec-if total is 0, then missing num is last num + 1
  if (missingNum === 0) {``
    return largestNum + 1;
  }
  //return missingNum
  return missingNum;
};

const findRangeSum = (largestNum) => {
  let sum = 0;
  //sum nums in range 0 to largestNum
  for (let i = 0; i <= largestNum; i++) {
    sum += i;
  }
  //return sum
  return sum;
}
*/

//OPTIMIZED SOLUTION (similar to Gauss' formula):
//TC-O(n) one forloop
//SC-O(1), no additional space needed.

const missingNumber = nums => {
  //declare expected total
  let expectedSum = nums.length;
  //declare actual total
  let actualSum = 0;

  //for loop to add to each total
  for (let i = 0; i < nums.length; i++) {
    expectedSum += i;
    actualSum += nums[i];
  }
  //return expected minus the actual
  return expectedSum - actualSum;
}

