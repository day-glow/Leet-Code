/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/

//stack approach
//TC-O(n*maxK^countK)
//SC-O(sum(n*maxK^countK))
const decodeString = s => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      //do something to decode
      let subStr = [];
      while (stack[stack.length - 1] !== '[') {
        let next = stack.pop();
        subStr.push(next);
      }
      stack.pop();
      let k = 0;
      let base = 1;
      while (/\d/.test(stack[stack.length - 1])) {
        let num = stack.pop();
        k = k + Number(num) * base;
        base *= 10;
      }
      while (k > 0) {
        for (let j = subStr.length - 1; j >= 0; j--) {
          stack.push(subStr[j]);
        }
        k--;
      }

    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

//replace approach (optimized with native methods)
const decodeString = s => {
  while (s.includes('[')) {
      s = s.replace(/(\d+)\[(\w+)\]/g, (_, number, word) => word.repeat(number));
  }
  return s;
};