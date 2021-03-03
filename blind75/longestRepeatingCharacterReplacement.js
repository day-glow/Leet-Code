/*
Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note: Both the string's length and k will not exceed 104.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

//for loop sliding 2 pointers
const characterReplacement = (s, k) => {
  let longest = 0;
  let mostFreq = 0;
  let letters = new Map();

  for (let p1 = 0, p2 = 0; p2 < s.length; p2++) {
    let curr = s[p2];
    if (letters.has(curr)) {
      letters.set(curr, letters.get(curr) + 1);
    } else {
      letters.set(curr, 1);
    }
    mostFreq = Math.max(letters.get(curr), mostFreq);

    while (p2 - p1 + 1 - mostFreq > k) {
      letters.set(s[p1], letters.get(s[p1]) - 1);
      p1++;
    }
    longest = Math.max(p2 - p1 + 1, longest);
  }
  return longest;
};

//while loop & two pointers approach
const characterReplacement = (s, k) => {
  let p1 = 0;
  let p2 = 0;
  let longest = 0;
  let letters = new Map();

  while (p2 < s.length) {
    let curr = s[p2];
    if (letters.has(curr)) {
      letters.set(curr, letters.get(curr) + 1);
    } else {
      letters.set(curr, 1);
    }
    if (letters.get(curr) > longest) longest = letters.get(curr);
    if (p2 - p1 + 1 - longest > k) {
      letters.set(s[p1], letters.get(s[p1]) - 1);
      p1++;
    }
    p2++
  }
  return p2 - p1;
};

//second pass:
//2ptrs, sliding window
//utilize map to count chars? or utilize Array(26 and increase the numeric val)
//compare the highest count in map values
const characterReplacement = (s, k) => {
  let p1;
  let p2;
  let longest = 0;
  let letters = new Map();
  for (p1 = 0, p2 = 0; p2 < s.length; p2++) {
    let curr = s[p2];
    letters.has(curr) ? letters.set(curr, letters.get(curr) + 1) : letters.set(curr, 1);
    if (letters.get(curr) > longest) longest = letters.get(curr);
    if (p2 - p1 + 1 - longest > k) {
      letters.set(s[p1], letters.get(s[p1]) - 1);
      p1++;
    }
  }
  return p2 - p1;
};