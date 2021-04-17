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
/*
//NAIVE (Sort) Solution:
const isAnagram = (s, t) => {
  //ec check lengths
  if (s.length !== t.length) {
    return false;
  }
  //sort
  const sortedS = s.split('').sort().join();
  const sortedT = t.split('').sort().join();

  return sortedS === sortedT;
};
*/

//Consolidated:
// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//   return (s.split('').sort().join() === t.split('').sort().join());
// };

/*
OPTIMIZED SOLUTION:
hash map - obj
TC- O(n)
SC- O(n)
*/
//hash map approach
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let letters = new Map();
  for (let i = 0; i < s.length; i++) {
    if (letters.has(s[i])) {
      letters.set(s[i], letters.get(s[i]) + 1);
    } else {
      letters.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (letters.has(t[i])) {
      if (letters.get(t[i]) === 1) {
        letters.delete(t[i]);
      } else if (letters.get(t[i]) > 1) {
        letters.set(t[i], letters.get(t[i]) - 1);
      }
    } else {
      return false;
    }
  }

  return letters.size === 0;
};

//fixed array (hash table) approach
//TC-O(n)
//SC-O(1)
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let letters = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    letters[s[i].charCodeAt(0) - 97]++;
    letters[t[i].charCodeAt(0) - 97]--;
  }
  return letters.every(count => count === 0);
};

//object approach
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }

    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      map[t[i]] = -1;
    }
  }

  for (let keys in map) {
    if (map[keys] !== 0) return false;
  }

  return true;
};

//thirds:
const isAnagram = (s, t) => s.split('').sort((a, b) => a.localeCompare(b)).join() === t.split('').sort((a, b) => a.localeCompare(b)).join();

//charCodeAt(0) - 97 array approach
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let letters = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    letters[s[i].charCodeAt(0) - 97]++;
    letters[t[i].charCodeAt(0) - 97]--;
  }
  for (let charCount of letters) {
    if (charCount !== 0) return false;
  }
  return true;
};