/*
https://leetcode.com/problems/counting-bits/

My solution: https://leetcode.com/problems/counting-bits/discuss/1127579/Bits-One-liner-w-Recursive-helper-func

Given an integer num, return an array of the number of 1's in the binary representation of every number in the range [0, num].

Example 1:
Input: num = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: num = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/
//pop count O(nk)/O(n), n&=n-1
//DP + Most significant bit O(n)/O(n), nested while loop, b<<= 1
//DP + least significant bit O(n)/O(n), dp[i] = dp[i>>1]+(i&1)
//DP + last Set Bit O(n)/O(n), dp[i] = dp[i&(i-1)]+1)

//dp + last set bit:
const countBits = num => {
  let dp = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) dp[i] = dp[i & (i - 1)] + 1;
  return dp;
}

//DP + least approach:
const countBits = num => {
  let dp = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) dp[i] = dp[i >> 1] + (i & 1);
  return dp;
}

//one-liner, single pass TC/SC-O(n):
const countOneBits = n => n === 0 ? 0 : 1 + countOneBits(n &= n - 1);
const countBits = num => new Array(num + 1).fill().map((_, i) => i === 0 ? 0 : countOneBits(i));

//single pass TC/SC-O(n)
//no built in function
//for loop, push into array
//create bit, count 1 bits
//get binary num
    //count ones

//helper func to count 1 bits
const countOneBits = n => (n === 0) ? 0 : 1 + countOneBits(n &= n - 1);

var countBits = function(num) {
  let numSetBits = [];
  for (let i = 0; i <= num; i++) {
    numSetBits.push(countOneBits(i));
  }
  return numSetBits;
};
//refactored:
const countOneBits = n => n === 0 ? 0 : 1 + countOneBits(n &= n - 1);
var countBits = function(num) {
  let numSetBits = [];
  for (let i = 0; i <= num; i++) numSetBits.push(countOneBits(i));
  return numSetBits;
};
//refactored:
const countOneBits = n => n === 0 ? 0 : 1 + countOneBits(n &= n - 1);

var countBits = function(num) {
  let numSetBits = new Array(num + 1).fill(0);
  numSetBits.forEach((e, i) => numSetBits[i] = countOneBits(i));
  return numSetBits;
};
//one-liner:
const countOneBits = n => n === 0 ? 0 : 1 + countOneBits(n &= n - 1);
const countBits = num => new Array(num + 1).fill().map((_, i) => i === 0 ? 0 : countOneBits(i));

//thirds (not sleek):
var countOneBits = function(n) {
  if (n === 0) {
    return 0;
  } else {
    return 1 + countOneBits(n &= n - 1);
  }
}

var countBits = function(num) {
  let countOnes = new Array(num + 1).fill().map((_, i) => i === 0 ? 0 : countOneBits(i));
  return countOnes;
};