/*
HackerRank Amazon practice test

Follow up reasoning:
1. Brute force, iterate over each word in the review library to see if the chars match for each substring of the typed word for the search. 

Time O(n*n*m!) iterating over each word in the library for each char length of the search word n = library length and library words length, m = search word length factorial

Space O(1)

2. Trie is the most logical for word searches where the root can have multiple branches.  I should have instantiated the nodes and trie root with a class to make it easier to find words later.

Time O(n) to create the trie

O(n) to find prefix and other words

Space O(n) for the words in the library and hold the trie structure

*/


var addWordToTrie = function( trieRoot, word ) {
  let node = trieRoot;
  for (let char of word) {
    if (!node.has(char)) {
      node.set(char, new Map());
    }
    node = node.get(char);
  }
  return trieRoot;
}

var getRemainderOfWords = function( node, string, words) {
  //console.log('building from node: ', node);
  if (node.size === 0) words.push(string);
  for (let nextLetter of node.keys()) {
    getRemainderOfWords(node.get(nextLetter), string + nextLetter, words);
  }
  return words;
}

var findWordsWithPrefix = function( trieRoot, prefix ) {
  let node = trieRoot;
  let optionsStartingWithPrefix = [];
  let string = '';
  for (let char of prefix) {
    if (node.has(char)) {
      string += char;
    }
    node = node.get(char);
  }

  if (string === '') return optionsStartingWithPrefix;

  for (let [key, values] of node) {

    if (values.size === 0) return [string];
    //to do: add logic to grab remainder of words
    let remainder = getRemainderOfWords(node, string, []).sort((a, b) => a.localeCompare(b)).join(' ');
    console.log('remainder: ', remainder)
    optionsStartingWithPrefix.push(remainder);
  }
  return optionsStartingWithPrefix;
}

function searchSuggestions(repository, customerQuery) {
  if (!repository.length || !customerQuery || customerQuery.length < 2) return [];
  let suggestions = new Array();
  let trieRoot = new Map();
  for (let wordInRepo of repository) {
    trieRoot = addWordToTrie(trieRoot, wordInRepo);
  }
  //console.log(trieRoot)
  for (let i = 1; i < customerQuery.length; i++) {
    //console.log(`${findWordsWithPrefix( trieRoot, customerQuery.substring(0, i + 1) )}\n`);
    suggestions.push(findWordsWithPrefix(trieRoot, customerQuery.substring(0, i + 1)));
  }
  return suggestions;
}