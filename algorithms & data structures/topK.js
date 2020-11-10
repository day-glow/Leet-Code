/**
 * Given a non-empty list of words, return the k most frequent elements.
 * Your answer should be sorted by frequency from highest to lowest.
 * If two words have the same frequency, then the word with the lower alphabetical order comes first.
 *
 *
 * Ex 1:
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 *
 * Goal: organize array of words (ordered by most --> least)
 *
 * I- array of words (string type), k (highest/most frequent word) given
 * O- array of words (ordered by most --> least)
 * SE- n/a
 * C- n/a
 * E- expect k <= array length
 *
 * viz-  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
 *   "the" = 4
 *   "day" = 1
 *   "is" = 3
 *   "sunny" = 2
 *
 * output = ["the", "is", "sunny", "day"]
 */

// start with a function, input an array
const topK = (arr, k) => {


  // declare object container to store words
  const wordFrequencies = {};

  // iterate over input array
  arr.forEach((word) => {
    // compare individual element to obj
    // if obj contains word
    if (wordFrequencies[word]) {
      // increment value by one
      wordFrequencies[word] += 1;
    } else {
      // if obj does not contain word,
      // add word to obj and set value to one.
      wordFrequencies[word] = 1;
    }
  });

  const unsortedResults = Object.keys(wordFrequencies); // ["the", "day", "is", "sunny"] -> ["the", "is", "sunny", "day"]

  let results = unsortedResults.sort((a, b) => wordFrequencies[b] - wordFrequencies[a]);

  //return first k elements if k < results length
  if (results.length > k) {
    results = results.slice(0, k);
  }
  // return results array
  return results;
}

const output = topK(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 3);
console.log(output);