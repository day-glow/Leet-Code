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
c- not case sensitive, any limit to string length?
   TC - naive O(n) - linear
ec- spaces, punctuation, casing
   palindrome is odd/even length

viz -
"Racecar" --> true

-change string to same case
-remove punctuation
-length/2 = center
*/




