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

/**
 * Initialize your data structure here.
  //key: value (Set)
  //timestamp,
  //TC-O(1)
  //SC-O(1)
 */
  var TimeMap = function() {
    this.map = new Map();
  };

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   * //TC-O(1)
     //SC-O(1)
   */
  TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map.has(key)) {
      let prev = this.map.get(key);
      prev.push([timestamp, value])
      this.map.set(key, prev)
    } else {
      this.map.set(key, [[timestamp, value]])
    }

  };

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
      //<= timestamp
      //if none are < ts, return ''
      //timelimit exceeded (binary search, add pivot optimization)
    //TC-O(nlogn)
    //SC-O(1)
   */
  TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return "";
    let prevTimes = this.map.get(key).slice(0);
    console.log(prevTimes)
    if (!prevTimes.length || prevTimes[0][0] > timestamp) return "";

    let p1 = 0;
    let p2 = prevTimes.length - 1;
    let p = Math.floor(p2 - p1 / 2);

    while (prevTimes[p][0] > timestamp) {
      p = Math.floor(p2 - p1 / 2);
      if (prevTimes[p][0] === timestamp) {
        return prevTimes[p][1];
      } else if (prevTimes[p][0] <) {

      }
    }
    return next[1];
  };

  /**
   * Your TimeMap object will be instantiated and called as such:
   * var obj = new TimeMap()
   * obj.set(key,value,timestamp)
   * var param_2 = obj.get(key,timestamp)
   */