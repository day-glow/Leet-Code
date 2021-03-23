/*
https://leetcode.com/problems/flatten-2d-vector/

Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.

Implement the Vector2D class:

Vector2D(int[][] vec) initializes the object with the 2D vector vec.
next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
hasNext() returns true if there are still some elements in the vector, and false otherwise.

Example 1:
Input
["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
Output
[null, 1, 2, 3, true, true, 4, false]

Explanation
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False
*/

//two pointers optimized approach:
//TC-O(1) //storing a reference to vec, not creating new
//SC-O(1) //storing reference
var Vector2D = function(vec) {
  this.vector = vec;
  this.innerPointer = 0;
  this.outerPointer = 0;
};
//TC-O(v/n) or O(1)
Vector2D.prototype.next = function() {
  if (this.hasNext()) return this.vector[this.outerPointer][this.innerPointer++];
};
//TC-O(v/n) or O(1)
Vector2D.prototype.hasNext = function() {
  this.advToNext();
  return this.outerPointer < this.vector.length;
};
//TC-O(v/n)
Vector2D.prototype.advToNext = function() {
  while (this.outerPointer < this.vector.length && this.innerPointer === this.vector[this.outerPointer].length) {
    this.outerPointer++;
    this.innerPointer = 0;
  }
};

//brute force, first pass:
//SC-O(n) //making a new data structure of the vector
/**
 * @param {number[][]} vec
 */
//TC-O(n+v)
 var Vector2D = function(vec) {
  this.vector = [null];
  //iterate and flatten input vec to array
  vec.forEach((v) => {
    if (v.length === 1) this.vector.push(v);
    if (v.length > 1) v.forEach((subV) => this.vector.push(subV));
  })
  this.pointer = 0;
};

/**
 * @return {number}
 */
//TC-O(1)
Vector2D.prototype.next = function() {
  return this.vector[++this.pointer];
};

/**
 * @return {boolean}
 */
//TC-O(1)
Vector2D.prototype.hasNext = function() {
  return this.vector.length > this.pointer + 1;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */