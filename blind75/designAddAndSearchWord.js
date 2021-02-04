/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.


Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
*/


//map approachZZ
var trieNode = function(val = null) {
  this.val = val;
  this.children = new Map();
};

var WordDictionary = function() {
  this.root = new trieNode();
};

//TC-O(m)
//SC-O(m)
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node.children.has(c)) node.children.set(c, new trieNode(c));
    node = node.children.get(c);
  }
  node.children.set('*', new trieNode('*'));
};

//TC-O(m)
//SC-O(1)
WordDictionary.prototype.search = function(word) {
  function searchSub(node, i) {
    if (word.length === i && node.children.has('*')) return true;
    if (word.length === i) return false;
    if (word[i] === '.') {
      for (let [key, next] of node.children) {
        if (searchSub(next, i + 1)) return true;
      }
      return false;
    }
    if (!node.children.has(word[i])) return false;
    return searchSub(node.children.get(word[i]), i + 1);
  };
  return searchSub(this.root, 0);
};

