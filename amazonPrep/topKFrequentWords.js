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

/*
1. brute force, count time O(n^2)/space O(n)
2. sort words, then count using stack/tuples or map, time O(nlogn) space O(n)
3. hash Map, count occurrances, time O(nlogn) space O(n)

iterate
add to hashmap freq
sort/slice top k
*/

var topKFrequent = function(words, k) {
  if (!words.length || !k) return [];
  let wordFreq = new Map();
  for (let word of words) {
    wordFreq.has(word) ? wordFreq.set(word, wordFreq.get(word) + 1) : wordFreq.set(word, 1);
  }
  const sorted = [...wordFreq.keys()].sort((a, b) => wordFreq.get(b) !== wordFreq.get(a) ? wordFreq.get(b) - wordFreq.get(a) : a.localeCompare(b));
  if (sorted.length > k) return sorted.slice(0, k);
  return sorted;
};
