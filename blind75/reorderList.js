/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
step 1: slow&fast pointers to find mid
p1       m
|        |
1->2->3->4->5->6->7->null
                  |
                  p2

step 2: reverse second half
node
|
4->5->6->7->null
7->6->5->4->null

step 3: sew together (alternating)
1->2->3 &  7->6->5->4->null
1->7->2->6->3->5->4->null

in-place no return val
*/

//second pass refactored:
var reorderList = function(head) {
  if (!head || !head.next) return head;
  let l2 = null;

  let p1 = head;
  let p2 = head;
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p2 = p1.next;
  p1.next = null;
  p1 = head;

  while (p2) {
    let prev = l2;
    let temp = p2.next;
    l2 = p2;
    l2.next = prev;
    p2 = temp;
  }
  p2 = l2;

  while (p1 && p2) {
    let l1Next = p1.next;
    let l2Next = p2.next;
    p1.next = p2;
    p2.next = l1Next;
    p1 = l1Next;
    p2 = l2Next;
  }
};

//second pass (no helper functions):
//find end and midpoint with fast/slow
//cut second half LL off and reverse
//zipper LL's together in place
  //1->2
  //3->4->5
  //3->null
var reorderList = function(head) {
  if (!head || !head.next) return head;
  let l1 = head;
  let l2 = null;

  //find end and midpoint with fast/slow
  let p1 = head;
  let p2 = head;
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p2 = p1.next;
  p1.next = null;
  p1 = head;

  //cut second half LL off and reverse
  while (p2) {
    let prev = l2;//null
    let temp = p2.next;//4->5
    l2 = p2;//p1 = 3
    l2.next = prev;
    p2 = temp;
  }
  p2 = l2;
  //zipper LL's together in place
  while (p1 && p2) {
    let l1Next = p1.next;
    let l2Next = p2.next;
    p1.next = p2;
    p2.next = l1Next;
    p1 = l1Next;
    p2 = l2Next;
  }
};


//TC-O(n)
//SC-O(1)
const reverse = node => {
  if (!node ||!node.next) return node;

  let n = reverse(node.next);
  node.next.next = node;
  node.next = null;

  return n;
}

const reorderList = head => {
  if (!head || !head.next) return head;
  let p1 = head;
  let p2 = head;
  let mid;

  //two pointers, fast & slow (find mid)
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  mid = p1.next;
  p1.next = null;
  p1 = head;

  //reverse second half
  let revHalf = reverse(mid);

  //iterate over both and sew together
  while (p1 && revHalf) {

    let temp = p1.next;
    p1.next = revHalf;
    p1 = temp;

    temp = revHalf.next;
    revHalf.next = p1;
    revHalf = temp;
  }

};

//refractored
const reverse = node => {
  if (!node ||!node.next) return node;

  let n = reverse(node.next);
  node.next.next = node;
  node.next = null;

  return n;
}

const reorderList = head => {
  if (!head || !head.next) return head;
  let p1 = head;
  let p2 = head;

  //two pointers, fast & slow (find mid)
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p2 = p1.next;
  p1.next = null;
  p1 = head;

  //reverse second half
  p2 = reverse(p2);

  //iterate over both and sew together
  while (p1 && p2) {
    let temp = p1.next;
    p1.next = p2;
    p1 = temp;

    temp = p2.next;
    p2.next = p1;
    p2 = temp;
  }

};