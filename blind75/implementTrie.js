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
class TrieNode {
  constructor(val = null) {
    this.val = val;
    this.isEnd = false;
    this.children = new Map();
  }
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let currChar of word) {
    if (!node.children.has(currChar)) node.children.set(currChar, new TrieNode(currChar));
    node = node.children.get(currChar);
  }
  node.isEnd = true;
};

Trie.prototype.search = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node.children.has(c)) return false;
    node = node.children.get(c);
  }
  return node.isEnd;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let c of prefix) {
    if (!node.children.has(c)) return false;
    node = node.children.get(c);
  }
  return true;
};

//hash map approach
var TrieNode = function(val = null) {
  this.val = val;
  this.isEnd = false;
  this.children = new Map();
};

var Trie = function() {
  this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node.children.has(c)) node.children.set(c, new TrieNode(c));
    node = node.children.get(c);
  }
  node.isEnd = true;
};

Trie.prototype.search = function(word, isPre = false) {
  let node = this.root;
  for (let c of word) {
    if (!node.children.has(c)) return false;
    node = node.children.get(c);
  }
  return isPre ? true : node.isEnd;
};

Trie.prototype.startsWith = function(prefix) {
  return this.search(prefix, true);
};

//object approach
var TrieNode = function(val = null) {
  this.val = val;
  this.isEnd = false;
  this.children = {};
};

var Trie = function() {
  //this.root = {};
  this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  //iterate over word to insert
  for (let currChar of word) {
    if (!node.children[currChar]) {
      let addLetter = new TrieNode(currChar);
      node.children[currChar] = addLetter;
    }
    node = node.children[currChar];
  }
  node.isEnd = true;
};

Trie.prototype.search = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node.children[c]) return false;
    node = node.children[c];
  }
  return node.isEnd;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let c of prefix) {
    if (!node.children[c]) return false;
    node = node.children[c];
  }
  return true;
};