/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

var isPalindrome = function(s) {
  if (!s.length) return true;
  const alphanum = s.toUpperCase().replace(/[^A-Z0-9]/gi, "");
  let p1 = 0;
  let p2 = alphanum.length - 1;
  while (p1 <= p2) {
    if (alphanum[p1++] !== alphanum[p2--]) return false;
  }
  return true;
};

//thirds
//split in two (make a copy of half, reverse, string compare) O(n)/O(n)
//two pointers O(n)/O(1)
var isPalindrome = function(s) {
  let onlyLetters = s.toUpperCase().replace(/[^A-Z0-9]/gi,"");
  let p1 = 0;
  let p2 = onlyLetters.length - 1;
  while (p1 <= p2) {
    if (onlyLetters[p1++] !== onlyLetters[p2--]) return false;
  }
  return true;
};

//native methods:
var isPalindrome = function(s) {
  let onlyLetters = s.toUpperCase().replace(/[^A-Z0-9]/gi, "");
  let midpoint = Math.floor(onlyLetters.length / 2);
  let firstHalf = onlyLetters.slice(0, midpoint);
  if (onlyLetters.length % 2 === 1) midpoint += 1;
  let secondHalf = onlyLetters.slice(midpoint).split("").reverse().join("");
  return firstHalf === secondHalf;
};