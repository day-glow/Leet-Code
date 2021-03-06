/*
https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
*/
//recursion O(n+m)/O(n+m)
//iterative O(n+m)/O(1), remember to create new ListNode & move prev pointer each time a node is addded

//thirds:
//O(n + m)
//O(1)
var mergeTwoLists = function(l1, l2) {
  let prehead = new ListNode(-1);
  let prev = prehead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      prev.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 ? l1: l2;
  return prehead.next;
};

//recursion
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

//iterative approach
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list

  while (l1 !== null && l2 !== null) {

  // Select the smallest value from either linked list,
  // then increment that list forward.
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val)
          l1 = l1.next
      } else {
          list.next = new ListNode(l2.val)
          l2 = l2.next
      }

      list = list.next
  }

// It's possible that one linked list is shorter than the other so we just
// add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2

// return .next because this first element in the linkedlist is empty
  return head.next
};