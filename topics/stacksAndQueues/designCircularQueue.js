/*
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implementation the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.

Example 1:
Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
*/

//Array Approach
var MyCircularQueue = function(k) {
  this.queue = [];
  this.length = 0;
  this.size = k;
  this.head = -1;
  this.tail = -1;
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.length >= this.size) return false;
  this.tail = (++this.tail) % this.size;
  this.queue[this.tail] = value;
  this.length++;
  if (this.head === -1) this.head = 0;
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.length === 0) return false;
  this.queue[this.head] = [];
  this.head = (++this.head) % this.size;
  this.length--;
  return true;
};

MyCircularQueue.prototype.Front = function() {
  return !this.isEmpty() ? this.queue[this.head] : -1;
};

MyCircularQueue.prototype.Rear = function() {
  return !this.isEmpty() ? this.queue[this.tail] : -1;
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.length === 0;
};

MyCircularQueue.prototype.isFull = function() {
  return this.length === this.size;
};