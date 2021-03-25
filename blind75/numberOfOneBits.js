/*
https://leetcode.com/problems/number-of-1-bits/

Day-Glow Solution: https://leetcode.com/problems/number-of-1-bits/discuss/1127507/Recursive-One-Liner-with-Bits

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
*/

//Loop & Flip
//TC-O(1) //32-bit int
//SC-O(1)
var hammingWeight = function(n) {
  let bits = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    console.log("n", n, "mask", mask);
    if ((n & mask) !== 0) bits++;
    mask <<= 1; //mask *= 2, shift left one
  }
  return bits;
};

//Bit Manipulation using the Brian Kernighan's Algo
//logic: unset right most set bit until num === 0;
//TC-O(1) //32-bit int
//SC-O(1)
var hammingWeight = function(n) {
  let setBits = 0;
  while (n !== 0) {
    setBits++;
    n &= (n - 1); // clear the least significant bit set
  }
  return setBits;
};
//if setBits returns 1, then n is also a power of 2!

//recursive bits:
var hammingWeight = function(n) {
  if (n === 0) return 0;
  return 1 + hammingWeight(n &= (n - 1));
};
//refactored, one liner:
const hammingWeight = n => n === 0 ? 0 : 1 + hammingWeight(n &= n - 1);
