/*
https://leetcode.com/discuss/interview-question/844979/amazon-online-assessment-question

//My approach: DFS
Question:
In order to improve customer experience, Amazon has developed a system to provide recommendations to the customer regarding the item they can purchase. Based on historical customer purchase information, an item association can be defined as - If an item A is ordered by a customer, then item B is also likely to be ordered by the same customer (e.g. Book 1 is frequently orderered with Book 2). All items that are linked together by an item association can be considered to be in the same group. An item without any association to any other item can be considered to be in its own item association group of size 1.

Given a list of item association relationships(i.e. group of items likely to be ordered together), write an algorithm that outputs the largest item association group. If two groups have the same number of items then select the group which contains the item that appears first in lexicographic order.

Input
The input to the function/method consists of an argument - itemAssociation, a list containing parts of string representing the items that are ordered together.

Output
Return a list of strings representing the largest association group sorted lexicographically.

Example
Input:
itemAssociation: [
[Item1, Item2],
[Item3, Item4],
[Item4, Item5]
]

Output:
[Item3, Item4, Item5]

Explanation:
There are two item association groups:
group1: [Item1, Item2]
group2: [Item3,Item4,Item5]
In the available associations, group2 has the largest association. So, the output is [Item3, Item4, Item5].

Helper Description in java
The following class is used to represent a Pair of strings and is already implemented in the default code (Do not write this definition again in your code):

*/

class PairString(String first, String second) {
		this.first = first;
		this.second = second;
}

var LargestItemAssociation = function( itemAssociation ) {
  const numOfItems = new Map();
  itemAssociation.forEach((pair) => {
    numOfItems.set(pair[0], -1);
    numOfItems.set(pair[1], -1);
  });
  console.log(numOfItems)
	//let headNodeMap = new Array(numOfItems.size).fill(-1);
  for (let [pairItem, pairSecond] of itemAssociation) {
    while (numOfItems.get(pairItem) !== -1) pairItem = numOfItems.get(pairItem);
    while (numOfItems.get(pairSecond) !== -1) pairSecond = numOfItems.get(pairSecond);
    if (pairItem !== pairSecond) numOfItems.set(pairItem, pairSecond);
  }
  console.log(numOfItems)

  let groups = new Map();
  for (let [item, head] of numOfItems) {
    if (head === -1) {
      head = item;
    } else {
      while (head !== -1 && numOfItems.get(head) !== -1) head = numOfItems.get(head);
    }

    if (groups.has(head)) {
      let prev = groups.get(head);
      prev.push(item);
      groups.set(head, prev);
    } else {
      groups.set(head, [item]);
    }
  }
  console.log(groups)
  let maxSize = 0;
  let maxHead;
  for (let [head, itemsInGroup] of groups) {
    if (itemsInGroup.length >= maxSize) {
      maxSize = itemsInGroup.length;
      maxHead = head;
    }
  }
  return groups.get(maxHead);
}

const itemAssociation = [['Item1', 'Item2'],['Item3', 'Item4'],['Item4', 'Item5']];

const expectedResult = ['Item3', 'Item4', 'Item5'];
const actualResult = LargestItemAssociation(itemAssociation);
console.log('expected: ', expectedResult, ', actual: ', actualResult);

/*
iterate over the items and connect the overlapping items
is the input list sorted?
if yes, it is similar to an interval problem, merging overlaps (not exactly numbered)

what if it we use hash map to keep groups, adj list to point to head node (like the components)

array = {
  item1: item1,
  item2: item1,
  item3: item3,
  item4: item4,
  item5: item4,
  item6: item4,
  item7: item3,
}
iterate over map, count max nodes
var countComponents = function(n, edges) {
  if (!n || !edges.length) return n;
  const nodeConnections = new Array(n).fill(-1);

  for (let [edgeFrom, edgeTo] of edges) {
    while (nodeConnections[edgeFrom] !== -1) edgeFrom = nodeConnections[edgeFrom];
    while (nodeConnections[edgeTo] !== -1) edgeTo = nodeConnections[edgeTo];
    if (edgeTo !== edgeFrom) nodeConnections[edgeTo] = edgeFrom;
  }

  let components = 0;
  for (let head of nodeConnections) {
    if (head === -1) components++;
  }
  return components;
};

*/


