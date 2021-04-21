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