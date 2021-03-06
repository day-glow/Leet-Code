/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the window size.
double next(int val) Returns the moving average of the last size values of the stream.

Example 1:
Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
*/

//Double Ended Queue Array Approach
//TC-O(1)
//SC-O(n)
var MovingAverage = function(size) {
  this.avgGroup = [];
  this.maxSize = size;
  this.headIdx = 0;
  this.runSum = 0;
};

MovingAverage.prototype.next = function(val) {
  if (this.avgGroup.length >= this.maxSize) {
    this.avgGroup[this.avgGroup.length] = val;
    this.runSum = this.runSum - this.avgGroup[this.headIdx++] + val;
    return this.runSum / this.maxSize;
  }

  this.avgGroup[this.avgGroup.length] = val;
  this.runSum += val;
  return this.runSum / this.avgGroup.length;
};

//Circular Queue Approach
//same TC/SC but saves on space, keeping a set queue size and discarding elements
