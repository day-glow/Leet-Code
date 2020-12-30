/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0
*/

/*
TC-
O((n-l)l) worse
O(n) best
SC- O(1)
*/
const strStr = (haystack, needle) => {
  if (!needle.length) return 0;
  let haystackP1 = 0;
  let haystackP2 = 0;
  let needleIdx = 0;
  while (haystack.length - haystackP1 >= needle.length - needleIdx) {

    if (haystack[haystackP2++] === needle[needleIdx++]) {
    } else {
      haystackP1++;
      haystackP2 = haystackP1;
      needleIdx = 0;
    }
    if (needleIdx === needle.length) return haystackP1;
  }
  return -1
};