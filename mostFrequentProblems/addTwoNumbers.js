/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//refactored (reduced if conditionals):
var addTwoNumbers = function(l1, l2) {
  let subSum = 0;
  let carry = 0;
  let head = new ListNode();
  let currNode = head;

  while (l1 !== null || l2 !== null) {
    let x = (l1 !== null) ? l1.val : 0;
    let y = (l2 !== null) ? l2.val : 0;
    subSum = carry + x + y;
    carry = Math.floor(subSum / 10);
    currNode.next = new ListNode(subSum % 10);
    currNode = currNode.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry > 0) currNode.next = new ListNode(carry);
  return head.next;
};

//refactored:
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = new ListNode();
  let head = sum;

  while (l1 || l2) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    if (carry <= 9) {
      sum.next = new ListNode(carry);
      carry = 0;
    } else {
      sum.next = new ListNode(carry % 10);
      carry = Math.floor(carry / 10);
    }
    sum = sum.next;
  }
  if (carry) sum.next = new ListNode(carry);
  return head.next;
};

//TC-O(n)
//SC-O(n+1)
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = new ListNode();
  let head = sum;
  //iterate over both LL, while loop
  while (l1 && l2) {
    carry += l1.val + l2.val;
    if (carry <= 9) {
      sum.next = new ListNode(carry);
      carry = 0;
    } else {
      sum.next = new ListNode(carry % 10);
      carry = Math.floor(carry / 10);
    }
    sum = sum.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l1) {
    while (l1) {
      carry += l1.val;
      if (carry < 10) {
        sum.next = new ListNode(carry);
        carry = 0;
      } else {
        sum.next = new ListNode(carry % 10);
        carry = Math.floor(carry / 10);
      }
      sum = sum.next;
      l1 = l1.next;
    }
  }
  if (l2) {
    while (l2) {
      carry += l2.val;
      if (carry < 10) {
        sum.next = new ListNode(carry);
        carry = 0;
      } else {
        sum.next = new ListNode(carry % 10);
        carry = Math.floor(carry / 10);
      }
      sum = sum.next;
      l2 = l2.next;
    }
  }
  if (carry) {
    sum.next = new ListNode(carry);
  }

  return head.next;
};