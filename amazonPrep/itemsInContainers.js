/*
https://leetcode.com/discuss/interview-question/1148760/Items-in-Containers-Amazon-OA

Given a string s consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, and an array of ending indices endIndices, determine the number of items in closed compartments within the substring between the two indices, inclusive.

An item is represented as an asterisk *
A compartment is represented as a pair of pipes | that may or may not have items between them.
Example:
s = '|**|*|*'
startIndices = [1,1]
endIndices = [5,6]

The String has a total 2 closed compartments, one with 2 items and one with 1 item. For the first par of indices, (1,5), the substring is '|**|*'. There are 2 items in a compartment.
For the second pair of indices, (1,6), the substring is '|**|*|' and there 2+1=3 items in compartments.
Both of the answers are returned in an array. [2,3].
*/

var findCount = function(str) {
  let p1 = 0;
  let p2 = str.length - 1;
  let count = 0;
  while (str[p1] !== '|') p1++;
  while (str[p2] !== '|') p2--;
  while (p1 < p2) {
    if (str[p1] === '*') count++;
    p1++;
  }
  return count;
}

var numberOfItems = function(s, startIndices, endIndices) {
  const numPairs = startIndices.length;
  let itemsInCompartments = new Array(numPairs).fill(0);
  for (let i = 0; i < numPairs; i++) {
    itemsInCompartments[i] = findCount(s.substring(startIndices[i] - 1, endIndices[i]));
  }
  return itemsInCompartments;
}

const s = '|**|*|*';
const startIndices = [1,1];
const endIndices = [5,6];

const expectedResult = [2,3];
const actualResult = numberOfItems(s, startIndices, endIndices);
console.log('expected: ', expectedResult, ', actual: ', actualResult);