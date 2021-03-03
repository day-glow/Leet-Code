/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

//second pass, same approach (hash map):
//iterate over words
//store each word in map (key: sorted by the letters, values: words)
//iterate over map and push into results
const groupAnagrams = strs => {
  let letters = new Map();
  for (let word of strs) {
    let sorted = word.split('').sort((a, b) => a.localeCompare(b)).join('');

    if (letters.has(sorted)) {
      let prev = letters.get(sorted);
      prev.push(word);
      letters.set(sorted, prev);
    } else {
      letters.set(sorted, [word]);
    }
  }
  return Array.from(letters.values());
};

//sorted hashmap approach
//TC-O(nKlogK) -sorting algo KlogK
//SC-O(nK)
const groupAnagrams = strs => {
  let anagrams = [];
  let map = new Map();

  //sorted map
  for (let word of strs) {
    let sortedWord = word.split('').sort((a, b) => a.localeCompare(b)).join('');
    if (map.has(sortedWord)) {

      let prev = map.get(sortedWord);
      prev.push(word);
      map.set(sortedWord, prev);
    } else {
      map.set(sortedWord, [word]);
    }
  }
  for (let [key, value] of map) {
    anagrams.push(value);
  }
  return anagrams;
};