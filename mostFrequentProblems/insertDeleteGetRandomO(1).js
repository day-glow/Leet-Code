/*
https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.


Example 1:
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation:
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
*/

//HashMap + Array approach O(1):
  //save idx of val and last val in array list
  //save last val in array list
  //swap spots
  //pop to remove
  //reset new idx of swapped val
  //delete val removed
var RandomizedSet = function() {
  this.dict = new Map();
  this.list = new Array();
};
RandomizedSet.prototype.insert = function(val) {
  if (this.dict.has(val)) return false;
  this.dict.set(val, this.list.length);
  this.list.push(val);
  return true;
};
RandomizedSet.prototype.remove = function(val) {
  if (!this.dict.has(val)) return false;
  let valIdx = this.dict.get(val);
  let endIdx = this.list.length - 1;
  let lastNum = this.list[endIdx];

  [this.list[valIdx], this.list[endIdx]] = [this.list[endIdx], this.list[valIdx]]
  this.list.pop();
  this.dict.set(lastNum, valIdx);
  this.dict.delete(val);
  return true;
};
RandomizedSet.prototype.getRandom = function() {
  return [...this.list][Math.floor(Math.random() * this.list.length)];
};

//Set approach refactored:
var RandomizedSet = function() {
  this.randomizedSet = new Set();
};
RandomizedSet.prototype.insert = function(val) {
  return this.randomizedSet.size !== this.randomizedSet.add(val).size;
};
RandomizedSet.prototype.remove = function(val) {
  return this.randomizedSet.delete(val);
};
RandomizedSet.prototype.getRandom = function() {
  return [...this.randomizedSet][Math.floor(Math.random() * this.randomizedSet.size)];
};

//refactored:
var RandomizedSet = function() {
  this.randomizedSet = new Set();
};
RandomizedSet.prototype.insert = function(val) {
  if (this.randomizedSet.has(val)) return false;
  this.randomizedSet.add(val);
  return true;
};
RandomizedSet.prototype.remove = function(val) {
  if (!this.randomizedSet.has(val)) return false;
  this.randomizedSet.delete(val);
  return true;
};
RandomizedSet.prototype.getRandom = function() {
  return Array.from(this.randomizedSet)[Math.floor(Math.random() * this.randomizedSet.size)];
};


/**
 * Initialize your data structure here.
 */
//TC-O(1)
//SC-O(1)
 var RandomizedSet = function() {
  this.randomizedSet = new Set();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
//TC-O(1)
//SC-O(1)
RandomizedSet.prototype.insert = function(val) {
  let valNotInSetPriorToInsert = true;
  this.randomizedSet.has(val) ? valNotInSetPriorToInsert = false : this.randomizedSet.add(val);
  return valNotInSetPriorToInsert;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
//TC-O(1)
//SC-O(1)
RandomizedSet.prototype.remove = function(val) {
  if (this.randomizedSet.has(val)) {
    this.randomizedSet.delete(val);
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
//TC-O(n)
//SC-O(1)
RandomizedSet.prototype.getRandom = function() {
  let currentSet = Array.from(this.randomizedSet);
  return currentSet[Math.floor(Math.random() * currentSet.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */