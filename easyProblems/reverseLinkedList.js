/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

//TC-O(n)
//SC-O(n)
//RECURSION:
const reverseList = head => {
  if (head === null || head.next === null) return head;

  let node = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return node;
};

//ITERATIVE:
//TC-O(n)
//SC-O(1)
//iterative, intuitively reassign node's and next's with temp variables
const reverseList = head => {
  let prev = null; //null
  let current = head; //1

  while (current !== null) {
    let tempNext = current.next; //2

    //reassign head -> null
    current.next = prev;

    //reassign pointers
    prev = current;
    current = tempNext;
  }
  return prev;
};

//second pass
var reverseList = function(head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
//second pass need practice with recursive solution
var reverseList = function(head) {
  if (head === null || head.next === null) return head;
  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};