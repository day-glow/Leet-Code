/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass? YES

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/
//Create temp Head node (if given helper or write)
//Two Pass O(2L)/O(1), traverse LL counting length, repeat and remove
//One Pass w/ 2 Pointers O(L)/O(1), used spaced out pointers to remove once p2 === null.

/*
Two Pointers, one pass approach
TC-O(L)
SC-O(1)
*/
var removeNthFromEnd = function(head, n) {
  let tempHead = new ListNode();
  tempHead.next = head;
  let p1 = tempHead;
  let p2 = tempHead;
  if (!p1.next && n > 0) return null;
  while (p2 && n-- >= 0) p2 = p2.next;
  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  if (!p2) p1.next = p1.next.next;
  return tempHead.next;
};

//seconds:
var Node = function(val) {
  this.val = val;
  this.next = null;
};
const removeNthFromEnd = (head, n) => {
  if (!head.next && n > 0) return null;
  let tempNode = new Node();
  tempNode.next = head;
  let p1 = tempNode;
  let p2 = p1;

  for (let i = 0; i <= n; i++) {
    p2 = p2.next;
  }

  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  if (!p2) {
    //if (p1 === head) return head.next;
    p1.next = p1.next.next;
  }

  return tempNode.next;
};

//1,2,3,4,5
//remove 4
//node with node.next.next.next equals null is the target
//reassign target.next to target.next.next (deleting nth from end node)
//thirds:
var Node = function(val) {
  this.val = val;
  this.next = null;
};
var removeNthFromEnd = function(head, n) {
  let tempHead = new Node();
  tempHead.next = head;
  let p1 = tempHead;
  let p2 = tempHead;
  if (p1.next === null && n > 0) return null;
  while (p2 !== null && n >= 0) {
    p2 = p2.next;
    n--;
  }
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  if (p2 === null) {
    p1.next = p1.next.next;
  }

  return tempHead.next;
};