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


1st Pass:
Result:
Runtime: 92 ms, faster than 80.35% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 41.5 MB, less than 62.74% of JavaScript online submissions for Valid Palindrome.

const isPalindrome = (str) => {
  // convert str into same case, remove punctuation, remove spaces
  const string = str.toUpperCase().replace(/[^a-zA-Z0-9 ]+/g, '').replace('/ {2,}/',' ').split(" ").join("");
  // find half way point
  const len = Math.floor(string.length / 2);
  // iterate over str
  for (let i = 0; i < len; i += 1) {
    // compare first elem to last until reaching middle
    if (string[i] !== string[string.length - 1 - i]) {
      // if not a match, return false
      return false;
    }
  }
  // return true
  return true;
};


Removed fluff:
const isPalindrome = str => {
  const str2 = str.toUpperCase().replace(/[^A-Z0-9]/gi, "");
  for (let i = 0; i < str2.length / 2; i++) {
    if (str2[i] !== str2[str2.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
*/

/*
OPTIMIZED Two-pointer solution:
Result:
Runtime: 84 ms, faster than 97.07% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 40.9 MB, less than 83.90% of JavaScript online submissions for Valid Palindrome.
*/

const isPalindrome = str => {
  if (str === "") { return true; }

  const alphanum = str.toLowerCase().replace(/^a-z0-9/gi, "");

  let head = 0;
  let tail = alphanum.length - 1;

  while (head < tail) {
    if (alphanum[head] !== alphanum[tail]) {
      return false;
    }
    head++;
    tail--;
  }

  return true;
};