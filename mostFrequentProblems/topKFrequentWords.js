/*
https://leetcode.com/problems/top-k-frequent-words/

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.
*/

//refactored:
var topKFrequent = function(words, k) {
  let frequencies = new Map();
  words.forEach(w => frequencies.set(w, frequencies.get(w) + 1 || 1));
  let topK = Array.from(frequencies.entries()).sort((a, b) => {
    return b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
  }).slice(0, k).map(word => word[0]);
  return topK;
};

//map approach
var topKFrequent = function(words, k) {
  let topK = [];
  let frequencies = new Map();
  for (let w of words) {
    let prev = frequencies.has(w) ? frequencies.get(w) : 0;
    frequencies.set(w, prev + 1);
  }
  let sortedFreq = Array.from(frequencies).sort((a, b) => {
    if (b[1] === a[1]) return a[0].localeCompare(b[0])
    return b[1] - a[1];
  }).slice(0, k);
  for (let [w, c] of sortedFreq) topK.push(w);
  return topK;
};