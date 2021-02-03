/*
Implement a trie with insert, search, and startsWith methods.

Example:
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
*/

//constructor class for TrieNode and Trie
/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor(val = null) {
    this.val = val;
    this.isEnd = false;
    this.children = new Map();
  }
};

class Trie {
  //this.root = {};
  constructor() {
    this.root = new TrieNode();
  }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  //iterate over word to insert
  for (let currChar of word) {
    if (!node.children.has(currChar)) node.children.set(currChar, new TrieNode(currChar));
    node = node.children.get(currChar);
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node.children.has(c)) return false;
    node = node.children.get(c);
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let c of prefix) {
    if (!node.children.has(c)) return false;
    node = node.children.get(c);
  }
  return true;
};

//