/*
https://leetcode.com/problems/time-based-key-value-store/

Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)
Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)
Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").

Example 1:
Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:
TimeMap kv;
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
kv.get("foo", 1);  // output "bar"
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
kv.set("foo", "bar2", 4);
kv.get("foo", 4); // output "bar2"
kv.get("foo", 5); //output "bar2"

Example 2:
Input: inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
Output: [null,null,null,"","high","high","low","low"]
*/

//Hash Map w/ Arry w/ Binary Search
var TimeMap = function() {
  this.map = new Map();
};
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map.has(key)) {
    let prev = this.map.get(key);
    prev.push([timestamp, value])
    this.map.set(key, prev)
  } else {
    this.map.set(key, [[timestamp, value]])
  }
};
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return "";
  let prevTimes = this.map.get(key).slice(0);
  if (!prevTimes.length || prevTimes[0][0] > timestamp) return "";
  let p1 = 0;
  let p2 = prevTimes.length - 1;
  while (p1 < p2) {
    let m = Math.floor((p2 + p1) / 2);
    if (prevTimes[m][0] < timestamp) {
      p1 = m + 1;
    } else {
      p2 = m;
    }
  }
  if (prevTimes[p1][0] <= timestamp) return prevTimes[p1][1];
  if (prevTimes[p1 - 1][0] || prevTimes[p1 - 1][0] <= timestamp) return prevTimes[p1 - 1][1];
  return '';
};

//HashMap w/Array using index as timestamp
var TimeMap = function() {
  this.map = new Map();
};
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);
  let item = this.map.get(key);
  item[timestamp] = value;
};
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return "";
  let item = this.map.get(key);
  for (let i = timestamp;i>=0;i--) {
      if(item[i] != null) {
          return item[i];
      }
  }
  return "";
};

//Hash Map w/ Array
var TimeMap = function() {
  this.map = new Map();
};
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);
  let prev = this.map.get(key);
  prev.push([timestamp, value])
  this.map.set(key, prev);
};
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return "";
  let prevTimes = this.map.get(key);
  let p = prevTimes.length - 1;
  if (!prevTimes.length || prevTimes[0][0] > timestamp) return "";
  let next = prevTimes[p];
  while (next[0] > timestamp) next = prevTimes[p--];
  return next[1];
};