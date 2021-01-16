/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.size > 0) {
    let [prevVal, prevMin] = this.stack[this.stack.length - 1];
    this.stack.push([x, Math.min(prevMin, x)]);
  } else {
    this.stack.push([x, x]);
  }
  this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let [x, min] = this.stack.pop();
  this.size--;
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.size - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let [topVal, topMin] = this.stack[this.stack.length - 1];
  return topMin;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */