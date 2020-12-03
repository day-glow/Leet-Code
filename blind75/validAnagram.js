/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

 g- compare two strings and return if it is an anagram
 i- 2 strings
 o- boolean
 se- n/a, could sort original strings or copy
 c- all lowercase inputs, any time or space constraints, length of strings?
 ec- strings are null/undefined, different lengths (same chars?), contain spaces or punctuation?

 TC- sort= O(nlogn), iterate or compare two strings O(n)
 SC- O(1) if sort strings, or may need to copy if not altering originals O(1)

 const stringA = 'rat';
 const stringB = 'tar';

 const expected = true;
 const actual = isAnagram(stringA, stringB);
 assertEqual(actual, expected, 'the string is an anagram');
 console.log(actual === expected);

*/