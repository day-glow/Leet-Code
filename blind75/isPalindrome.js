/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Ex 1:
Input: "A man, a plan, a canal: Panama"
Output: true

g- determine if a string contains the same letters forward, as backward from center. (read forward or backward is the same phrase/word)

i- word/phrase (string)
o- boolean
se- n/a
c- not case sensitive, any limit to string length?, string contains letters/nums/other? which punctuation input str, only going to account for normal (could use regX if googled)
   TC - naive O(n) - linear
ec- spaces, punctuation, casing
   palindrome is odd/even length

viz -
"Racecar" --> true

-change string to same case
-remove punctuation
-length/2 = center
*/

const isPalindrome = (str) => {
  // convert str into same case, remove punctuation, remove spaces
  const string = str.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("");
  // find half way point
  const len = Math.floor(string.length / 2);
  // iterate over str
  for (let i = 0; i < len; i += 1) {
    // compare first elem to last until reaching middle
    if (string[i] !== string[-i]) {
      // if not a match, return false
      return false;
    }
  }
  // return true
  return true;
};



